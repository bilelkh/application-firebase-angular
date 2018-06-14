import { Component, OnInit } from '@angular/core';
import {Event} from "../../classes/event" ;
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, Params } from '@angular/router';
import { NgForm } from '@angular/forms';
import {EventsService} from "../../services/events.service"
import  {AuthentificationService} from "../../services/authentification.service"
@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {
    //private fb: FormBuilder,
  
  
    constructor(private fb: FormBuilder,public eventsService:EventsService)
      { this.createForm();}
     
    
   //  
   
  //  this.createForm();
  

  public  eventForm: FormGroup;
  public  errorMessage: string = '';
  public  eventList: Event[];
  public  loading = false;
  public  titleModal = "Ajouter un nouvel event";
  public  titleButton = "Ajouter";
  public  p: Number = 1;

  createForm() {
    this.eventForm = this.fb.group({
      title: ['',Validators.required],
      description: ['', Validators.required],
      $key:['']
    });
  }


  ngOnInit() {
  this.getAllEvent();
  this.resetForm();
  }



  onSubmit(eventForm: NgForm)
  
  {console.log("eventForm",eventForm.value);
    if(this.eventForm.value.$key == null)
      this.eventsService.insertProduct(eventForm.value);
    else
    this.eventsService.updateProduct(eventForm.value);
    
    this.resetForm(eventForm);
  }



  resetForm(eventForm?: NgForm)
  {
    if(eventForm != null)
      eventForm.reset();
      this.titleModal = "Ajouter un nouvel ingrédient";
      this.titleButton = "Ajouter";
      this.eventsService.selectedEvent = new Event();
  }


  onDelete($key:string) {
    if(confirm('Are you sure you want to delete it?')) {
      console.log("key",$key);
      this.eventsService.deleteProduct($key);
    }
    this.getAllEvent();
  }


getAllEvent() {
  this.loading = true;
  this.eventsService.getProducts()
      .snapshotChanges().subscribe(item => {
        this.eventList = [];
        item.forEach(element => {
          let x = element.payload.toJSON();
          x["$key"] = element.key;
          this.eventList.push(x as Event);
        });
        this.loading = false;
      });
 
}

onEdit(event: Event) {
  console.log("event",event);
  this.titleModal = "Modifier un ingrédient";
  this.titleButton = "Modifier";
  this.eventForm = this.fb.group({
    title: [event.title, Validators.required],
    description: [event.description],
    $key: [event.$key]
  });
  this.eventsService.selectedEvent = Object.assign({}, event);
}





}
