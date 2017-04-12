import { Component,ViewChild} from '@angular/core';
//import { Injectable } from '@angular/core';
import {Facebook} from 'ionic-native';
import { Http,Response } from '@angular/http';
import { GoogleAuth, User } from '@ionic/cloud-angular';
import { LoginApp } from './loginApp';
import { HelloIonicPage } from '../hello-ionic/hello-ionic';
import { Nav,NavController, NavParams ,AlertController } from 'ionic-angular';



@Component({

	selector: 'page-login-ionic',
	templateUrl: 'login-page.html',
	providers: [Facebook]
})
export class LoginPage  {
	@ViewChild(Nav) nav: Nav;
	//rootPage: any = HelloIonicPage;
	constructor(public googleAuth: GoogleAuth, public user: User,public navCtrl: NavController, public navParams: NavParams,public alertCtrl: AlertController,private http: Http) {}
	model:any='';
	LoginApp:LoginApp;
	showLogin:boolean = true;
	email:string = '';
	password:string = '';
	name:string = '';
	//nextPage:any='';


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
	
	login(){
		//console.log('asdasdasdasd');
		this.googleAuth.login().then((success)=>{
			console.log('asdasdasdasd');
			
			alert(JSON.stringify(success));
		});
	}

	doLogin(){
		if(this.showLogin){
			//console.log('process Login');
			this.http.get('/api/data/authenticate.json')
			.subscribe((response: Response) => {
				//console.log(response);
				let user = response.json();
				if(user.email == this.email && user.password == this.password){

					localStorage.setItem('currentUser', JSON.stringify(user.email));
					
					//return {success:true};
					this.navCtrl.push(HelloIonicPage);
					//this.navCtrl.push(this.nextPage);
					//this.nav.setRoot(HelloIonicPage);
				}
				else {
					let alert = this.alertCtrl.create({
						title:'Login Error',
						subTitle:'Email / Password MisMatch',
						buttons:['Ok']
					});
					alert.present();
					return;
				}
			});
			if(this.model.email ==='' || this.password ===''){
				let alert = this.alertCtrl.create({
					title:'Register Error',
					subTitle:'All Fields are required',
					buttons:['Ok']
				});
				alert.present();
				return;
			}
		}
		
	}
	
}
