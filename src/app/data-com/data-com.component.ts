import { Component, OnInit } from '@angular/core';
import { MessageService } from '../message.service';
@Component({
  selector: 'app-data-com',
  templateUrl: './data-com.component.html',
  styleUrls: ['./data-com.component.css']
})
export class DataComComponent implements OnInit {

  constructor(private messageService: MessageService) { }

  ngOnInit() {
  }
  sendMessage(): void {
    // send message to subscribers via observable subject
    this.messageService.sendMessage('Message from Home Component to App Component!');
}

clearMessage(): void {
    // clear message
    this.messageService.clearMessage();
}
onClick() { this.sendMessage();
}
}
