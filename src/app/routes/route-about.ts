import { Routes } from '@angular/router';
import { CommitmentComponent } from '../components/about/commitment/commitment.component';
import { TeamComponent } from '../components/about/team/team.component';
import { AboutUsComponent } from '../components/about/about-us/about-us.component';

export const aboutRoutes: Routes = [
  {
    path: 'about',
    children: [
      {
        path: 'commitment',
        component: CommitmentComponent,
        data: [{ label: 'Home', url: '/home' }]
      },
      {
        path: 'team',
        component: TeamComponent,
        data: [{ label: 'Home', url: '/home' }]
      },
      {
        path: 'home',
        component: AboutUsComponent,
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
