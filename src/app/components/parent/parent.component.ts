import { Component, OnInit } from '@angular/core';
import { MyService } from '../../service/my.service';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {

  empNameVar;

  constructor(private _myService:MyService) { }

  ngOnInit(): void {

    this._myService.employeeName.subscribe(res=>{
      this.empNameVar = res     
    })

  }

  updateEmpName(input){
    this._myService.employeeName.next(input.value)
  }

}
