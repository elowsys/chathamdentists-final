import { AfterViewInit, Component, OnInit, ViewChildren } from '@angular/core';
import { CollapseComponent as Collapse } from 'angular-bootstrap-md';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss']
})
export class FaqComponent implements OnInit {
  isCollapsed: any;
  @ViewChildren(Collapse) collapses: Collapse[];

  constructor() {}

  ngOnInit() {}

  showBsCollapse(event: any) {
    console.log(event);
  }
  shownBsCollapse(event: any) {
    console.log(event);
  }
  hideBsCollapse(event: any) {
    console.log(event);
  }
  hiddenBsCollapse(event: any) {
    console.log(event);
  }
  ngAfterViewInit() {
    setTimeout(() => {
      this.collapses.forEach((collapse: Collapse, index: number) => {
        if (index === 1) {
          collapse.toggle();
        }
      });
    }, 0);
  }
}
