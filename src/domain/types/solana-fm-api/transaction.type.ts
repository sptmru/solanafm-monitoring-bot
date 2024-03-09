export type SolanaFmApiTransaction = {
  blockTime: number;
  confirmationStatus: string;
  err: null | object;
  signature: string;
  slot: number;
};
