import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Path } from 'graphql/jsutils/Path';
import { PostGQL, PostQuery } from 'src/generated/graphql';
import Observable from 'zen-observable';

@Component({
  selector: 'app-post',
  templateUrl: './post.page.html',
  styleUrls: ['./post.page.scss'],
})
export class PostPage implements OnInit {

  id:string;
  title:String;
  description:String;
  content : any;
  src:string;
  post:Observable<PostQuery>
  constructor(private route: ActivatedRoute, private router: Router , public postGQL:PostGQL) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.id = this.router.getCurrentNavigation().extras.state.id;
      }
    });
   this.postGQL.watch({
     ID:this.id
   }
   ).valueChanges.subscribe(
      res=>{
        this.title = res.data.post.title;
        this.description = res.data.post.description;
        this.content = res.data.post.content;
        this.src = res.data.post.images.edges[0].node.image;
        console.log(this.title,this.description);
      }
    )
  }

}
