import { Component, OnInit } from '@angular/core';
import { OfferService } from 'src/app/services/offer.service';

@Component({
  selector: 'app-offer',
  templateUrl: './offer.component.html',
  styleUrls: ['./offer.component.css']
})
export class OfferComponent implements OnInit {

  descuentos = [];
  packs = [];

  constructor(private readonly os: OfferService) { }

  __getOffersFromService(){
    this.os.__getOffers().subscribe((rest: any) => {
      console.log(rest.data);
      this.packs = rest.data.filter((item: any) => item.precio != 0);
      this.descuentos = rest.data.filter((item: any) => item.precio == 0);
    });
  }

  ngOnInit(): void {
    this.__getOffersFromService();
    
  }

}
