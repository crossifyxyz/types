import type {
  SwapStep as OrgSwapStep,
  CrossStep as OrgCrossStep,
  CustomStep as OrgCustomStep,
  ProtocolStep as OrgProtocolStep,
  StepBase,
  Route as OrgRoute,
} from '@lifi/types'

// =============STEP================
type BigNumberish = string | number | any
type TransactionRequest = Omit<
  StepBase['transactionRequest'],
  | 'nonce'
  | 'gasLimit'
  | 'gasPrice'
  | 'data'
  | 'value'
  | 'accessList'
  | 'maxPriorityFeePerGas'
  | 'maxFeePerGas'
> & {
  nonce?: BigNumberish
  gasLimit?: BigNumberish
  gasPrice?: BigNumberish
  data?: string | any
  value?: BigNumberish
  accessList?: any
  maxPriorityFeePerGas?: BigNumberish
  maxFeePerGas?: BigNumberish
}

type ReplaceTransactionRequest<T> = Omit<T, 'transactionRequest'> & {
  transactionRequest?: TransactionRequest
}

type SwapStep = ReplaceTransactionRequest<OrgSwapStep>
type CrossStep = ReplaceTransactionRequest<OrgCrossStep>
type CustomStep = ReplaceTransactionRequest<OrgCustomStep>
type ProtocolStep = ReplaceTransactionRequest<OrgProtocolStep>

type Step = SwapStep | CrossStep | CustomStep | ProtocolStep

export interface SterilLifiStep extends Omit<Step, 'type'> {
  type: 'lifi'
  includedSteps: Step[]
}
// =============ROUTE================
export interface SterilLifiRoute extends Omit<OrgRoute, 'steps'> {
  steps: SterilLifiStep[]
}
// ==================================
