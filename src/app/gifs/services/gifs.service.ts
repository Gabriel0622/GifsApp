import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  private _history: string[] = [];


  get history(){
    return [...this._history]
  }

  searchGifs(query:string){
    query = query.toLowerCase();
    if (query.trim().length !==0 && !this._history.includes(query)) {
      this._history.unshift(query);
    }
    if (this._history.length === 11) {
      this._history.pop();
    }
   
  }


}
