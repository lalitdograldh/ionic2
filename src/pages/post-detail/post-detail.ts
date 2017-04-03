import { Component,OnInit } from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {DomSanitizer} from '@angular/platform-browser';



@Component({
	templateUrl: 'post-detail.html'
})
export class PostDetail implements OnInit{
	selectedItem: any;
	youTube :string;
	video :any;
	constructor(private nav: NavController, navParams: NavParams,private sanitizer: DomSanitizer ) {
		// If we navigated to this page, we will have an item available as a nav param
		this.selectedItem = navParams.get('item');
	}
	ngOnInit(){

		this.youTube = this.selectedItem.post_meta_fields._wpvideo_video_yt;//;
		//console.log(this.youTube);
	}
	
	photoURL() {
		

		this.video = this.sanitizer.bypassSecurityTrustResourceUrl(this.youTube);
		//console.log(this.video);
	
		return this.video;

	}
}
