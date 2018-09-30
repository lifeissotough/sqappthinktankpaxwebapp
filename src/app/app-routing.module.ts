
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
        { path: '', loadChildren: './offer/offer.module#OfferModule' },
        { path: 'confirmation',loadChildren:'./confirmation/confirmation.module#ConfirmationModule'},
        { path: 'thankyou',loadChildren:'./thankyou/thankyou.module#ThankyouModule'}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
