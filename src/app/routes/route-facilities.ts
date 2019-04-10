import { Routes } from '@angular/router';
import { FaqComponent } from '../components/facilities/faq/faq.component';
import { FeesComponent } from '../components/facilities/fees/fees.component';
import { FinanceComponent } from '../components/facilities/finance/finance.component';
import { FacilitiesHomeComponent } from '../components/facilities/facilities-home/facilities-home.component';

export const facilitiesRoutes: Routes = [
  {
    path: 'facilities',
    children: [
      {
        path: 'faq',
        component: FaqComponent,
        data: [{ label: 'Home', url: '/facilities' }]
      },
      {
        path: 'fees',
        component: FeesComponent,
        data: [{ label: 'Home', url: '/facilities' }]
      },
      {
        path: 'finance',
        component: FinanceComponent,
        data: [{ label: 'Home', url: '/facilities' }]
      },
      {
        path: 'home',
        component: FacilitiesHomeComponent,
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
