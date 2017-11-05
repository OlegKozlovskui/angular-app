import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ListErrorsComponent } from './list-errors/list-errors.component';
import { ShowAuthedDirective } from './directives/show-authed.directive';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule
  ],
  declarations: [
    ListErrorsComponent,
    ShowAuthedDirective
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    ListErrorsComponent,
    ShowAuthedDirective
  ],
})
export class SharedModule { }
