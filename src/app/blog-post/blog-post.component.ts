import { Component, Input, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { Path } from 'graphql/jsutils/Path';

@Component({
  selector: 'app-blog-post',
  templateUrl: './blog-post.component.html',
  styleUrls: ['./blog-post.component.scss'],
})
export class BlogPostComponent implements OnInit {

  @Input() title:string;
  @Input() type:string;
  @Input() src:Path;
  @Input() description:string;
  @Input() id:String;
  constructor(private router:Router) { }

  ngOnInit() {}


  show(a){
    let navigationExtras: NavigationExtras = {
      state: {
        id: a
      }
    };
    this.router.navigate(['post'], navigationExtras);
  }
}
