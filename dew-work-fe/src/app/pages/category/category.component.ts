import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/service/category.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  category: any = [];

  constructor(private readonly ps: CategoryService, private ar: ActivatedRoute) { }

  _getProductByCategoryId(categoryId: number) {

    const param = '?categoryId=' + categoryId;

    this.ps._getProductByCategoryId(param).subscribe((rest: any) => {
      this.category = rest.data;
      console.log(this.category);
    })
  }

  ngOnInit(): void {
    this.ar.params.subscribe((params: Params) => {
      if(params.categoryId) {
        console.log(params.categoryId);
        this._getProductByCategoryId(params.categoryId);
      }
    });
  }
}
