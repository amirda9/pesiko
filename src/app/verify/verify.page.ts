import { Component, Directive, OnInit , HostListener, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { timer } from 'rxjs';
import { Subscription } from 'rxjs';
import { Verify_UserGQL } from 'src/generated/graphql';
import { USERNAME } from '../constants';

@Directive({
  selector: '[moveNextByMaxLength]'
  })
  
@Component({
  selector: 'app-verify',
  templateUrl: './verify.page.html',
  styleUrls: ['./verify.page.scss'],
})
export class VerifyPage implements OnInit {

  time:any;
  username:string;
  duration:any=10;
  time_left:boolean=true;
  sent:boolean=false;
  source = timer(1000, 1000);
  subscription: Subscription;
  valid:boolean=false;
  pass1: string;
  pass2: string;
  pass3: string;
  pass4: string;
  pass5: string;
  constructor(private router:Router ,private _el: ElementRef , private verify_userGQL : Verify_UserGQL) {
    this.username = localStorage.getItem(USERNAME);

  }





  ngOnInit() {
    this.observableTimer();
    // var el: HTMLElement = document.getElementById('form');
    // el.className="valid";
  }


  ngOnDestroy(){

  }


  @HostListener('keyup', ['$event']) onKeyDown(e: any) {
    var el: HTMLElement = document.getElementById('form');
    el.className="valid";
    if(!this.time_left){
      this.sent=false;
    }
    if (0 === e.srcElement.value.length) {
      // console.log("manam");
      e.preventDefault();

          let prevControl: any = e.srcElement.previousElementSibling;

          while (true)
          {
              if (prevControl)
              {
                  prevControl.focus();
                  return;
              }
              else{
                return
              }
          }
      }

    if (e.srcElement.maxLength === e.srcElement.value.length ) {

        e.preventDefault();

        let nextControl: any = e.srcElement.nextElementSibling;
       // Searching for next similar control to set it focus
        while (true)
        {
            if (nextControl)
            {
                if (nextControl.type === e.srcElement.type)
                {
                    nextControl.focus();
                    return;
                }
                else
                {
                    nextControl = nextControl.nextElementSibling;
                }
            }
            else
            {
              if(!this.sent){
                this.sent = true;
                this.send()
              }
              else{
                return;
              }
            }
        }
    }
}


observableTimer() {

    this.subscription = this.source.subscribe(val => {
      if(val<this.duration){
        this.time = this.duration - val;
      }
      if(val == this.duration){
        // console.log("reached")
        this.time_left = false;
        // this.TryAgain()
      }
      // console.log(this.time)
    });
  }


  ionViewWillLeave(){
    // console.log("1");
    this.time_left=true;
    this.sent =  false;
    this.subscription.unsubscribe;
    this.time = this.duration;
  }
  TryAgain(){
    // console.log("SENT");
    this.time_left=true;
    this.sent =  false;
    this.subscription.unsubscribe;
    this.time = this.duration;
    this.observableTimer();


  }

  reset_time(){
    this.time_left=true;
    this.subscription.unsubscribe;
    this.time = this.duration;
    this.observableTimer();
  }

  ResCheck(){
    let a = JSON.stringify(this.pass1);
    let b = JSON.stringify(this.pass2);
    let c = JSON.stringify(this.pass3);
    let d = JSON.stringify(this.pass4);
    let e = JSON.stringify(this.pass5);
    let f = a+b+c+d+e;
    this.verify_userGQL.mutate({
      otp:f,
      username:this.username,
    }
    ).subscribe(
      next=>
      {
        console.log(next.data.verifyUser.status)
        if(next.data.verifyUser.status=="success")
        {
          this.valid = true;
          this.router.navigate(['/tabs/tab1'])
        }
        // if(next.data.verifyUser.status=="failed")
        else
        {
          this.valid = false;
          var el: HTMLElement = document.getElementById('form');
          el.className = "not_valid";
          el.classList.remove('valid');
      }
    }
    );
  }

  send(){
    console.log("validation check")
    this.ResCheck();







      // this.subscription.unsubscribe;
      // this.time = this.duration;
      // this.time_left=true;
      // this.ngOnInit();
    }
  }

