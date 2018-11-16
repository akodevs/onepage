import { Component, OnInit } from '@angular/core';
import { WordpressService } from '../../wordpress.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  title = 'mu';
  slides = [ 'https://s3.us-east-2.amazonaws.com/mu-upload/landing-page/PrecisionHardwood+Logo+Final.png',
  'https://s3.us-east-2.amazonaws.com/mu-upload/landing-page/Capitol-Commercial-Website.png',
  'https://s3.us-east-2.amazonaws.com/mu-upload/landing-page/meshupstudio-post-card.jpeg',
  'https://s3.us-east-2.amazonaws.com/mu-upload/landing-page/Valco+Postcards+%233.png',
  'https://s3.us-east-2.amazonaws.com/mu-upload/landing-page/Business_Card_Front.png',
   'https://s3.us-east-2.amazonaws.com/mu-upload/landing-page/Business_Card_Back.png'];
  options = {
    dots: true,
    navigation: false,
    center: true,
    items: 2,
    loop: true,
  };
  wp_blogs$: Observable<any[]>;
  posts: any;

  constructor(private service: WordpressService) {

  }

  ngOnInit() {
    this.service.getPosts().subscribe(data => {
      console.log(data['posts'])
       this.posts = data['posts'];
    });
  }
}
