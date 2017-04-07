import { Component} from '@angular/core';
//import { Injectable } from '@angular/core';
import {Facebook} from 'ionic-native';
import { GoogleAuth, User } from '@ionic/cloud-angular';
import { NavController, NavParams } from 'ionic-angular';


@Component({

	selector: 'page-login-ionic',
	templateUrl: 'login-page.html',
	providers: [Facebook]
})
export class LoginPage  {
	

	constructor(public googleAuth: GoogleAuth, public user: User,public navCtrl: NavController, public navParams: NavParams) {}

	onFacebookLoginClick(){
		//console.log('asd');
		Facebook.login(['email','user_status']).then((response) => {
			console.log('Logged in');
			console.log(JSON.stringify(response.authResponse));
		}, (error) => {
			console.log(error);
		})
		//this.navCtrl.push(YourPage)

		

	}
	onFacebookLogoutClick(){
		Facebook.logout();
	}
	
	
	
	login(){
		//console.log('asdasdasdasd');
		this.googleAuth.login().then((success)=>{
			//console.log('asdasdasdasd');
			alert('Logged In');
			alert(JSON.stringify(success));
		});
	}
	
}
