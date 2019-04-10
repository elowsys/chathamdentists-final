import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse
} from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EmailService {
  constructor(private _http: HttpClient, private router: Router) {}

  sendEmail() {
    const url = `https://us-central1-probalance-214005.cloudfunctions.net/httpEmail?sg_key=MY_API_KEY`;
    const body = {
      personalizations: [
        {
          to: [
            {
              email: 'myemail@example.com',
              name: 'Postman'
            }
          ],
          subject: 'Success'
        }
      ],
      from: {
        email: 'web.appointments@chathamdentists.com',
        name: environment.appTitle
      },
      reply_to: {
        email: 'no-reply@chathamdentists.com',
        name: 'Test'
      },
      content: [
        {
          type: 'text/plain',
          value: 'Request Successful 001!'
        }
      ]
    };

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    console.log('Payload:');
    console.log(url);
    console.log(body);
    console.log(httpOptions.headers);

    return this._http
      .post(url, body, httpOptions)
      .toPromise()
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
  }
}
