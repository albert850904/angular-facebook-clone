import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './Components/login/login.component';
import { RegisterComponent } from './Components/register/register.component';

import { HomeModule } from './Components/home/home.module';
import { MaterialModule } from './Shared/material.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent, LoginComponent, RegisterComponent],
  imports: [BrowserModule, BrowserAnimationsModule, AppRoutingModule, HomeModule, MaterialModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
