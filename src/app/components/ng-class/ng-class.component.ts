import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-class',
  templateUrl: './ng-class.component.html',
  styleUrls: ['./ng-class.component.css']
})
export class NgClassComponent implements OnInit {

  properties:Object={
    danger : true
  };

  alerta = 'alert-warning';

  loading = false;

  constructor() { }

  ngOnInit() {
  }

  ejecutarAsync(){
    this.loading = true;
    setTimeout(() => {
      this.loading = false;
    }, 3000);
  }

}
