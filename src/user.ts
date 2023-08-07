import type {
  PagedList,
  CurrencyType,
  StaticToken,
  TokenAmount,
  TokenBalancesCache,
} from './'

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
  // chainId: number
  tokenBalances?: TokenBalancesCache
  token?: StaticToken
  currency: CurrencyType
  date: number
  status: UserStatus
  apiKey?: string
}

export type TokenBalances = TokenAmount[]

//=================REQUEST/RESPONSE=================
// REQUESTS
export type UserUpdateRequest = Partial<
  Omit<User, 'date' | 'uid' | 'address' | 'role' | 'apiKey'>
>

// RESPONSES
export type TokenBalancesResponse = TokenBalances

export interface NestedTokenBalancesResponse {
  raw: TokenBalances
  byChain: { [key: string]: TokenAmount[] }
  byChainAddress: { [key: string]: { [key: string]: TokenAmount } }
}

export type UserResponse = Omit<User, 'apiKey'>

export type PagedUserResponse = PagedList<UserResponse>
