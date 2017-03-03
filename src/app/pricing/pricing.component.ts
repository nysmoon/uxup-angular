import { Component, OnInit } from '@angular/core';

declare var Waypoint: any;
declare var $: any;

@Component({
	selector: 'app-pricing',
	templateUrl: './pricing.component.html',
})
export class PricingComponent implements OnInit {
	
	showExample: false;

	constructor() {
	}

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
