// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase:{
    apiKey: "AIzaSyCFQ59CrvwNVKk0wRW-GMahT6TFyEuKthQ",
    authDomain: "todo-list-app-75b95.firebaseapp.com",
    databaseURL: "https://todo-list-app-75b95.firebaseio.com",
    projectId: "todo-list-app-75b95",
    storageBucket: "todo-list-app-75b95.appspot.com",
    messagingSenderId: "956105373316"
  }
};
