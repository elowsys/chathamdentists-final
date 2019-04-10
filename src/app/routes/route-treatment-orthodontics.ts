import { Routes } from '@angular/router';
import { InvisalignComponent } from '../components/treatments/orthodontics-section/invisalign/invisalign.component';
import { OrthodonticsHomeComponent } from '../components/treatments/orthodontics-section/orthodontics-home/orthodontics-home.component';

export const treatmentOrthodonticsRoutes: Routes = [
  {
    path: 'orthodontics',
    children: [
      {
        path: 'invisalign',
        component: InvisalignComponent,
        data: [{ label: 'Home', url: '/treatment/orthodontics' }]
      },
      {
        path: 'home',
        component: OrthodonticsHomeComponent,
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
