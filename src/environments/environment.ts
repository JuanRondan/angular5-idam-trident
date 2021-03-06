// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  
  // Idam endpoints 
  discoveryUrl: 'https://fedsvc-stage.pwc.com/ofisids/api/discovery',
  redirect: 'http://localhost:55000/', // You can also pass an array of redirect urls like ['http://localhost:55000/', 'http://localhost:4200'],
  clientId: 'urn:oauth2:test:s',
  tridentUrl: 'https://trident-api-dev.azurewebsites.net',
  userApiUrl: 'http://localhost:3000/api/users'
};
