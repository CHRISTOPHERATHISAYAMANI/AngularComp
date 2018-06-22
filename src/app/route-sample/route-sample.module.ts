import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Route, Router, Routes} from '@angular/router';

import { RouteSampleRoutingModule } from './route-sample-routing.module';


@NgModule({
  imports: [
    CommonModule,
    RouteSampleRoutingModule
  ],
  declarations: []
})
export class RouteSampleModule { }
