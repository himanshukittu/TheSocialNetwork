import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import {MatToolbarModule, MatToolbar} from '@angular/material/toolbar';
import {MatDividerModule, MatMenuModule, MatExpansionModule, MatButtonModule, MatIcon, MatIconModule, MatBadgeModule, MatChipsModule} from '@angular/material';
import { SignInUpComponent } from './sign-in-up/sign-in-up.component';

@NgModule({
  declarations: [HeaderComponent, SignInUpComponent],
  imports: [
    CommonModule, MatChipsModule, MatToolbarModule, MatDividerModule, MatMenuModule, MatExpansionModule, MatButtonModule, MatIconModule, MatBadgeModule
  ],
  providers:[MatToolbar],
  exports:[HeaderComponent]
})
export class SharedModule { }
