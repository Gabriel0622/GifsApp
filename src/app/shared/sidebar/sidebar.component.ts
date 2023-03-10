import { Component, OnInit } from '@angular/core';
import { GifsService } from 'src/app/gifs/services/gifs.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent  {

  

  constructor(private gifsServices: GifsService) { }

  get history(){
    return this.gifsServices.history;
  }

  search(historyItem:string){
    this.gifsServices.searchGifs(historyItem);
  }


}
