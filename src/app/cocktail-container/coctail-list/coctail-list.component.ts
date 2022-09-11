import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Cocktail } from 'src/app/shared/interfaces/coctail.interface';


@Component({
  selector: 'app-coctail-list',
  templateUrl: './coctail-list.component.html',
  styleUrls: ['./coctail-list.component.css']
})
export class CoctailListComponent implements OnInit {
@Input() public cocktails?:Cocktail[];
@Output() changeevent:EventEmitter<number>=new EventEmitter();
  constructor() { }

  ngOnInit(): void  {
    
  }
  selectCocktail(index:number):void{
    this.changeevent.emit(index)
  }

}
