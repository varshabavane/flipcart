import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PageTwoPage } from '../page-two/page-two';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  search(){
    this.navCtrl.push(PageTwoPage);
  }
}


