import { Component, OnInit } from '@angular/core';
import { USERNAME, AUTHTOKEN, REFRESHTOKEN } from '../constants';
import { LoginGQL,LoginMutation } from '../../../src/generated/graphql';
import { AlertController, LoadingController, NavController } from '@ionic/angular';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  login_bool:boolean=false;
  id :string ;
  pass :string;
  token:any;
  username:any;
  login: LoginMutation['tokenAuth'];
  is_TextFieldType:boolean=false;
  constructor(public navCtrl: NavController,private alertcontroller:AlertController ,private authService: AuthService, private loginGQL:LoginGQL , private router:Router,public loadingcontroller:LoadingController) { 
    
  }

  ngOnInit() {
    // console.log(this.id);
  }

  async confirm(){
    const loading = await this.loadingcontroller.create({
      message: 'در حال بارگزاری ...'
      });
      loading.present();
      this.loginGQL.mutate({
        username:this.id,
        password:this.pass
  
      }).subscribe(next=>
        {
          if(next.data.tokenAuth.token !=null){
            this.login_bool = true;
            this.token = next.data.tokenAuth.token;
            let a = next.data.tokenAuth.payload;
            let b = JSON.stringify(a);
            let c = JSON.parse(b);
            this.username = c.username ;
            this.authService.saveUserData(this.username,this.token);
            // console.log(localStorage.getItem('AUTHTOKEN'));
            loading.dismiss()
            this.router.navigate(['/tabs/tab3']);
            // console.log(this.username)
          }
        },
        async errors=>{
          const alert = await this.alertcontroller.create({
            cssClass: 'my-custom-class',
            // header: 'Alert',
            // subHeader: 'Subtitle',
            message: '.نام کاربری یا رمز عبور شما صحیح نمی باشد',
            buttons: [{text:'تلاش مجدد',cssClass:'logout_btn'}]
          });
          loading.dismiss();
          await alert.present();
  
        }
      );
    }
  
    MakeAccount(){
      this.router.navigate(['/register']);
    }
  
  
    togglePasswordFieldType(){
      this.is_TextFieldType = ! this.is_TextFieldType;
      console.log(this.id,this.pass);
    }
}


