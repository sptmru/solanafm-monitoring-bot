import * as dotenv from 'dotenv';

const parsedConfig = dotenv.config().parsed;

export const config = {
  logLevel: parsedConfig?.LOG_LEVEL != null ? parsedConfig.LOG_LEVEL : 'debug',
  baseApiUrl: parsedConfig?.BASE_API_URL != null ? parsedConfig.BASE_API_URL : 'https://api.solana.fm/v0',
};
