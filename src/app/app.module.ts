import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { LoginPageComponent } from './login-page/login-page.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TableComponent } from './table/table.component';
import { AuthguardService } from './services/authguard.service';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import bootstrap from "bootstrap";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule, MatPaginatorModule, MatProgressSpinnerModule, 
  MatSortModule, MatTableModule, MatBottomSheetRef, MatBottomSheet, MatBottomSheetModule, MatListModule, MatFormFieldModule } from "@angular/material";
import { PopupComponent } from './table/popup/popup.component';
import { TagInputModule } from 'ngx-chips';
import { CreateProfileComponent } from './create-profile/create-profile.component';
import { ProfileUpdateComponent } from './profile-update/profile-update.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    TableComponent,
    PopupComponent,
    CreateProfileComponent,
    ProfileUpdateComponent
  ],
  imports: [
    TagInputModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule ,
    HttpModule ,
    FormsModule, ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', component: LoginPageComponent },
      { path: 'table', component: TableComponent,canActivate: [AuthguardService] },
      { path: 'profile', component: CreateProfileComponent },
      { path: 'ProfileUpdate', component: ProfileUpdateComponent },
      { path: "**", redirectTo: "" }
    ]),
    MatInputModule,
        MatTableModule,
        MatPaginatorModule,
        MatSortModule,
        MatProgressSpinnerModule,
        MatBottomSheetModule,
        MatListModule, 
        MatPaginatorModule,
        MatFormFieldModule,
        MatInputModule,
        BrowserAnimationsModule],
    exports: [
      MatBottomSheetModule,
      MatFormFieldModule,
      MatInputModule,
    ],
    entryComponents: [
      TableComponent,
      PopupComponent,
      CreateProfileComponent
    ],
  providers: [{ provide: LocationStrategy, useClass: HashLocationStrategy }],
  bootstrap: [AppComponent]
})
export class AppModule {
  
 }
