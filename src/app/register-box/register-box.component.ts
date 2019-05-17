import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register-box',
  templateUrl: './register-box.component.html',
  styleUrls: ['./register-box.component.css']
})
export class RegisterBoxComponent implements OnInit {
private selected = 'register-box';
private isRegister =true;
private isLogin;

  constructor() { }
  ngOnInit() {
  }
  switchPage(tab_id) {
    this.selected = tab_id;
    if(this.selected ===  'register-box'){
      this.isRegister = true;
      this.isLogin = false;
    }
    else{
      this.isLogin = true;
      this.isRegister = false;

    }
    console.log('in open')

  //   var i, tabcontent;
  //   // Hide all elements with class="tabcontent" by default */
  //   tabcontent = document.getElementsByClassName("tab-content");
  //   for (i = 0; i < tabcontent.length; i++) {
  //     tabcontent[i].style.display = "none";
  //   }
  //   // Show the specific tab content
  //   document.getElementById(tab_id).style.display = "block";
   }
}
