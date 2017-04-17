import { Component,OnInit } from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
//import {DomSanitizer,SafeResourceUrl} from '@angular/platform-browser';
//import {VgCoreModule} from 'videogular2/core';
//import {VgControlsModule} from 'videogular2/controls';
//import {VgOverlayPlayModule} from 'videogular2/overlay-play';
//import {VgBufferingModule} from 'videogular2/buffering';



@Component({
	templateUrl: 'post-detail.html'
})
export class PostDetail implements OnInit{
	selectedItem: any;
	youTube :string;
	videoUrl :any;
	sources:Array<Object>;
	videoUrlVimeo:any;
	
	dangerousVideoUrl :any;
	dangerousVideoUrlVimeo :any;
	constructor(private nav: NavController, navParams: NavParams ) {
		// If we navigated to this page, we will have an item available as a nav param
		this.selectedItem = navParams.get('item');
		console.log(this.selectedItem.post_meta_fields._wpvideo_video_vm);

		this.sources = [
		{
			src: "this.selectedItem.post_meta_fields._wpvideo_video_yt",
			type: "video/webm"
		},
		{
			src:"this.selectedItem.post_meta_fields._wpvideo_video_vm",
			type:"video/webm"
		}


		]
	}
	ngOnInit(){

		//this.youTube = this.selectedItem.post_meta_fields._wpvideo_video_yt[0];
		//console.log(this.youTube);
		/*this.dangerousVideoUrl = this.selectedItem.post_meta_fields._wpvideo_video_yt[0];

		this.videoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.dangerousVideoUrl);

		this.dangerousVideoUrlVimeo = this.selectedItem.post_meta_fields._wpvideo_video_vm[0];

		this.videoUrlVimeo = this.sanitizer.bypassSecurityTrustResourceUrl(this.dangerousVideoUrlVimeo);*/

		//console.log(this.videoUrl,'asdasdasd');

	}


	
	/*photoURL() {
		


	}*/

}
