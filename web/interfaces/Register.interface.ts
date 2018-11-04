export interface RegisterState {
  email: string;
  name: string;
  password: string;
}

export interface RegisterProps {
  onSubmit?: jest.Mock<{}>;
}
