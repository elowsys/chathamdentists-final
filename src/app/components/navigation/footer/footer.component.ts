import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  get CopyrightYear() {
    return new Date().getFullYear().toString();
  }

  get Title() {
    return environment.appTitle;
  }

  get SiteFullName() {
    return environment.appFullName;
  }

  get ShowContactFooterForm() {
    return true;
  }
}
