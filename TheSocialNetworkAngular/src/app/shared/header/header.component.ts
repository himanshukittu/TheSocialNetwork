import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  userName;
  @Input() numNotification;
  @Input() request;
  @Input() message;

  isLoggedin:boolean = false;
  placeholder:string="";

  constructor() { }

  ngOnInit() {
    if(localStorage.getItem("userInfo"))
    {
      this.isLoggedin = true;
      this.userName=localStorage.getItem("userInfo");
      let i=100;
      setInterval(()=>{
        this.placeholder=`Search within ${i} F.R.I.E.N.D.S profiles`;
        i+=9;
      },1000);
    }
  }

}
