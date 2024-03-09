import { SolanaFmApiTransaction } from './transaction.type';

export type SolanaFmApiTransactionsResult = {
  status: string;
  message: string;
  result: {
    data: SolanaFmApiTransaction[];
    pagination?: {
      currentPage: number;
      totalPages: number;
    };
  };
};
