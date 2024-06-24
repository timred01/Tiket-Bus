export interface DataUser {
  userId: string
  email: string
  role: 'user' | 'admin'
  encrypt: string
}

export interface UserState {
  isLogin: boolean
  email: string
  role: 'user' | 'admin'
  setUser: (data: DataUser) => void
  resetUser: () => void
}

