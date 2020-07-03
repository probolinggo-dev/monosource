/**
 * Read file .env based on NODE_ENV
 * example:
 * if NODE_ENV === development || not specified
 * it will trying to load file .env.development
 * and fallback into .env
 */

import fs from 'fs';
import path from 'path';
import dotenv from 'dotenv';

export const initializeDotEnv = (environment = '') => {
  const envFilePath = path.resolve(process.cwd(), '.env');
  let suffix = '';

  if (environment !== 'production') {
    if (fs.existsSync(envFilePath.concat(`.${environment}`))) {
      suffix = environment;
    }
  }

  dotenv.config({
    path: suffix ? envFilePath.concat('.').concat(environment) : envFilePath,
  });
};
