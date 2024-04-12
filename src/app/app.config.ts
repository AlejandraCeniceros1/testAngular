import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';


import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { AngularFireModule } from '@angular/fire/compat';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    importProvidersFrom(AngularFireModule.initializeApp({
      apiKey: "AIzaSyAea2W-T6lEY1fdNjpQnlwmKZIaUxsciZQ",
      authDomain: "dashboard-73491.firebaseapp.com",
      projectId: "dashboard-73491",
      storageBucket: "dashboard-73491.appspot.com",
      messagingSenderId: "674101228847",
      appId: "1:674101228847:web:1d3b4bee80485232b55dda",
      measurementId: "G-GET40C08RY"
    })),
    AngularFirestoreModule
  ]
};