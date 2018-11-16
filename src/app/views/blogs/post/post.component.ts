import { Component, OnInit } from '@angular/core';
import { WordpressService } from '../../../wordpress.service';
import { Observable } from 'rxjs/Observable';
import {ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  post$: Observable<any>;
  constructor(private service: WordpressService, private router: ActivatedRoute) {
    this.router.params.subscribe(res => {
      console.log(res.id);
      this.post$ = this.service.getPost(res.id)
    });
}

  ngOnInit() {
  }
}
