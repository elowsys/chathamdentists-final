import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {
  private _bannerStyle: string;
  private _fontAwesomeIcon: string;
  private _headerTitle: string;
  private _showCarousel: boolean;
  private _showFooterContactForm: boolean;

  constructor() {}

  get BannerStyle() {
    return 'py-2 mb-3 bg-secondary text-white text-center ' + this._bannerStyle;
  }
  set BannerStyle(style) {
    this._bannerStyle = style;
  }

  get FontAwesomeIcon() {
    return this._fontAwesomeIcon;
  }

  get HeaderTitle() {
    return this._headerTitle;
  }

  get ShowCarousel() {
    return this._showCarousel;
  }

  get ShowContactFooterForm() {
    return this._showFooterContactForm;
  }

  initialize(
    showCarousel?: boolean,
    headerTitle = 'Welcome to ' + environment.appFullName,
    bannerStyle = 'page-banner',
    showFooterContactForm?: boolean,
    fontAwesomeIcon?: string
  ) {
    this._showCarousel = showCarousel;
    this._headerTitle = headerTitle;
    this._bannerStyle = bannerStyle;
    this._showFooterContactForm = showFooterContactForm;
    this._fontAwesomeIcon = fontAwesomeIcon;
  }
}
