import { Component} from '@angular/core';
import {FacebookService, LoginResponse} from 'ng2-facebook-sdk';

@Component({

	selector: 'page-login-ionic',
	templateUrl: 'login-page.html'
})
export class LoginPage  {
	constructor(private fb: FacebookService) {
		console.log(fb);
		fb.init({
			appId      : '1878936962394763',
			version    : 'v2.8' // use graph api version 2.5
		});
		
		

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
	
}
