import { Routes } from '@angular/router';
import { AcrylicComponent } from '../components/treatments/dentures-section/acrylic/acrylic.component';
import { CobaltChromeComponent } from '../components/treatments/dentures-section/cobalt-chrome/cobalt-chrome.component';
import { DenturesHomeComponent } from '../components/treatments/dentures-section/dentures-home/dentures-home.component';
import { MissingTeethComponent } from '../components/treatments/dentures-section/missing-teeth/missing-teeth.component';
import { SupportedDenturesComponent } from '../components/treatments/dentures-section/supported-dentures/supported-dentures.component';

export const treatmentDenturesRoutes: Routes = [
  {
    path: 'dentures',
    children: [
      {
        path: 'acrylic',
        component: AcrylicComponent,
        data: [{ label: 'Home', url: '/treatment/dentures' }]
      },
      {
        path: 'cobalt-chrome',
        component: CobaltChromeComponent,
        data: [{ label: 'Home', url: '/treatment/dentures' }]
      },
      {
        path: 'missing-tooth',
        component: MissingTeethComponent,
        data: [{ label: 'Home', url: '/treatment/dentures' }]
      },
      {
        path: 'supported-denture',
        component: SupportedDenturesComponent,
        data: [{ label: 'Home', url: '/treatment/dentures' }]
      },
      {
        path: 'home',
        component: DenturesHomeComponent,
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
