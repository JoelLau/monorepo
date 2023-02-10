import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HomePageComponentModule } from '@monorepo/resume-ui';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    // Angular
    BrowserModule,

    // App
    AppRoutingModule,
    HomePageComponentModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
