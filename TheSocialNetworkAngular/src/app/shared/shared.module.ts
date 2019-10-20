import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import {MatToolbarModule, MatToolbar} from '@angular/material/toolbar';
import {MatDividerModule, MatMenuModule, MatExpansionModule, MatButtonModule, MatIcon, MatIconModule, MatBadgeModule, MatChipsModule, MatGridListModule, MatCardModule, MatInputModule, MatCheckboxModule, MatRadioModule} from '@angular/material';
import { SignInUpComponent } from './sign-in-up/sign-in-up.component';
import { InputPhoneDirective } from './custom-directives/input-phone.directive';

@NgModule({
  declarations: [HeaderComponent, SignInUpComponent, InputPhoneDirective],
  imports: [
    CommonModule, MatCheckboxModule, MatRadioModule, MatInputModule, MatCardModule, MatGridListModule, MatChipsModule, MatToolbarModule, MatDividerModule, MatMenuModule, MatExpansionModule, MatButtonModule, MatIconModule, MatBadgeModule
  ],
  providers:[MatToolbar],
  exports:[HeaderComponent, SignInUpComponent, InputPhoneDirective]
})
export class SharedModule { }
