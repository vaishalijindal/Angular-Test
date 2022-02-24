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
		console.log("new commit");
		console.log("new commit for test");
		
	}
	check(){
		console.log("empty code1");
		console.log("new commit");
		console.log("new commit for test");
		
	}
}
export function	compute(number) {
	if (number < 0) {
		return 0;
	}

	return number + 1;
}
