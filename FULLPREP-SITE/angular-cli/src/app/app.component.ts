import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http'; //HTTP CLIENT
import { Observable } from 'rxjs/internal/Observable';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
   title = 'client';
    results: string[];
    obs:Observable<object>;
    // Inject HttpClient into your component or service.
    constructor(private http: HttpClient) {}

    ngOnInit(): void {
      // Make the HTTP request:
    }

    event():void{
      this.obs = this.http.get('https://3000-f58b7863-f975-4504-ad64-122cf954247d.ws-eu01.gitpod.io/api/products');
      this.obs.subscribe(this.getData);
    }
    getData = data => {
        this.results = data['products'];
      }
}
