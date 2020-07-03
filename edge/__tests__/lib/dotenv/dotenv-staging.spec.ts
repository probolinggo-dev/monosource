import fs from 'fs';
import path from 'path';
import { initializeDotEnv } from 'src/lib/dotenv';

const envPath = path.resolve(process.cwd(), '.env.staging');
const envString = 'environment = staging';

beforeAll(() => {
  fs.writeFileSync(envPath, envString);
});

test('should populate process.env from .env.staging file', () => {
  initializeDotEnv('staging');
  expect(process.env.environment).toBe('staging');
});

afterAll(() => {
  fs.unlinkSync(envPath);
});
