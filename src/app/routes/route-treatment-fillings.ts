import { Routes } from '@angular/router';
import { AmalgamComponent } from '../components/treatments/fillings-section/amalgam/amalgam.component';
import { CompositeBondingComponent } from '../components/treatments/fillings-section/composite-bonding/composite-bonding.component';
import { GoldComponent } from '../components/treatments/fillings-section/gold/gold.component';
import { PorcelainComponent } from '../components/treatments/fillings-section/porcelain/porcelain.component';
import { WhiteComponent } from '../components/treatments/fillings-section/white/white.component';
import { FillingsHomeComponent } from '../components/treatments/fillings-section/fillings-home/fillings-home.component';

export const treatmentFillingsRoutes: Routes = [
  {
    path: 'fillings',
    children: [
      {
        path: 'amalgam',
        component: AmalgamComponent,
        data: [{ label: 'Home', url: '/treatment/fillings' }]
      },
      {
        path: 'composite-bonding',
        component: CompositeBondingComponent,
        data: [{ label: 'Home', url: '/treatment/fillings' }]
      },
      {
        path: 'gold',
        component: GoldComponent,
        data: [{ label: 'Home', url: '/treatment/fillings' }]
      },
      {
        path: 'porcelain',
        component: PorcelainComponent,
        data: [{ label: 'Home', url: '/treatment/fillings' }]
      },
      {
        path: 'white',
        component: WhiteComponent,
        data: [{ label: 'Home', url: '/treatment/fillings' }]
      },
      {
        path: 'home',
        component: FillingsHomeComponent,
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
