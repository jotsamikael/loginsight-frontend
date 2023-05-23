// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,

  //BASE_URL_MS_CLIENT: 'http://localhost:8090',
  //BASE_URL_MS_MACHINE: 'http://localhost:8091',
  //BASE_URL_MS_OPERATION: 'http://localhost:8092', 

  BASE_URL_MS_CLIENT: 'http://172.27.72.19:8090',
  BASE_URL_MS_MACHINE: 'http://172.27.72.19:8091',
  BASE_URL_MS_OPERATION: 'http://172.27.72.19:8092',
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
