export interface AuthLogin {
  username: string,
  password: string
}

export interface AuthRegister {
  name: string,
  email: string,
  username: string,
  password: string,
  role: string
}

export interface User {
  name: string,
  username: string,
  role: string,
  email: string,
  token: string,
  expiresIn: number
}
