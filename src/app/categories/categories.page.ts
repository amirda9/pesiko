import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { CategoriesGQL,CategoriesQuery } from '../../generated/graphql';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.page.html',
  styleUrls: ['./categories.page.scss'],
})
export class CategoriesPage implements OnInit {

  items:Observable<CategoriesQuery['allCategories']['edges']>;
  constructor(private categoriesgql:CategoriesGQL , private router:Router) { 
    this.items = this.categoriesgql.watch().valueChanges.pipe(map(res=>res.data.allCategories.edges));
  }

  ngOnInit() {
  }


  show(a){
    let navigationExtras: NavigationExtras = {
      state: {
        id: a
      }
    };
    this.router.navigate(['/tabs/category'], navigationExtras);
  }
}
