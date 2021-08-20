import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AllseriesGQL, AllseriesQuery } from 'src/generated/graphql';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-series',
  templateUrl: './series.page.html',
  styleUrls: ['./series.page.scss'],
})
export class SeriesPage implements OnInit {


  vids:Observable<AllseriesQuery ['allSerials']['edges']>;
  constructor(private router:Router , private authservice:AuthService,private allSeries:AllseriesGQL) {
   }

  ngOnInit() {
    this.vids = this.allSeries.watch(
      ).valueChanges.pipe(map(result => result.data.allSerials.edges));
    // console.log(this.vids[0])
    // this.allSeries.watch().valueChanges.subscribe(res=>{
    //   console.log(res.data.allSerials.edges[0].node.title)
    // })
  }

  logout(){
    this.authservice.logout();
    this.router.navigate(['/login']);
  }

  shop(){
    this.router.navigate(['/tabs/cart']);
  }


  play(a){
    let navigationExtras: NavigationExtras = {
      state: {
        id: a 
      }
    };
    this.router.navigate(['vod-page'], navigationExtras);
    // this.router.navigate(['/pod-page']);
  }
}
