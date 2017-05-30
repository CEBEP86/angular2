import { Component, OnInit } from '@angular/core';
import { Response} from '@angular/http';
import { Executor} from './Executor';
import { HttpService} from './http.service';
import {Personal} from './Personal';
import {Task} from './Task';

@Component({
  selector: 'create-app',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
  providers: [HttpService]
})
export class CreateComponent implements OnInit {
   personal: Personal[]=[];
   selectedValue: string;
   selectedValue2: string;
   hours: number;
   executor_list: any[]=[];
   executors:any[] = [];
   cost: number=0;
   personalTax:number;
   responcebls:any[] = [];
   taskName:string;
   description:string;
   requestTask:Task;
   requestExecutors:Executor;
   creatorID: number;
   startTime: any="Tue, 30 May 2017 06:31:13 GMT";
   finishTime: any="Tue, 30 May 2017 06:31:13 GMT";


   constructor(private httpService: HttpService){}

  ngOnInit(){
         this.httpService.getData()
          .map ((data: Response) => data.json() as Personal[])
          .subscribe((personal: Personal[]) => {
               this.personal = personal;
               this.personal.forEach((employee: Personal) => this.responcebls.push({value:employee.firstName, viewValue:employee.firstName}));
               this.personal.forEach((employee: Personal) => this.executors.push({value:employee.firstName, viewValue:employee.firstName}));
          })
  }



   myFunc(){

     this.executor_list.push({
        personalId: this.personal
                     .filter(employee => employee.firstName == this.selectedValue2)
                     .map(employee => employee.id)
                     .reduce((acc:number, taxInSingletonList:number) => taxInSingletonList),
        hour: this.hours
     });

    this.personalTax = this.personal
                           .filter(employee => employee.firstName == this.selectedValue2)            // отбрасываем все ненужные значения. Результат: Personal[]
                           .map(employee => employee.tax)                                            // берем налог из работника. Результат: number[]
                           .reduce((acc:number, taxInSingletonList:number) => taxInSingletonList)    // преобразуем массив из одного числа в число. Результат: number

    this.personalTax= this.personalTax*this.hours;
    this.cost+= this.personalTax;
   }

   createTask(){
this.requestTask=({
          id: 1,
          creatorID: 3,
          taskName: this.taskName,
          description: this.description,
          startTime: this.startTime.timestamp,
          finishTime: this.finishTime,
          responcebleID: this.personal
                                                          .filter(employee => employee.firstName == this.selectedValue)            // отбрасываем все ненужные значения. Результат: Personal[]
                                                          .map(employee => employee.id)                                            // берем налог из работника. Результат: number[]
                                                          .reduce((acc:number, taxInSingletonList:number) => taxInSingletonList),    // преобразуем массив из одного числа в число. Результат: number
          cost: this.cost
     });


    this.httpService.postTask(this.requestTask).subscribe(data => {
                                                    console.log(data)
                                                     });;

this.httpService.postExecutors(this.executor_list).subscribe(data => {
                                                    console.log(data)
                                                     });;



   }
}

