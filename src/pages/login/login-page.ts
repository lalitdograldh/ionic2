import { Component} from '@angular/core';
//import { Injectable } from '@angular/core';
import {FacebookService, LoginResponse} from 'ng2-facebook-sdk';
import { GoogleAuth, User } from '@ionic/cloud-angular';


@Component({

	selector: 'page-login-ionic',
	templateUrl: 'login-page.html'
})
export class LoginPage  {
	constructor(private fb: FacebookService,public googleAuth: GoogleAuth, public user: User) {
		console.log(fb);
		/*const params: InitParams = {
			appId     : '1878936962394763',
			xfbml	  : true,
			version   : 'v2.8' 
		};
		console.log(fb.init(params));*/
	}
	onFacebookLoginClick()
	{
		this.fb.login()
		.then((res: LoginResponse) => {
			console.log('Logged in', res);
		})
		.catch(this.handleError);
	}
	private handleError(error) {
		console.error('Error processing action', error);
	}
	login(){
		console.log('asdasdasdasd');
		this.googleAuth.login().then((success)=>{
			console.log('asdasdasdasd');
			alert('Logged In');
			alert(JSON.stringify(success));
		});
	}
	
}
