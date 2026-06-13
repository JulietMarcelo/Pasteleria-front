import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MenuCompletoComponent } from './menu-completo.component';

@NgModule({
  imports: [CommonModule, MenuCompletoComponent, RouterModule.forChild([{ path: '', component: MenuCompletoComponent }])]
})
export class MenuCompletoModule {}
