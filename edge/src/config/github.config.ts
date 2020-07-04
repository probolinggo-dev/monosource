export const githubConfig = () => ({
  accessToken: process.env.GH_ACCESS_TOKEN || '',
  host: process.env.HOST || 'https://api.github.com',
  orgName: process.env.ORG_NAME || 'probolinggo-dev',
});
