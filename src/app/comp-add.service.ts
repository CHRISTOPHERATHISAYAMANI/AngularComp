import { Injectable, ComponentFactoryResolver, ViewContainerRef } from '@angular/core';

@Injectable()
export class CompAddService {
viewRef: ViewContainerRef;
  constructor(private resolver: ComponentFactoryResolver) {
   }
   setViewRef(viewRef: ViewContainerRef) {
this.viewRef = viewRef;
  }
  addComponent(comnponentRef: any) {
   const compFactory = this.resolver.resolveComponentFactory(comnponentRef);
   this.viewRef.createComponent(compFactory);
  }
}
