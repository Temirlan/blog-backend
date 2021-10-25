import { config } from 'dotenv';
config();

export const APP_PORT = process.env.APP_PORT;
export const ENGINE = process.env.ENGINE as 'cockroachdb';
export const ENGINE_HOST = process.env.ENGINE_HOST as string;
export const ENGINE_PORT = +process.env.ENGINE_PORT as number;
export const ENGINE_USERNAME = process.env.ENGINE_USERNAME as string;
export const ENGINE_PASSWORD = process.env.ENGINE_PASSWORD as string;
export const ENGINE_DB = process.env.ENGINE_DB as string;
