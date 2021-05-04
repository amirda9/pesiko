import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { BlogPostComponent } from './blog-post/blog-post.component';
import { PodcastComponent } from './podcast/podcast.component';

CUSTOM_ELEMENTS_SCHEMA
@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    // StarRatingModule.forRoot(),
  ],
  exports:[BlogPostComponent,PodcastComponent],
  declarations: [BlogPostComponent,PodcastComponent],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class SharedModuleModule {}
