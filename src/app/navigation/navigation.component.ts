import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
})
export class NavigationComponent implements OnInit {

	@Input() navClass: any;

  constructor() { }

  ngOnInit() {
  }

}
