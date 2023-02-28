import { NgModule } from '@angular/core';
import { HomePageRoutingModule } from './home-page-routing.module';
import { HomePageComponent } from './home-page.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [HomePageComponent],
  exports: [HomePageComponent],
  imports: [
    // Routing
    HomePageRoutingModule,

    // Third Party
    FontAwesomeModule,
  ],
})
export class HomePageComponentModule {}
