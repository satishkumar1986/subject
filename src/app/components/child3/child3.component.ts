import { Component, OnInit } from '@angular/core';
import { MyService } from '../../service/my.service';

@Component({
  selector: 'app-child3',
  templateUrl: './child3.component.html',
  styleUrls: ['./child3.component.scss']
})
export class Child3Component implements OnInit {

  empNameVar;

  constructor(private _myService: MyService) { }

  ngOnInit(): void {

    this._myService.employeeName.subscribe(res => {
      this.empNameVar = res
    })

  }

  updateEmpName(input){
    this._myService.employeeName.next(input.value)
  }



}
