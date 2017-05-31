import {Component, OnInit} from '@angular/core';

import {Response} from '@angular/http';
import {HttpService} from './http.service';
import {Personal} from './Personal';
import {Task} from './Task';
import {Router, ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'home-app',
  templateUrl: './home.component.html',
  providers: [HttpService]
})

export class HomeComponent implements OnInit {
  selectedTask: Task;
  task: Task[] = [];
  personal: Personal[] = [];

  constructor(private httpService: HttpService,
              private route: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit() {
    this.httpService.getData()
      .subscribe((data: Response) => this.personal = data.json());
    this.httpService.getAllTask()
      .subscribe((data: Response) => this.task = data.json());
  }

  onSelect(task: Task): void {
    this.selectedTask = task;
  }

  delete(task: Task): void {
    if (this.selectedTask === task) {
      this.selectedTask = null;
    }
    this.httpService.delete(task.id).subscribe((ok) => {
      console.log(ok)
    });
    ;
    window.location.reload();
  }
}
