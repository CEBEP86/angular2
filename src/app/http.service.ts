import {Injectable} from '@angular/core';
import {Http, URLSearchParams, Headers, Response, RequestOptions} from '@angular/http';
import {Observable} from "rxjs";
import {Task} from './Task';
import {take} from "rxjs/operator/take";
import { Executor} from './Executor';

@Injectable()
export class HttpService{

  constructor(private http: Http){ }

  getData(){
    return this.http.get('./api/load-personal-information')
  }

  getAllTask(){
    return this.http.get('./api/find-all-tasks')
  }

  postTask(task:Task) {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    let body = JSON.stringify({task});
    let body2= '{"id":"3","creatorID":"3","taskName":"gfba","description":"description","startTime":"Tue, 30 May 2017 05:15:25 GMT","finishTime":"Tue, 30 May 2017 05:15:25 GMT","responcebleID":"1","cost":"6"}';
    return this.http.post('./api/create-task',task,options)
      }


  postExecutors(executor:any) {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    let body = JSON.stringify({executor});
    let body2= '[{"personalId":1,"hour":2}]';

    return this.http.post('./api/create-task-add-executor',executor,options)
  }

  getTask(id:number) {
    let url = './api/read-task/' + id;
    return this.http.get(url)
  }
}

