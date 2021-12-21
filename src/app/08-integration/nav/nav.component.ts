import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-nav',
	templateUrl: './nav.component.html',
	styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
	constructor() { }

	ngOnInit() { }


	demo(){
		console.log("empty code");
		
	}
}
export function	compute(number) {
	if (number < 0) {
		return 0;
	}

	return number + 1;
}
