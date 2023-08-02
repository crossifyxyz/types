import type { PagedList, Token, CurrencyType, TokenAmount } from './'

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
  currency: CurrencyType
  date: number
  status: UserStatus
  apiKey?: string
}

//=================REQUEST/RESPONSE=================
// REQUESTS
export type UserUpdateRequest = Partial<Omit<User, 'date' | 'uid' | 'role'>>

// RESPONSES
export type UserResponse = Omit<User, 'apiKey'>
export type PagedUserResponse = PagedList<UserResponse>
export type WalletBalancesResponse = {
  raw: TokenAmount[]
  byChain: Record<number, TokenAmount[]>
  byChainAddress: Record<number, Record<string, TokenAmount>>
}
