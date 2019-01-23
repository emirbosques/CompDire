import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-style',
  template: `
    <p [style.fontSize.px]="sizeFont">
      ::::... ngStyle Testing ...::::
    </p>

    <div class="row">

      <div class="col-2">
      <button class="btn btn-primary">
    <i class="fa fa-plus-square" aria-hidden="true" (click)="sizeFont = sizeFont + 10"></i>
    </button>
      </div>

      <div class="col-2">

      <button class="btn btn-warning" (click)="sizeFont = sizeFont - 10" >
    <i class="fa fa-minus-square" aria-hidden="true"></i>
    </button>
    
      </div>


    </div>
    
  `,
  styles: []
})
export class NgStyleComponent implements OnInit {

  sizeFont: number = 20;

  constructor() { }

  ngOnInit() {
  }

}
