import { Component, OnInit, OnDestroy } from '@angular/core';

import { MessageService } from '../message.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-data-com-rec',
  templateUrl: './data-com-rec.component.html',
  styleUrls: ['./data-com-rec.component.css']
})
export class DataComRecComponent implements OnInit, OnDestroy {
  message: any;
      subscription: Subscription;
   
  constructor(private messageService: MessageService) { 
    this.subscription = this.messageService.getMessage().subscribe(message => { this.message = message;
    console.log("Child receiving from parent"+this.message.text) });
  }

  ngOnInit() {
  }
  ngOnDestroy() {
    // unsubscribe to ensure no memory leaks
    this.subscription.unsubscribe();
}
}
