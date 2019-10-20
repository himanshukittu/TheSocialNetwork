import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appInputPhone]'
})
export class InputPhoneDirective {

  constructor(private el:ElementRef) { }

  @HostListener("keyup") onValueChange(){
    let element = (this.el.nativeElement.value);
    console.log(typeof(element))

   if(this.el.nativeElement.value.length>10)
    {
      this.el.nativeElement.value=this.el.nativeElement.value.slice(0,10);
    }
  }

}
