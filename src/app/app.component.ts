import { Component, isDevMode } from '@angular/core';

declare var Waypoint: any;
declare var $: any;
declare var mixpanel: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
	
	ngOnInit() {

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
