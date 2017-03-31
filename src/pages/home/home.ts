import { Component } from '@angular/core';

import { NavController, App } from 'ionic-angular';

import { LoginPage } from '../login/login';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(
    public navCtrl: NavController,
    public app: App
  ) {

  }

  goToLoginPage(){
    this.app.getRootNav().setRoot( LoginPage );
  }

}
