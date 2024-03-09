import { config } from './infrastructure/config/config';
import { SolanaFmApiService } from './services/solanafmapi.service';
import TelegramBot from 'node-telegram-bot-api';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
let interval: any;
const bot = new TelegramBot(config.telegramBotToken, { polling: true });

bot.on('message', msg => {
  const chatId = msg.chat.id;
  const messageText = msg.text;

  if (messageText === '/stop') {
    clearInterval(interval);
    interval = undefined;
  }

  if (messageText === '/start') {
    if (interval === undefined) {
      interval = setInterval(async () => {
        const utcFrom = Math.floor(new Date().getTime() / 1000) - config.refreshTime;
        const transactions = await SolanaFmApiService.getFailedTransactionsForAccount(config.accountHash, {
          utcFrom,
        });
        for (const transaction of transactions) {
          await bot.sendMessage(chatId, `Failed transaction ${transaction.signature}`);
        }
      }, 2000);
    }
  }
});
