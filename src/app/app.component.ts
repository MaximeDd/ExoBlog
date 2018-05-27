import {Component} from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor() {
    const config = {
      apiKey: 'AIzaSyD0uiCs3NgbrIXaTQqNZdvEZONJ4lTn8Hw',
      authDomain: 'blogocr-49100.firebaseapp.com',
      databaseURL: 'https://blogocr-49100.firebaseio.com',
      projectId: 'blogocr-49100',
      storageBucket: '',
      messagingSenderId: '197427968517'
    };
    firebase.initializeApp(config);

  }
}
