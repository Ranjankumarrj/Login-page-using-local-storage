import { Component, OnInit } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';
import { Storage } from '@ionic/storage';


@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {

  logged: String;

  constructor(private navCtrl: NavController, public storage: Storage) { 

    this.storage.get('logged').then((val)=>{
      this.logged=val;
      if(this.logged=='false') 
      {
        this.navCtrl.navigateForward('/home');
      }
    })
  }

  ngOnInit() {
  }

  logout() {
    this.storage.set('logged','false');
    this.navCtrl.navigateForward('/home');
    
    //window.localStorage.removeItem('name');
  }

  backClick()
  {
    this.navCtrl.navigateForward('/home');
  }
}
