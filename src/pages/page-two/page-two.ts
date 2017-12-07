import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ThreePage } from '../three/three';

/**
 * Generated class for the PageTwoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-page-two',
  templateUrl: 'page-two.html',
})
export class PageTwoPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PageTwoPage');
  }
  details(){
    this.navCtrl.push(ThreePage);
  }
}

