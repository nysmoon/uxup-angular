import { Component, OnInit } from '@angular/core';

declare var Waypoint: any;
declare var $: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

	ngAfterViewInit() {
				
		$('.scrollimation').waypoint({
		  handler: function() {
		    $(this.element).addClass('in');
		  },
		  offset:'95%'
		});
	}

}
