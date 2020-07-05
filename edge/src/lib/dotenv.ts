/**
 * Read file .env based on NODE_ENV
 * example:
 * if NODE_ENV === development || not specified
 * it will trying to load file .env.development
 * and fallback into .env
 */

import { Datastore } from '@google-cloud/datastore';
import fs from 'fs';
import path from 'path';
import dotenv from 'dotenv';

export const initializeDotEnv = async (environment = '') => {
  if (process.env.INFRASTRUCTURE === 'gcp') {
    const datastore = new Datastore();
    const query = datastore
      .createQuery('Envar')
      .filter('project-name', '=', 'edge');

    const result = await datastore.runQuery(query);
    const [envars] = result;
    const objVal = JSON.parse(envars?.[0]?.value || '{}');
    for (const key in objVal) {
      process.env[key] = objVal[key];
    }
  }

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
