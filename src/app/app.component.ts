import { Component, isDevMode } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';

declare var Waypoint: any;
declare var $: any;
declare var mixpanel: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

	url: string;

  constructor(private router: Router) { 
  }


	ngOnInit() {
  	this.url = this.router.url;

		if(!isDevMode()) {
			mixpanel.track("Page Load");
		}

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
