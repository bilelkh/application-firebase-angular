// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase : {
    apiKey: "AIzaSyCwItyLII_VsCuwX9shm5idOSsOKfzkwVU",
    authDomain: "application-firebase-angular6.firebaseapp.com",
    databaseURL: "https://application-firebase-angular6.firebaseio.com",
    projectId: "application-firebase-angular6",
    storageBucket: "application-firebase-angular6.appspot.com",
    messagingSenderId: "632794522884"

  }
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
