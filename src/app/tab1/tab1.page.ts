import { Component } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { PodcastGQL, PodcastQuery } from 'src/generated/graphql';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  Pods:Observable<PodcastQuery['allPodcasts']['edges']>;
  constructor(private router:Router,private podcastGQL:PodcastGQL) {
    this.Pods = podcastGQL.watch(
      ).valueChanges.pipe(map(result => result.data.allPodcasts.edges));
      
  }

  play(a){
    let navigationExtras: NavigationExtras = {
      state: {
        id: a
      }
    };
    this.router.navigate(['pod-page'], navigationExtras);
    // this.router.navigate(['/pod-page']);
  }


  }



  
