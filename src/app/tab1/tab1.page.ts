import { Component } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { PodcastGQL, PodcastQuery } from 'src/generated/graphql';
import { AudioService } from '../audio.service';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  Pods:Observable<PodcastQuery['allPodcasts']['edges']>;
  constructor(private router:Router,private podcastGQL:PodcastGQL , private authservice:AuthService) {
    this.Pods = podcastGQL.watch(
      ).valueChanges.pipe(map(result => result.data.allPodcasts.edges));
      
  }

  play(a){
    // console.log(a)
    let navigationExtras: NavigationExtras = {
      state: {
        id: a
      }
    };
    this.router.navigate(['pod-page'], navigationExtras);
    // this.router.navigate(['/pod-page']);
  }



  logout(){
    this.authservice.logout();
    this.router.navigate(['/login']);
  }

  shop(){
    this.router.navigate(['/tabs/cart']);
  }
  }



  
