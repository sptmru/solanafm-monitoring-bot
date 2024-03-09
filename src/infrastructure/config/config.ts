import * as dotenv from 'dotenv';

const parsedConfig = dotenv.config().parsed;

export const config = {
  logLevel: parsedConfig?.LOG_LEVEL != null ? parsedConfig.LOG_LEVEL : 'debug',
  baseApiUrl: parsedConfig?.BASE_API_URL != null ? parsedConfig.BASE_API_URL : 'https://api.solana.fm/v0',
  apiKey: parsedConfig?.API_KEY != null ? parsedConfig.API_KEY : 'key',
  telegramBotToken: parsedConfig?.TELEGRAM_BOT_TOKEN != null ? parsedConfig.TELEGRAM_BOT_TOKEN : 'token',
  accountHash: parsedConfig?.SOLANAFM_ACCOUNT_HASH != null ? parsedConfig.SOLANAFM_ACCOUNT_HASH : 'hash',
  refreshTime: parsedConfig?.REFRESH_TIME_IN_SECONDS != null ? Number(parsedConfig.REFRESH_TIME_IN_SECONDS) : 20,
};
