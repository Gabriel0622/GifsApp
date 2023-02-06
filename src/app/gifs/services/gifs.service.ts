import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Gif, SearchGIFResponse } from '../interface/gifs.interface';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  private _history: string[] = [];
  private apiKey: string = '1JhAcadgCb8fDKIi3iRv2znko8y4BEE9';
  public results: Gif[] = [];

  get history(){
    return [...this._history]
  }

  constructor(private http: HttpClient){
    this._history = JSON.parse(localStorage.getItem('history')!) || [];
    this.results = JSON.parse(localStorage.getItem('results')!) || [];
  }

  searchGifs(query:string){
    query = query.toLowerCase();
    if (query.trim().length !==0 && !this._history.includes(query)) {
      this._history.unshift(query);
      this._history = this._history.splice(0,10);
      localStorage.setItem('history',JSON.stringify(this._history));
    }
    this.http.get<SearchGIFResponse>(`https://api.giphy.com/v1/gifs/search?api_key=${ this.apiKey }&q=${ query }&limit=10`)
    .subscribe( ( response ) =>{
      this.results = response.data;
      localStorage.setItem('results',JSON.stringify(this.results));
    })
    
  }


}
