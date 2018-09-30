import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfirmationComponent } from './confirmation.component';
import { ConfirmationRoutingModule } from './confirmation-routing.module';

@NgModule({
  imports: [
    CommonModule,
    ConfirmationRoutingModule
  ],
  declarations: [ConfirmationComponent]
})
export class ConfirmationModule { }
