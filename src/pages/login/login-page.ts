import { Component,OnInit} from '@angular/core';
import { FacebookService,InitParams } from 'ng2-facebook-sdk';


@Component({

	selector: 'page-login-ionic',
	templateUrl: 'login-page.html'
})
export class LoginPage  {
 	
	
	constructor(private fb: FacebookService) {
	let initParams: InitParams =({
            appId      : '1261158457331826',
            cookie     : false,  // enable cookies to allow the server to access
                                // the session
            xfbml      : true,  // parse social plugins on this page
            version    : 'v2.8' // use graph api version 2.5
        });
		
		
	}
	onFacebookLoginClick(){
		this.fb.login();
		

	}


	
}
