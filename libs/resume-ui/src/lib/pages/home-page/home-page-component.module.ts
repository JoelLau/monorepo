import { NgModule } from '@angular/core';
import { HomePageRoutingModule } from './home-page-routing.module';
import { HomePageComponent } from './home-page.component';

@NgModule({
  declarations: [HomePageComponent],
  exports: [HomePageComponent],
  imports: [HomePageRoutingModule],
})
export class HomePageComponentModule {}