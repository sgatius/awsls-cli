import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { MaterialModule } from './material/material.module';
import { TranslateModule } from '@ngx-translate/core';

const components = [];

@NgModule({
  declarations: components,
  imports: [CommonModule, RouterModule, FormsModule, ReactiveFormsModule, MaterialModule, TranslateModule, IonicModule],
  exports: [components, MaterialModule, TranslateModule]
})
export class SharedModule {}
