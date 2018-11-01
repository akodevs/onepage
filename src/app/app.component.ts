import { Component, OnInit } from '@angular/core';
import { WordpressService } from './wordpress.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'mu';
  slides = [ 'http://placehold.it/1000x750/000000', 'http://placehold.it/1000x750/333333', 'http://placehold.it/1000x750/666666',
  'http://placehold.it/1000x750/000000', 'http://placehold.it/1000x750/333333', 'http://placehold.it/1000x750/666666',
  ];
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



