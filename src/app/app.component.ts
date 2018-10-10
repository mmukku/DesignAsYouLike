import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: [
    `.list-group-item:first-child{left-margin:1; right-margin:1;}`
]
})
export class AppComponent implements OnInit {
  title = 'Project AJ by MM';
  myNewProj: string;
  myNewUser: string;
  myNewObj: object;
  myNewObj2: object;
  showUserObj(e, var1) {
    console.log(e);
  this.myNewUser = var1.name + ' from ' + var1.city;
  var1.highlight = !var1.highlight;
  }

  constructor( private http: HttpClient) {
    this.myNewProj = 'This is AngularJS Project for ';
    this.myNewUser = 'MM';
    this.myNewObj = [
     {
       'name': 'SuperWoman',
      'city': 'Paris',
      'country': 'France',
      'highlight': true
    },
      {
        'name': 'WonderWoman',
      'city': 'Delhi',
      'country': 'India',
      'highlight': true
    }
    ];
  }

  ngOnInit(): void {
this.http.get<object>('./assets/data.json').subscribe(
data => {
  this.myNewObj2 = data;
});

  }
}
