import { Component, OnInit } from '@angular/core';

declare var Waypoint: any;
declare var $: any;

@Component({
	selector: 'app-contact',
	templateUrl: './contact.component.html',
})
export class ContactComponent implements OnInit {

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
