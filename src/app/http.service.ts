import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';

@Injectable()
export class HttpService{

  constructor(private http: Http){ }

  getData(){
    return this.http.get('/read-task-executor',).map(this.extractData)
  }
  private extractData(res: Response) {
    let body = res.json();
    return body.data || { };
  }
}
