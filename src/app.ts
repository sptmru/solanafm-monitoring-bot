import { SolanaFmApiService } from './services/solanafmapi.service';

(async (): Promise<void> => {
  // const utcFrom = Math.floor(new Date().getTime() / 1000);
  const utcFrom = 1709900000;
  const transactions = await SolanaFmApiService.getFailedTransactionsForAccount(
    'Bofn4Ge9K9LogXzW2QU3XDwky3r93bC5heHSEK3TckgG',
    {
      utcFrom,
    }
  );
  console.log(transactions);
})()
  .then(() => {})
  .catch(() => {});
