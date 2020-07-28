import { Component } from '@angular/core';
//import { hasLifecycleHook } from '@angular/compiler/src/lifecycle_reflector';
import { ModalController, NavController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
//import { LocalStorage } from '@ionic/angular';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  name: any;
  password: String;

  passwordType: string = 'password';
  passwordShown: boolean = false;

  constructor(private navCtrl: NavController, public storage: Storage) 
              {
                this.storage.get('name').then((data)=>{
                  this.name = data;
          });
              }


  public login() 
  {

    if(this.name==null)
    {
      alert("Please Enter Your Name");
    }
    if(this.password!='2020')
    {
      alert("Entered password not wrong");
    }
    if(this.password=='2020')
    {
      this.storage.set('logged','true');
      this.storage.set('name', this.name);
      let name= this.storage.get('name');
      this.navCtrl.navigateForward('/details');
    }
  }

  public togglepassword()
  {
    if(this.passwordShown){
      this.passwordShown = false;
      this.passwordType = 'password';
    }
    else{
      this.passwordShown = true;
      this.passwordType = 'text';
    }
  }

  ngOnInit() {

  }
}
