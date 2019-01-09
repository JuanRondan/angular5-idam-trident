export const environment = {
  production: true,
  
  // Idam endpoints 
  discoveryUrl: 'https://fedsvc-stage.pwc.com/ofisids/api/discovery',
  redirect: 'http://localhost:55000/', // You can also pass an array of redirect urls like ['http://localhost:55000/', 'http://localhost:4200'],
  clientId: 'urn:oauth2:test:s',
  tridentUrl: 'https://trident-api-dev.azurewebsites.net',
  userApiUrl: 'http://localhost:3000/api/users'
};
