import { Component, ViewChild, ElementRef } from '@angular/core';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent{

  @ViewChild('txtBuscar') 
  txtBuscar!: ElementRef<HTMLInputElement>;

  constructor(private gifsService: GifsService){}

  buscar(){
    let valor = this.txtBuscar.nativeElement.value;
    this.gifsService.searchGifs(valor);
    this.txtBuscar.nativeElement.value = '';
  }

}
