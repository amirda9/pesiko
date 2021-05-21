import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../auth.service';
import { ID, USERNAME } from '../constants';
import {ProfileGQL,ProfileQuery ,BasketQuery,BasketGQL} from '../../generated/graphql'
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  status:number=0;
  phone_no:string;
  pods:Observable<ProfileQuery['profile']['podcastSet']['edges']>;
  trans:Observable<ProfileQuery['profile']['user']['transactionSet']['edges']>;

  constructor(private authservice:AuthService , private router:Router , private profilegql:ProfileGQL , private basketgql:BasketGQL) {
    this.pods = profilegql.watch({
      ID:localStorage.getItem(ID)
    }).valueChanges.pipe(map(res=>res.data.profile.podcastSet.edges))

    this.trans = profilegql.watch({
      ID:localStorage.getItem(ID)
    }).valueChanges.pipe(map(res=>res.data.profile.user.transactionSet.edges))
   }

  ngOnInit() {
    this.phone_no = localStorage.getItem(USERNAME);
  }


  logout(){
    this.authservice.logout();
    this.router.navigate(['/login']);
  }

  shop(){
    this.router.navigate(['/tabs/cart']);
  }


  play(a){
    // console.log(a);
    let navigationExtras: NavigationExtras = {
      state: {
        id: a
      }
    };
    this.router.navigate(['pod-page'], navigationExtras);
    // this.router.navigate(['/pod-page']);
  }
  
  segmentChanged(e){
    console.log(e);
    this.status = e;
  }

}
