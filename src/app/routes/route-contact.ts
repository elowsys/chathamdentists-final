import { Routes } from '@angular/router';
import { FindUsComponent } from '../components/contact/find-us/find-us.component';
import { OpeningTimesComponent } from '../components/contact/opening-times/opening-times.component';
import { FeedbackComponent } from '../components/contact/feedback/feedback.component';
import { AppointmentComponent } from '../components/contact/appointment/appointment.component';

export const contactRoutes: Routes = [
  {
    path: 'contact',
    children: [
      {
        path: 'find-us',
        component: FindUsComponent,
        data: [{ label: 'Home', url: '/contact' }]
      },
      {
        path: 'opening-times',
        component: OpeningTimesComponent,
        data: [{ label: 'Home', url: '/contact' }]
      },
      {
        path: 'feedback',
        component: FeedbackComponent,
        data: [{ label: 'Home', url: '/contact' }]
      },
      {
        path: 'home',
        component: AppointmentComponent,
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
