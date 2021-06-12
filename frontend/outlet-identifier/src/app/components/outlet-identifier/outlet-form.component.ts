import { Component } from '@angular/core';
import { Http, Response } from '@angular/http';

interface Outlet {
  address: string;
}

@Component({
  selector: "outlet-form",
  templateUrl: "./outlet-form.component.html"
})

export class OutletFormComponent {
    constructor(private http: Http){}
    address: string = ""
    result: string = ""
    
    onSubmit() {
      if (this.address === '') {
        this.result = 'Please enter a valid input'
        
      } else {
        const urlofApi= 'http://localhost:8080/fetch-outlet'
        this.http.post(urlofApi, {
          address: this.address
        })
        .subscribe(
          (res: Response) => 
            {
              this.result = res.text()
            }
        );
      }
      
    }
}