import axios from 'axios';

import { config } from '../infrastructure/config/config';
import { SolanaFmApiParams } from '../domain/types/solana-fm-api/api-params.type';
import { logger } from '../misc/Logger';
import { SolanaFmApiTransactionsResult } from '../domain/types/solana-fm-api/transactions-result.type';
import { SolanaFmApiTransaction } from '../domain/types/solana-fm-api/transaction.type';

export class SolanaFmApiService {
  static async getWalletOrAccountTransactions(
    wallet: string,
    params: SolanaFmApiParams
  ): Promise<SolanaFmApiTransactionsResult> {
    try {
      const requestEndpoint = `${config.baseApiUrl}/accounts/${wallet}/transactions`;
      const response = await axios.get(requestEndpoint, { params, headers: { ApiKey: config.apiKey } });
      return response.data;
    } catch (err) {
      logger.error(`Wallet transactions request failed: ${err.message}`);
      return { status: 'error', message: err.message, result: { data: [] } };
    }
  }

  static async getFailedTransactionsForAccount(
    account: string,
    params: SolanaFmApiParams
  ): Promise<SolanaFmApiTransaction[]> {
    logger.debug(`Getting failed transactions...`);
    const transactionsResult = await this.getWalletOrAccountTransactions(account, params);
    return transactionsResult.result.data.filter(transaction => transaction.err !== null);
  }
}
