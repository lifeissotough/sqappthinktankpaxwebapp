import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OfferComponent } from './offer.component';
import { OfferRoutingModule } from './offer-routing.module';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
@NgModule({
  imports: [
    CommonModule,
    OfferRoutingModule,
    FormsModule,
    NgbModule
  ],
  declarations: [OfferComponent]
})
export class OfferModule { }
