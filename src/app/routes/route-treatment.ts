import { Routes } from '@angular/router';
import { EmergencyComponent } from '../components/treatments/emergency/emergency.component';
import { NervousPatientsComponent } from '../components/treatments/nervous-patients/nervous-patients.component';
import { RootCanalComponent } from '../components/treatments/root-canal/root-canal.component';
import { TreatmentHomeComponent } from '../components/treatments/treatment-home/treatment-home.component';

import { treatmentCosmeticRoutes } from './route-treatment-cosmetic';
import { treatmentDenturesRoutes } from './route-treatment-dentures';
import { treatmentFamilyRoutes } from './route-treatment-family';
import { treatmentFillingsRoutes } from './route-treatment-fillings';
import { treatmentOrthodonticsRoutes } from './route-treatment-orthodontics';

export const treatmentRoutes: Routes = [
  {
    path: 'treatment',
    children: [
      ...treatmentCosmeticRoutes,
      ...treatmentDenturesRoutes,
      ...treatmentFamilyRoutes,
      ...treatmentFillingsRoutes,
      ...treatmentOrthodonticsRoutes,
      {
        path: 'emergency',
        component: EmergencyComponent,
        data: [{ label: 'Home', url: '/treatment' }]
      },
      {
        path: 'nervous-patients',
        component: NervousPatientsComponent,
        data: [{ label: 'Home', url: '/treatment' }]
      },
      {
        path: 'root-canal',
        component: RootCanalComponent,
        data: [{ label: 'Home', url: '/treatment' }]
      },
      {
        path: 'home',
        component: TreatmentHomeComponent,
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
