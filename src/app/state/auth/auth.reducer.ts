// import {createReducer, on} from "@ngrx/store";
// import {loginRequestAction} from "./auth.actions";
//
// export interface State {
//   name: string,
//   username: string,
//   role: string,
//   email: string,
//   token: string,
//   expiresIn: number
// }
//
// export const initialState: State = {
//   name: '',
//   username: '',
//   role: '',
//   email: '',
//   token: '',
//   expiresIn: 0
// }
//
// const _authReducer = createReducer(
//   initialState,
//   on(loginRequestAction.loginSuccess, (state, {user}) => {
//     return {
//       ...state,
//       name: user.name,
//       username: user.username,
//       role: user.role,
//       email: user.email,
//       token: user.token,
//       expiresIn: user.expiresIn
//     }
//   }),
//   on(loginRequestAction.loginFailure, (state, {error}) => {
//     return {
//       ...state,
//       error: error
//     }
//   })
// );
//
// export function authReducer(state: any, action: any) {
//   return _authReducer(state, action);
// }
