import { Component,OnInit} from '@angular/core';
import { NavController } from 'ionic-angular';

declare const FB:any;

@Component({
	selector: 'page-login-ionic',
	templateUrl: 'login-page.html'
})
export class LoginPage implements OnInit {

	
	constructor(public nav: NavController) {}
	

	fbLogin(){
		FB.login();
	}
	statusChangeCallback(resp) {
		if (resp.status === 'connected') {
			// connect here with your server for facebook login by passing access token given by facebook
		}else if (resp.status === 'not_authorized') {
			
		}else {
			
		}
	};
	ngOnInit() {
		FB.getLoginStatus(response => {
			this.statusChangeCallback(response);
		});
	}
}
