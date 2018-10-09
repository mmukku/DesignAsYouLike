import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: [
    `.list-group-item:first-child{left-margin:1; right-margin:1;}`
]
})
export class AppComponent {
  title = 'Project AJ by MM';
  myNewProj: string;
  myNewUser: string;
  myNewObj: object;
  showUserObj(e, var1) {
    console.log(e);
  this.myNewUser = var1.name + ' from ' + var1.city;
  }
  constructor() {
    this.myNewProj = 'This is AngularJS Project for ';
    this.myNewUser = 'MM';
    this.myNewObj = [
     {
       'name': 'SuperWoman',
      'city': 'Paris',
      'country': 'France'
    },
      {
        'name': 'WonderWoman',
      'city': 'Delhi',
      'country': 'India'
    }
    ];
  }
}
