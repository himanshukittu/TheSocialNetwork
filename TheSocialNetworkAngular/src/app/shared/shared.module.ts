import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import {MatToolbarModule, MatToolbar} from '@angular/material/toolbar';
import {MatDividerModule, MatMenuModule, MatExpansionModule, MatButtonModule, MatIcon, MatIconModule, MatBadgeModule} from '@angular/material';

@NgModule({
  declarations: [HeaderComponent],
  imports: [
    CommonModule,MatToolbarModule, MatDividerModule, MatMenuModule, MatExpansionModule, MatButtonModule, MatIconModule, MatBadgeModule
  ],
  providers:[MatToolbar],
  exports:[HeaderComponent]
})
export class SharedModule { }
