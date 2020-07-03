import fs from 'fs';
import path from 'path';
import { initializeDotEnv } from 'src/lib/dotenv';

const envPath = path.resolve(process.cwd(), '.env');
const envString = 'environment = default';

beforeAll(() => {
  fs.writeFileSync(envPath, envString);
});

test('should populate process.env from .env file', () => {
  initializeDotEnv();
  expect(process.env.environment).toBe('default');
});

afterAll(() => {
  fs.unlinkSync(envPath);
});
