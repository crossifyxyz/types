import type { PagedList, CurrencyType, TokenAmount, StaticToken } from './'

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
  userName?: string
  displayName?: string
  email?: string
  // chainId?: number
  token?: StaticToken
  currency: CurrencyType
  date: number
  status: UserStatus
  apiKey?: string
}

//=================REQUEST/RESPONSE=================
// REQUESTS
export type UserUpdateRequest = Partial<
  Omit<User, 'date' | 'uid' | 'address' | 'role' | 'apiKey'>
>

// RESPONSES
export type UserResponse = Omit<User, 'apiKey'>

export type PagedUserResponse = PagedList<UserResponse>

export interface WalletBalancesResponse {
  raw: TokenAmount[]
  byChain: { [key: string]: TokenAmount[] }
  byChainAddress: { [key: string]: { [key: string]: TokenAmount } }
}
