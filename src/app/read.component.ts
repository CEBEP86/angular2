import {Component, Input, OnInit} from '@angular/core';
import {Task} from './Task';
import {Router, ActivatedRoute, Params} from '@angular/router';
import {HttpService} from './http.service';
import {Personal} from './Personal';
import {Executor} from './Executor';
import {Response} from '@angular/http';


@Component({
  selector: 'read-app',
  templateUrl: './read.component.html',
  providers: [HttpService]
})
export class ReadComponent implements OnInit {
  task: Task = new Task;
  executors: Executor[] = [];
  param: number;
  personal: Personal[] = [];
  executorsListWithName: any[] = [];
  responcebls: any[] = [];
  responcebleName: string;

  constructor(private httpService: HttpService,
              private route: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit() {
    let id = +this.route.snapshot.params['id'];

    this.param = id;
    this.httpService.getTask(id)
      .subscribe((data: Response) => this.task = data.json())


    this.httpService.getData()
      .map((data: Response) => data.json() as Personal[])
      .subscribe((personal: Personal[]) => {
        this.personal = personal;
        this.responcebleName = this.personal
          .filter(employee => employee.id == this.task.responcebleID)
          .map(employee => employee.firstName)
          .reduce((acc: string, taxInSingletonList: string) => taxInSingletonList)


      })
    this.httpService.getExecutors(id)
      .map((data: Response) => data.json() as Executor[])
      .subscribe((executor: Executor[]) => {
        this.executors = executor;
        this.executors.forEach((employee: Executor) => this.executorsListWithName.push({
          hour: employee.hour, firstName: this.personal
            .filter(employee2 => employee2.id == employee.personalId)
            .map(employee => employee.firstName)
            .reduce((acc: string, taxInSingletonList: string) => taxInSingletonList)
        }));
      })

  }
}
