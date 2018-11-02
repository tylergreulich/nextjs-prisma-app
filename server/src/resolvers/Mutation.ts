import * as bcrypt from 'bcryptjs';
import * as jwt from 'jsonwebtoken';
import { promisify } from 'util';
import { randomBytes } from 'crypto';

import { User } from './../generated/prisma';
import { Context } from './../utils';
import { Item, ItemCreateInput } from '../generated/prisma';

export const Mutation = {
  createItem: async (_, args: ItemCreateInput, { db }: Context, info) => {
    const item = await db.mutation.createItem(
      {
        data: {
          ...args
        }
      },
      info
    );

    return item;
  },
  updateItem: async (_, args: Item, { db }: Context, info) => {
    const updates = { ...args };
    delete updates.id;
    const item = await db.mutation.updateItem(
      {
        data: updates,
        where: { id: args.id }
      },
      info
    );

    return item;
  },
  deleteItem: async (_, { id }: Item, { db }: Context, info) => {
    const where = { id };

    await db.query.item({ where }, `{ id title }`);

    // TODO: check if they own it or have the permissions

    return db.mutation.deleteItem({ where }, info);
  },
  register: async (
    _,
    { email, name, password }: User,
    { db, response }: Context,
    info
  ) => {
    email = email.toLowerCase();

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await db.mutation.createUser(
      {
        data: {
          email,
          name,
          password: hashedPassword,
          permissions: { set: ['USER'] }
        }
      },
      info
    );

    const token = jwt.sign({ userId: user.id }, process.env.APP_SECRET!);

    response.cookie('token', token, {
      httpOnly: true,
      maxAge: 1000 * 60 * 60 * 24 * 365 // 1y
    });

    return user;
  },
  login: async (
    _,
    { email, password }: User,
    { db, response }: Context,
    info
  ) => {
    const user = await db.query.user({
      where: { email }
    });

    if (!user) {
      throw new Error(`No such user found for email ${email}`);
    }

    const isValid = await bcrypt.compare(password, user.password);

    if (!isValid) {
      throw new Error('Invalid password');
    }

    const token = jwt.sign({ userId: user.id }, process.env.APP_SECRET!);

    response.cookie('token', token, {
      httpOnly: true,
      maxAge: 1000 * 60 * 60 * 24 * 365 // 1y
    });

    return user;
  },
  logout: (_, __, { response }: Context) => {
    response.clearCookie('token');
    return { message: 'Successfully logged out!' };
  },
  requestReset: async (_, { email }, ctx, info) => {
    const user = await ctx.db.query.user({ where: { email } });

    if (!user) {
      throw new Error(`No such user found for email ${email}`);
    }

    const randomBytesPromiseified = promisify(randomBytes);

    const resetToken = (await randomBytesPromiseified(20)).toString('hex');

    const resetTokenExpiry = Date.now() + 3600000; // 1hr

    const res = await ctx.db.mutation.updateUser({
      where: { email },
      data: { resetToken, resetTokenExpiry }
    });

    console.log(res);

    return { message: 'Thanks!' };
    // 3. Email them that reset token
  },
  resetPassword: async (
    parent,
    { email, password, confirmPassword, resetToken },
    ctx,
    info
  ) => {
    if (password !== confirmPassword) {
      throw new Error("Your Passwords don't match!");
    }

    const [user] = await ctx.db.query.users({
      where: {
        resetToken: resetToken,
        resetTokenExpiry_gte: Date.now() - 3600000
      }
    });
    if (!user) {
      throw new Error('This token is either invalid or expired!');
    }

    const newPassword = await bcrypt.hash(password, 10);

    const updatedUser = await ctx.db.mutation.updateUser({
      where: { email: user.email },
      data: {
        password: newPassword,
        resetToken: null,
        resetTokenExpiry: null
      }
    });

    const token = jwt.sign({ userId: updatedUser.id }, process.env.APP_SECRET!);

    ctx.response.cookie('token', token, {
      httpOnly: true,
      maxAge: 1000 * 60 * 60 * 24 * 365
    });

    return updatedUser;
  }
};
