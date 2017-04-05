import { Component} from '@angular/core';
//import { Injectable } from '@angular/core';
import {Facebook} from 'ionic-native';
import { GoogleAuth, User } from '@ionic/cloud-angular';


@Component({

	selector: 'page-login-ionic',
	templateUrl: 'login-page.html',
	providers: [Facebook]
})
export class LoginPage  {
	

	constructor(public googleAuth: GoogleAuth, public user: User) {}

	onFacebookLoginClick(){
		//console.log('asd');
		Facebook.login(['email']).then((response) => {
			console.log('Logged in');
			console.log(JSON.stringify(response.authResponse));
		}, (error) => {
			console.log(error);
		})
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
