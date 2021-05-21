import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import {CategoryGQL,CategoryQuery} from '../../generated/graphql';

@Component({
  selector: 'app-category',
  templateUrl: './category.page.html',
  styleUrls: ['./category.page.scss'],
})
export class CategoryPage implements OnInit {

  id:string;
  title:string;
  pods:Observable < CategoryQuery['category']['podcastSet']['edges']> ;
  constructor(private route: ActivatedRoute , private router:Router , private categorygql:CategoryGQL) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.id = this.router.getCurrentNavigation().extras.state.id;
      }
    });

    this.pods =   this.categorygql.watch({
      ID:this.id
    }).valueChanges.pipe(map(res=>res.data.category.podcastSet.edges));

    this.categorygql.watch({
      ID:this.id
    }).valueChanges.subscribe(res=>{
      this.title = res.data.category.title;
    })

    
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
