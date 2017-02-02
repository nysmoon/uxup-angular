import { Component } from '@angular/core';

declare var Waypoint: any;
declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
	ngAfterViewInit() {
				
		$('.scrollimation').waypoint({
		  handler: function() {
		    $(this.element).addClass('in');
		  },
		  offset:'95%'
		});
	}
	
	
}
