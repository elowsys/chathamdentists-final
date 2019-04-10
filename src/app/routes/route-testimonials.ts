import { Routes } from '@angular/router';
import { ReviewsComponent } from '../components/testimonials/reviews/reviews.component';
import { VideoComponent } from '../components/testimonials/video/video.component';
import { TestimonialsHomeComponent } from '../components/testimonials/testimonials-home/testimonials-home.component';

export const testimonialsRoutes: Routes = [
  {
    path: 'testimonials',
    children: [
      {
        path: 'reviews',
        component: ReviewsComponent,
        data: [{ label: 'Home', url: '/testimonials' }]
      },
      {
        path: 'video',
        component: VideoComponent,
        data: [{ label: 'Home', url: '/testimonials' }]
      },
      {
        path: 'home',
        component: TestimonialsHomeComponent,
        data: []
      },
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
      }
    ]
  }
];
