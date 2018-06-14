import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import {Event} from "../classes/event";
import * as firebase from 'firebase/app';

@Injectable({
  providedIn: 'root'
})
export class EventsService {
    public eventList: AngularFireList<any>;
    public selectedEvent: Event = new Event();

  constructor(private firebase: AngularFireDatabase) { }
  getProducts()
  {
    return this.eventList = this.firebase.list('events');
  }

  insertProduct(event: Event)
  {
    this.eventList.push({
      title: event.title,
      description: event.description
    });
  }

  updateProduct(event: Event)
  {
    this.eventList.update(event.$key, {
      title: event.title,
      description: event.description
      
    });
  }

  deleteProduct($key: string)
  {
    this.eventList.remove($key);
  }
}


