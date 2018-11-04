export interface LoginState {
  email: string;
  password: string;
}

export interface LoginProps {
  onSubmit?: jest.Mock<{}>;
}
