import { Routes } from '@angular/router';
import { CancerScreeningComponent } from '../components/treatments/family-section/cancer-screening/cancer-screening.component';
import { HygienistComponent } from '../components/treatments/family-section/hygienist/hygienist.component';
import { PreventiveCareComponent } from '../components/treatments/family-section/preventive-care/preventive-care.component';
import { FamilyHomeComponent } from '../components/treatments/family-section/family-home/family-home.component';
import { ChildrenComponent } from '../components/treatments/family-section/children/children.component';

export const treatmentFamilyRoutes: Routes = [
  {
    path: 'family',
    children: [
      {
        path: 'cancer-screening',
        component: CancerScreeningComponent,
        data: [{ label: 'Home', url: '/treatment/family' }]
      },
      {
        path: 'children',
        component: ChildrenComponent,
        data: [{ label: 'Home', url: '/treatment/family' }]
      },
      {
        path: 'hygienist',
        component: HygienistComponent,
        data: [{ label: 'Home', url: '/treatment/family' }]
      },
      {
        path: 'preventive-care',
        component: PreventiveCareComponent,
        data: [{ label: 'Home', url: '/treatment/family' }]
      },
      {
        path: 'home',
        component: FamilyHomeComponent,
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
