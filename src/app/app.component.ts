import { Component, ViewContainerRef } from '@angular/core';
import { User } from './user';
import { CompAddService } from './comp-add.service';
import { UserDashBoardComponent } from './user-dash-board/user-dash-board.component';
import { AdminDashBoardComponent } from './admin-dash-board/admin-dash-board.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title1 = 'Angular Form Example';
  title2 = 'Dynamic Component Rendering';
  roles = ['guest', 'admin'];
  user: User;
  constructor(private comAddSer: CompAddService, private viewRef: ViewContainerRef) {
     }
  submit(formData) {
    this.user = formData;
   this.comAddSer.setViewRef(this.viewRef);
   if (this.user.role === 'guest')  {
     this.viewRef.clear();
this.comAddSer.addComponent(UserDashBoardComponent);
   }   else    {
    this.viewRef.clear();
         this.comAddSer.addComponent(AdminDashBoardComponent);  }
    console.log('User Info', this.user.role);
  }
}
