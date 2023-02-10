import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HomePageComponentModule } from './pages/home-page/home-page-component.module';

@NgModule({
  imports: [
    // Angular
    CommonModule,

    // Custom
    HomePageComponentModule,
  ],
  exports: [HomePageComponentModule],
})
export class ResumeUiModule {}
