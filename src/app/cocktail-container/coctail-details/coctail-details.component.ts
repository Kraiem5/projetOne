import { Component, Input, OnInit } from '@angular/core';
import { Cocktail } from 'src/app/shared/interfaces/coctail.interface';
import { PanierService } from 'src/app/shared/interfaces/services/panier.service';

@Component({
  selector: 'app-coctail-details',
  templateUrl: './coctail-details.component.html',
  styleUrls: ['./coctail-details.component.css']
})
export class CoctailDetailsComponent implements OnInit {
  @Input() public cocktail?:   any;


  constructor(private panierservice : PanierService) { }

  ngOnInit(): void {

  }

}
