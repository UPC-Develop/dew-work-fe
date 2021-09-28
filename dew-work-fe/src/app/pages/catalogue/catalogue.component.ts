import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { CatalogService } from 'src/app/services/catalog.service';

@Component({
  selector: 'app-catalogue',
  templateUrl: './catalogue.component.html',
  styleUrls: ['./catalogue.component.css']
})
export class CatalogueComponent implements OnInit {

  public products = [];
  public pageSlice = [];
  constructor(private readonly ps:CatalogService) {}

  __getProductsFromService(){
    this.ps.__getCatalog().subscribe((rest:any) => {
      console.log(rest.data);
      this.products = rest.data;
      this.pageSlice = this.products.slice(0,4);
    });

  }

  OnPageChange(event: PageEvent){
    const startIndex = event.pageIndex * event.pageSize;
    let endIndex = startIndex + event.pageSize;
    if(endIndex > this.products.length){
      endIndex = this.products.length;
    }
    this.pageSlice = this.products.slice(startIndex,endIndex);
  }

  ngOnInit(): void {
    this.__getProductsFromService();
  }

}
