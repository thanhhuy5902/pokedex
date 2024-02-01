import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  TuiAlertModule,
  TuiButtonModule,
  TuiDialogModule,
  TuiNotificationModule,
} from '@taiga-ui/core';
import { NavbarComponent } from '../app/components/navbar/navbar.component';
import { RouterOutlet } from '@angular/router';

@NgModule({
  declarations: [],
  imports: [CommonModule, NavbarComponent, RouterOutlet],
  exports: [NavbarComponent, RouterOutlet],
})
export class SharedModule {}
