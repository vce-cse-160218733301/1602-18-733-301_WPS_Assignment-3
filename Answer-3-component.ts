import { Component, OnInit } from '@angular/core';
import { Assignment3Service } from '../services/assignment3.service';
import { assignment } from 'src/shared/assgn';
@Component({
  selector: 'app-assignment3',
  templateUrl: './assignment3.component.html',
  styleUrls: ['./assignment3.component.css']
})
export class Assignment3Component implements OnInit {

  constructor(private service:Assignment3Service) { }

  async ngOnInit() {
    this.assign=new assignment();
    await this.fetchData();
  }

  assign :assignment;
  async fetchData(){
    await this.service.getData().then(
      res=>{
        
        this.assign=res as assignment;
        console.log(this.assign.data);
      }
    )
  }
}
