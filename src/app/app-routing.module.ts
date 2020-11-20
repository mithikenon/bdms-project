import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AllDonorRecordComponent } from './all-donor-record/all-donor-record.component';
import { CreateNewRegComponent } from './create-new-reg/create-new-reg.component';
import { SearchDonorComponent } from './search-donor/search-donor.component';


const routes: Routes = [
  {
    path: '', redirectTo: '/Login', pathMatch: 'full'},
    {path: 'Admin-login', component : AdminLoginComponent },
    {path: 'all-donor-record', component : AllDonorRecordComponent },
    {path: 'registration', component : CreateNewRegComponent},
    {path: 'search-bloodtype', component : SearchDonorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {AdminLoginComponent;  AllDonorRecordComponent; CreateNewRegComponent; SearchDonorComponent; }
