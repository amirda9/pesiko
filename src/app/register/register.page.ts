import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { RegisterGQL, RegisterMutation, Req_OtpGQL } from 'src/generated/graphql';
import { USERNAME } from '../constants';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  constructor(private router:Router,private registerGQL:RegisterGQL ,private loadingcontroller:LoadingController,private req_otp:Req_OtpGQL) { }

  phone_no :string;
  pass :string ; 
  pass_rep :string;
  is_TextFieldType:boolean=false;
  ngOnInit() {
  }

  register: RegisterMutation;

  togglePasswordFieldType(){
    this.is_TextFieldType = !this.is_TextFieldType;
  }

  async confirm(){
      if(this.pass == this.pass_rep){
      const loading = await this.loadingcontroller.create({
        message: 'در حال بارگزاری ...'
        });
        loading.present();
        this.registerGQL.mutate({
          username:this.phone_no,
          password:this.pass
          
        }).subscribe(next=>
          {
            if(next.data !=null){
              localStorage.setItem(USERNAME,this.phone_no)
              this.req_otp.mutate({
                username:this.phone_no
              })
              loading.dismiss()
              this.router.navigate(['/verify'])
            }
            else{
              console.log("error")
            }
          }
        );
        }
    
  }

  hasAccount(){
    this.router.navigate(['/login'])
  }

  
  
  // ionViewWillEnter() {
  //   let tabs = document.querySelectorAll('.tabbar');
  //   if ( tabs !== null ) {
  //     Object.keys(tabs).map((key) => {
  //       tabs[ key ].style.transform = 'translateY(56px)';
  //     });
  //   } // end if
  // }

  // ionViewDidLeave() {
  //   let tabs = document.querySelectorAll('.tabbar');
  //   if ( tabs !== null ) {
  //     Object.keys(tabs).map((key) => {
  //       tabs[ key ].style.transform = 'translateY(0)';
  //     });
  //   } // end if
  // }

}
