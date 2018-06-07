import { Component, OnInit } from '@angular/core';

declare var Waypoint: any;
declare var $: any;

@Component({
	selector: 'app-services',
	templateUrl: './services.component.html',
})
export class ServicesComponent implements OnInit {
	
	showExample: boolean = false;

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
