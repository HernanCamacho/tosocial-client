import { Component, OnInit } from '@angular/core';

@Component({
	selector:'history',
	templateUrl: './history.component.html'
})

export class HistoryComponent implements OnInit{
	public title:string;

	constructor(){
		this.title = 'Historia'
	}

	ngOnInit(){
		console.log('history.component cargado');
	}
	/*Author: Hernan Mitchel Camacho Valdez*/

}

