import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListGalaComponent } from './listGalaPage/list-gala.component';
import { CreateGalaComponent } from './create-gala/create-gala.component';
import { GalaRoutingModule } from './gala-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from 'src/app/shared/material/material.module';



@NgModule({
  declarations: [ListGalaComponent, CreateGalaComponent],
  imports: [
    CommonModule,
    GalaRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class GalaModule { }
