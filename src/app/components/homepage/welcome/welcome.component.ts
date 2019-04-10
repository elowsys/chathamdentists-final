import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  get FullName() {
    return environment.appFullName;
  }

  get Title() {
    return environment.appTitle;
  }
}
