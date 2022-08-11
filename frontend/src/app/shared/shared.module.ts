import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from './button/button.module';
import { InputModule } from './input/input.module';
import { HeaderComponent } from './components/header/header.component';
import { SearchComponent } from './components/search/search.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    HeaderComponent,
    SearchComponent
  ],
  imports: [CommonModule, ButtonModule, InputModule, ReactiveFormsModule],
  exports: [ButtonModule, InputModule, HeaderComponent,SearchComponent],
})
export class SharedModule {}
