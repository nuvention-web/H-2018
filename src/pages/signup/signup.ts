import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { IonicPage, NavController, ToastController } from 'ionic-angular';
import { AngularFireModule,  } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule, AngularFireAuth} from 'angularfire2/auth';
import { User } from '../../providers/providers';
import { MainPage } from '../pages';
import * as firebase from 'firebase/app';

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html'
})
export class SignupPage {
  // The account fields for the login form.
  // If you're using the username field with or without email, make
  // sure to add it to the type
  account: { name: string, email: string, password: string } = {
    name: '',
    email: '',
    password: ''
  };

  // Our translated text strings
  private signupErrorString: string;

  constructor(public navCtrl: NavController,
    public user: User,
    public toastCtrl: ToastController,
    public translateService: TranslateService, public af: AngularFireAuth, public am: AngularFireAuthModule) {

    this.translateService.get('SIGNUP_ERROR').subscribe((value) => {
      this.signupErrorString = value;
    })
  }

  doSignup() {
    // Attempt to login in through our User service
    this.user.signup(this.account).subscribe((resp) => {
      this.navCtrl.push(MainPage);
    }, (err) => {

      this.navCtrl.push(MainPage);

      // Unable to sign up
      let toast = this.toastCtrl.create({
        message: this.signupErrorString,
        duration: 3000,
        position: 'top'
      });
      toast.present();
    });
  }


  signInWithEmail() {
    this.signInRegular(this.account.email, this.account.password)
       .then((res) => {
          console.log(res);
          this.userName();
        console.log(this.af.auth.currentUser.displayName);
         
          this.navCtrl.push(MainPage);
        }, (err) => {
    
          this.navCtrl.push(MainPage);
    
          // Unable to sign up
          let toast = this.toastCtrl.create({
            message: this.signupErrorString,
            duration: 3000,
            position: 'top'
          });
          toast.present();
        });

        
      
        
        
 }

 signInRegular(email, password) {
  const credential = firebase.auth.EmailAuthProvider.credential( email, password );
  return this.af.auth.createUserWithEmailAndPassword(email, password);
  

}

userName(){

  return this.af.auth.currentUser.updateProfile({
    displayName: this.account.name,
    photoURL: "https://www.ocf.berkeley.edu/~dblab/blog/wp-content/uploads/2012/01/icon-profile.png",

});

}


loginWithGoogle() {
  console.log(this.af.auth.currentUser.displayName);
}




}