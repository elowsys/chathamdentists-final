import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';

import { AppComponent } from './containers/app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { HeaderComponent } from './components/navigation/header/header.component';
import { FooterComponent } from './components/navigation/footer/footer.component';
import { NavComponent } from './components/navigation/nav/nav.component';
import { SocialBarComponent } from './components/navigation/social-bar/social-bar.component';
import { AboutUsComponent } from './components/about/about-us/about-us.component';
import { CommitmentComponent } from './components/about/commitment/commitment.component';
import { TeamComponent } from './components/about/team/team.component';
import { AppointmentComponent } from './components/contact/appointment/appointment.component';
import { FeedbackComponent } from './components/contact/feedback/feedback.component';
import { FindUsComponent } from './components/contact/find-us/find-us.component';
import { OpeningTimesComponent } from './components/contact/opening-times/opening-times.component';
import { FeesComponent } from './components/facilities/fees/fees.component';
import { FinanceComponent } from './components/facilities/finance/finance.component';
import { FaqComponent } from './components/facilities/faq/faq.component';
import { FacilitiesHomeComponent } from './components/facilities/facilities-home/facilities-home.component';
import { TestimonialsHomeComponent } from './components/testimonials/testimonials-home/testimonials-home.component';
import { ReviewsComponent } from './components/testimonials/reviews/reviews.component';
import { VideoComponent } from './components/testimonials/video/video.component';
import { TreatmentHomeComponent } from './components/treatments/treatment-home/treatment-home.component';
import { EmergencyComponent } from './components/treatments/emergency/emergency.component';
import { NervousPatientsComponent } from './components/treatments/nervous-patients/nervous-patients.component';
import { RootCanalComponent } from './components/treatments/root-canal/root-canal.component';
import { BridgeComponent } from './components/treatments/cosmetic-section/bridge/bridge.component';
import { CosmeticHomeComponent } from './components/treatments/cosmetic-section/cosmetic-home/cosmetic-home.component';
import { CrownsComponent } from './components/treatments/cosmetic-section/crowns/crowns.component';
import { StainRemovalComponent } from './components/treatments/cosmetic-section/stain-removal/stain-removal.component';
import { TeethWhiteningComponent } from './components/treatments/cosmetic-section/teeth-whitening/teeth-whitening.component';
import { VeneersComponent } from './components/treatments/cosmetic-section/veneers/veneers.component';
import { AcrylicComponent } from './components/treatments/dentures-section/acrylic/acrylic.component';
import { CobaltChromeComponent } from './components/treatments/dentures-section/cobalt-chrome/cobalt-chrome.component';
import { DenturesHomeComponent } from './components/treatments/dentures-section/dentures-home/dentures-home.component';
import { MissingTeethComponent } from './components/treatments/dentures-section/missing-teeth/missing-teeth.component';
import { CancerScreeningComponent } from './components/treatments/family-section/cancer-screening/cancer-screening.component';
import { FamilyHomeComponent } from './components/treatments/family-section/family-home/family-home.component';
import { ChildrenComponent } from './components/treatments/family-section/children/children.component';
import { HygienistComponent } from './components/treatments/family-section/hygienist/hygienist.component';
import { AmalgamComponent } from './components/treatments/fillings-section/amalgam/amalgam.component';
import { CompositeBondingComponent } from './components/treatments/fillings-section/composite-bonding/composite-bonding.component';
import { FillingsHomeComponent } from './components/treatments/fillings-section/fillings-home/fillings-home.component';
import { GoldComponent } from './components/treatments/fillings-section/gold/gold.component';
import { PorcelainComponent } from './components/treatments/fillings-section/porcelain/porcelain.component';
import { WhiteComponent } from './components/treatments/fillings-section/white/white.component';
import { SupportedDenturesComponent } from './components/treatments/dentures-section/supported-dentures/supported-dentures.component';
import { InvisalignComponent } from './components/treatments/orthodontics-section/invisalign/invisalign.component';
import { OrthodonticsHomeComponent } from './components/treatments/orthodontics-section/orthodontics-home/orthodontics-home.component';
import { PreventiveCareComponent } from './components/treatments/family-section/preventive-care/preventive-care.component';
import { NotFoundComponent } from './components/shared/not-found/not-found.component';
import { PrivacyComponent } from './components/shared/privacy/privacy.component';
import { HomeContentComponent } from './components/homepage/home-content/home-content.component';
import { appRoutes } from './routes';
import { ContactUsFormComponent } from './components/shared/contact-us-form/contact-us-form.component';
import { AwardsComponent } from './components/homepage/awards/awards.component';
import { CarouselsComponent } from './components/homepage/carousels/carousels.component';
import { HomeGalleryComponent } from './components/homepage/home-gallery/home-gallery.component';
import { HomeFooterComponent } from './components/homepage/home-footer/home-footer.component';
import { MoreContentComponent } from './components/homepage/more-content/more-content.component';
import { ReviewsGridComponent } from './components/homepage/reviews-grid/reviews-grid.component';
import { SpaceFillerComponent } from './components/homepage/space-filler/space-filler.component';
import { TreatmentGridComponent } from './components/homepage/treatment-grid/treatment-grid.component';
import { WelcomeComponent } from './components/homepage/welcome/welcome.component';

// import { ComponentsMainComponent } from './../../projects/mdb-demo/src/app/components/components/components-main/components-main.component';
// import { NavComponent } from './../../projects/mdb-demo/src/app/components/shared/nav/nav.component';

export function tokenGetter() {
  return localStorage.getItem('cd-token');
}

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    SocialBarComponent,
    AboutUsComponent,
    CommitmentComponent,
    TeamComponent,
    AppointmentComponent,
    FeedbackComponent,
    FindUsComponent,
    OpeningTimesComponent,
    FeesComponent,
    FinanceComponent,
    FaqComponent,
    FacilitiesHomeComponent,
    TestimonialsHomeComponent,
    ReviewsComponent,
    VideoComponent,
    TreatmentHomeComponent,
    EmergencyComponent,
    NervousPatientsComponent,
    RootCanalComponent,
    BridgeComponent,
    CosmeticHomeComponent,
    CrownsComponent,
    StainRemovalComponent,
    TeethWhiteningComponent,
    VeneersComponent,
    AcrylicComponent,
    CobaltChromeComponent,
    DenturesHomeComponent,
    MissingTeethComponent,
    CancerScreeningComponent,
    FamilyHomeComponent,
    ChildrenComponent,
    HygienistComponent,
    AmalgamComponent,
    CompositeBondingComponent,
    FillingsHomeComponent,
    GoldComponent,
    PorcelainComponent,
    WhiteComponent,
    SupportedDenturesComponent,
    InvisalignComponent,
    OrthodonticsHomeComponent,
    PreventiveCareComponent,
    NotFoundComponent,
    PrivacyComponent,
    HomeContentComponent,
    ContactUsFormComponent,
    AwardsComponent,
    CarouselsComponent,
    HomeGalleryComponent,
    HomeFooterComponent,
    MoreContentComponent,
    ReviewsGridComponent,
    SpaceFillerComponent,
    TreatmentGridComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MDBBootstrapModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
