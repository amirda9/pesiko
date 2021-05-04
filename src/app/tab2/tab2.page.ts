import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { PostGQL, PostQuery, PostsGQL, PostsQuery } from 'src/generated/graphql';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  postNodes:Observable<PostsQuery['allPosts']['edges']>;
  title :string;
  constructor(postsGQL: PostsGQL) {
    this.postNodes = postsGQL.watch(
      ).valueChanges.pipe(map(result => result.data.allPosts.edges));
    // this.title = this.postNodes.subscribe(res=>{
    //   console.log(res);
    // })
    // console.log(this.postNodes)
  }

}
