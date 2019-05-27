import { Component, OnInit } from '@angular/core';

@Component({
	selector:'golf',
	templateUrl: './golf.component.html'
})

export class GolfComponent implements OnInit{
	public title:string;

	constructor(){
		this.title = 'Golf en Colima'
	}

	ngOnInit(){
		console.log('golf.component cargado');
	}
	/*Author: Hernan Mitchel Camacho Valdez*/

}

