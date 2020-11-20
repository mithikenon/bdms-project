import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { CreateNewRegComponent } from './create-new-reg/create-new-reg.component';
import { SearchDonorComponent } from './search-donor/search-donor.component';
import { ViewDetailsComponent } from './view-details/view-details.component';
import { UpdateDonorComponent } from './update-donor/update-donor.component';
import { AddRecordComponent } from './add-record/add-record.component';
import { RecordComponent } from './record/record.component';
import { AllDonorRecordComponent } from './all-donor-record/all-donor-record.component';




@NgModule({
  declarations: [
    AppComponent,
    AdminLoginComponent,
    CreateNewRegComponent,
    SearchDonorComponent,
    ViewDetailsComponent,
    UpdateDonorComponent,
    AddRecordComponent,
    RecordComponent,
    AllDonorRecordComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
