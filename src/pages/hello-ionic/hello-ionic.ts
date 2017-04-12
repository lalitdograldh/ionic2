import { Component , ViewChild} from '@angular/core';
import { Slides } from 'ionic-angular';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
import { NavController } from 'ionic-angular';
import { PostDetail } from '../post-detail/post-detail';


@Component({
	selector: 'page-hello-ionic',
	templateUrl: 'hello-ionic.html'
})
export class HelloIonicPage {
	@ViewChild(Slides) slides: Slides;
	constructor(private http: Http,public nav: NavController) {
	}
	/*slideChanged() {
		let currentIndex = this.slides.getActiveIndex();
		console.log("Current index is", currentIndex);
	}*/
	/*public homeOptions = {
		initialSlide: 0,
		loop: true,
		noSwiping: false,
		autoplayDisableOnInteraction: false
	};*/
	public Data :any= [
	{ img1:"assets/images/slide1.jpeg"},
	{ img1:"assets/images/slide2.jpeg"},
	{ img1:"assets/images/slide3.jpeg"},
	{ img1:"assets/images/slide4.jpeg"},
	
	];

	url: string = 'http://uniquecoders.in/dev/videogallery/wp-json/wp/v2/sp_html5video';
	items: any;	

	ionViewDidEnter() {
		//console.log(this.url);

		//console.log('asdasdasd');
		this.http.get(this.url)
		.map(res => res.json())
		.subscribe(data => {
			this.items = data;
			console.log(this.items);
		});
	}
	itemTapped(event, item) {
		this.nav.push(PostDetail, {
		  item: item
		});
	}

	

}
