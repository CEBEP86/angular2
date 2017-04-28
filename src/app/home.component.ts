import { Component, OnInit} from '@angular/core';
import { Response} from '@angular/http';
import { HttpService} from './http.service';
import {Executor} from './executor';

@Component({
  selector: 'home-app',
  templateUrl: './home.component.html',
  providers: [HttpService]

})

export class HomeComponent  implements OnInit {

                               executor: Executor;

                               constructor(private httpService: HttpService){}

                               ngOnInit(){

                                   this.httpService.getData().subscribe((data: Response) => this.executor=data.json());
                               }
                           }
