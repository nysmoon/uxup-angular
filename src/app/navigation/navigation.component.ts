import { Component, OnInit } from '@angular/core';

@Component({
	inputs: ['navClass'],
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
