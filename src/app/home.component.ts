import { Component, OnInit} from '@angular/core';
import { Response} from '@angular/http';
import { HttpService} from './http.service';

@Component({
  selector: 'home-app',
  templateUrl: './home.component.html',
  providers: [HttpService]

})

export class HomeComponent  implements OnInit {

                               ngOnInit(){

                               }
                           }
