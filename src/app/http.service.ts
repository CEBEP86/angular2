import {Injectable} from '@angular/core';
import {Http, Headers, RequestOptions} from '@angular/http';

import {Task} from './Task';

@Injectable()
export class HttpService {

  constructor(private http: Http) {
  }

  getData() {
    return this.http.get('./api/load-personal-information')
  }

  getAllTask() {
    return this.http.get('./api/find-all-tasks')
  }

  postTask(task: Task) {
    let headers = new Headers({'Content-Type': 'application/json'});
    let options = new RequestOptions({headers: headers});
    return this.http.post('./api/create-task', task, options)
  }


  postExecutors(executor: any) {
    let headers = new Headers({'Content-Type': 'application/json'});
    let options = new RequestOptions({headers: headers});
    return this.http.post('./api/create-task-add-executor', executor, options)
  }

  getTask(id: number) {
    let url = './api/read-task/' + id;
    return this.http.get(url)
  }

  getExecutors(id: number) {
    let url = './api/read-task-executor/' + id;
    return this.http.get(url)
  }

  delete(id: number) {
    let headers = new Headers({'Content-Type': 'application/json'});

    console.log(id)
    let url = './api/remove-task/' + id;
    return this.http.delete(url, {headers: headers});
  }
}

