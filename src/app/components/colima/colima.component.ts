import { Component, OnInit } from '@angular/core';

@Component({
	selector:'colima',
	templateUrl: './colima.component.html'
})

export class ColimaComponent implements OnInit{
	public title:string;

	constructor(){
		this.title = 'Colima'
	}

	ngOnInit(){
		console.log('colima.component cargado');
	}
	/*Author: Hernan Mitchel Camacho Valdez*/
}

