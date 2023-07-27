import type { PagedList, Token, PaymentCurrency } from './'

export enum UserStatus {
  ACTIVE = 'ACTIVE',
  INACTIVE = 'INACTIVE',
  DELETED = 'DELETED',
  BLOCKED = 'BLOCKED',
}

export enum UserRole {
  USER = 'USER',
  ADMIN = 'ADMIN',
  SUPER = 'SUPER',
}

export interface User {
  uid: string
  role: UserRole
  address: string
  receiverAddress?: string
  name?: string
  email?: string
  chainId?: number
  token?: Token
  currency: PaymentCurrency
  date: number
  status: UserStatus
  apiKey?: string
}

export type UserUpdateRequest = Partial<Omit<User, 'date' | 'uid' | 'role'>>

export type UserResponse = Omit<User, 'apiKey'>

export type PagedUserResponse = PagedList<UserResponse>
