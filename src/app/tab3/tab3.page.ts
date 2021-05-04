import { Component, ViewChild } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { IonSlides } from '@ionic/angular';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { PodcastQuery, PostGQL, PostQuery, PostsGQL, PostsQuery } from 'src/generated/graphql';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {


  postNodes:Observable<PostsQuery['allPosts']['edges']>;
  constructor(private router:Router , private postsGQL:PostsGQL) {
    this.postNodes = postsGQL.watch(
      ).valueChanges.pipe(map(result => result.data.allPosts.edges));
  }

  
    

  @ViewChild(IonSlides) slides: IonSlides;
   slideOpts = {
    initialSlide: 1,
    speed: 400,
    };


    pod(){
      this.router.navigate(['/tabs/tab1']);
    }

    blog(){
      this.router.navigate(['/tabs/tab2']);
    }

    show(a){
      let navigationExtras: NavigationExtras = {
        state: {
          id: a
        }
      };
      this.router.navigate(['post'], navigationExtras);
    }
    
}
