import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent implements OnInit {
  newEN = '';
  newVN = '';
  showForm = false;
  arrWorks = [
    {id:1,en:'action',vn:'hành động',memorized:true},
    {id:2,en:'book',vn:'sách',memorized:false}
  ]
  constructor() { }

  ngOnInit() {
  }
  addWord(){
    this.arrWorks.unshift({
      id:this.arrWorks.length+1,
      en:this.newEN,
      vn:this.newVN,
      memorized:false
    });
    this.newEN = '';
    this.newVN = '';
    this.showForm=false; 
  }
  delete(id: number){
    const index = this.arrWorks.findIndex(e => e.id === id);
    this.arrWorks.splice(index,1);
  }
  show(id:number){
    const index = this.arrWorks.findIndex(e =>e.id === id);
  }
}
