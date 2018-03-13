import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';

@Component({})
export class AppComponent implements OnInit {
  reviews: AngularFireList<any[]>;

  constructor(private af: AngularFireDatabase) {}

  ngOnInit() {
        this.reviews = this.af.list('/todos');
      
  }

  addTodo(value: string): void {
    // ...
  }
  deleteTodo(todo: any): void {
    // ...
  }

  toggleDone(todo: any): void {
    // ...
  }

  updateTodo(todo: any, newValue: string): void {
    // ...
  }
}