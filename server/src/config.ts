import dotenv from 'dotenv';
dotenv.config();

export const DB_URL = process.env.DB_URL;
export const PORT = process.env.PORT || 3001;
export const DB_HOST = process.env.DB_HOST as string;
export const DB_NAME = process.env.DB_NAME as string;
export const DB_USER = process.env.DB_USER as string;
export const DB_PASSWORD = process.env.DB_PASSWORD as string;

export const SALT = process.env.SALT || 10;

export const SECRET_KEY = process.env.SECRET_KEY as string;
export const COOKIE_EXPIRE_TIME = 60 * 60 * 1000;
