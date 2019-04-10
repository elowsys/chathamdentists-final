import { Routes } from '@angular/router';
import { aboutRoutes } from '../app/routes/route-about';
import { contactRoutes } from '../app/routes/route-contact';
import { facilitiesRoutes } from '../app/routes/route-facilities';
import { testimonialsRoutes } from '../app/routes/route-testimonials';
import { treatmentRoutes } from '../app/routes/route-treatment';
import { HomeContentComponent } from './components/homepage/home-content/home-content.component';
import { NotFoundComponent } from './components/shared/not-found/not-found.component';
import { PrivacyComponent } from './components/shared/privacy/privacy.component';

export const appRoutes: Routes = [
  ...aboutRoutes,
  ...contactRoutes,
  ...facilitiesRoutes,
  ...testimonialsRoutes,
  ...treatmentRoutes,
  {
    path: 'privacy',
    component: PrivacyComponent
  },
  {
    path: 'home',
    component: HomeContentComponent
  },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', component: NotFoundComponent }
];
