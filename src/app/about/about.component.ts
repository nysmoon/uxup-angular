import { Component, OnInit } from '@angular/core';

declare var Waypoint: any;
declare var $: any;

@Component({
	selector: 'app-about',
	templateUrl: './about.component.html',
})
export class AboutComponent implements OnInit {

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
