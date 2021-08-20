import { Component, ViewChild } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { IonSlides } from '@ionic/angular';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { PodcastQuery, PostGQL, PostQuery, PostsGQL, PostsQuery } from 'src/generated/graphql';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {


  postNodes:Observable<PostsQuery['allPosts']['edges']>;
  constructor(private router:Router , private postsGQL:PostsGQL  , private authservice:AuthService) {
    this.postNodes = postsGQL.watch(
      ).valueChanges.pipe(map(result => result.data.allPosts.edges));
  }

  
    

  @ViewChild(IonSlides) slides: IonSlides;
   slideOpts = {
    initialSlide: 1,
    speed: 400,
    };


    series(){
      this.router.navigate(['/tabs/series']);
    }


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

    logout(){
      this.authservice.logout();
      this.router.navigate(['/login']);
    }
  
    shop(){
      this.router.navigate(['/tabs/cart']);
    }

    
}
