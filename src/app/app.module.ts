import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { DataComComponent } from './data-com/data-com.component';
import { DataComRecComponent } from './data-com-rec/data-com-rec.component';
import { MessageService } from './message.service';
import { UserDashBoardComponent } from './user-dash-board/user-dash-board.component';
import { AdminDashBoardComponent } from './admin-dash-board/admin-dash-board.component';
import { CompAddService } from './comp-add.service';
import { ModelDrivenFormComponent } from './model-driven-form/model-driven-form.component';
import { ModelDrivenService } from './modelDrivenForm/model-driven.service';

import {  HttpModule } from '@angular/http';

import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', component: ModelDrivenFormComponent, pathMatch: 'full'},
  {path: 'admin', component: AdminDashBoardComponent},
  {path: 'user', component: UserDashBoardComponent},
  {path: '**', redirectTo: 'user'} ];
@NgModule({
  declarations: [
    AppComponent,
    DataComComponent,
    DataComRecComponent,
    UserDashBoardComponent,
    AdminDashBoardComponent,
    ModelDrivenFormComponent
  ],
  imports: [
    BrowserModule, FormsModule, ReactiveFormsModule,  HttpModule, RouterModule.forRoot(routes)
  ],
  providers: [MessageService, CompAddService, ModelDrivenService],
  bootstrap: [AppComponent],
  entryComponents: [UserDashBoardComponent, AdminDashBoardComponent]
},
)
export class AppModule { }
