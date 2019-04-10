import { Routes } from '@angular/router';
import { BridgeComponent } from '../components/treatments/cosmetic-section/bridge/bridge.component';
import { CrownsComponent } from '../components/treatments/cosmetic-section/crowns/crowns.component';
import { StainRemovalComponent } from '../components/treatments/cosmetic-section/stain-removal/stain-removal.component';
import { TeethWhiteningComponent } from '../components/treatments/cosmetic-section/teeth-whitening/teeth-whitening.component';
import { VeneersComponent } from '../components/treatments/cosmetic-section/veneers/veneers.component';
import { CosmeticHomeComponent } from '../components/treatments/cosmetic-section/cosmetic-home/cosmetic-home.component';

export const treatmentCosmeticRoutes: Routes = [
  {
    path: 'cosmetic',
    children: [
      {
        path: 'bridge',
        component: BridgeComponent,
        data: [{ label: 'Home', url: '/treatment/cosmetic' }]
      },
      {
        path: 'crowns',
        component: CrownsComponent,
        data: [{ label: 'Home', url: '/treatment/cosmetic' }]
      },
      {
        path: 'stain-removal',
        component: StainRemovalComponent,
        data: [{ label: 'Home', url: '/treatment/cosmetic' }]
      },
      {
        path: 'teeth-whitening',
        component: TeethWhiteningComponent,
        data: [{ label: 'Home', url: '/treatment/cosmetic' }]
      },
      {
        path: 'veneers',
        component: VeneersComponent,
        data: [{ label: 'Home', url: '/treatment/cosmetic' }]
      },
      {
        path: 'home',
        component: CosmeticHomeComponent,
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
