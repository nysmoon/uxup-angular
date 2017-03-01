import { Component, OnInit } from '@angular/core';

declare var Waypoint: any;
declare var $: any;

@Component({
  selector: 'app-workflow',
  templateUrl: './workflow.component.html',
})
export class WorkflowComponent implements OnInit {

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
