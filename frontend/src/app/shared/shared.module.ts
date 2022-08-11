import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from './button/button.module';
import { InputModule } from './input/input.module';

@NgModule({
  declarations: [],
  imports: [CommonModule, ButtonModule, InputModule],
  exports: [ButtonModule, InputModule],
})
export class SharedModule {}
