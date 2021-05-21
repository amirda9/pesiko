import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pay-res',
  templateUrl: './pay-res.page.html',
  styleUrls: ['./pay-res.page.scss'],
})
export class PayResPage implements OnInit {

  status:boolean;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      if (params) {
        let res = params.status;
        console.log(res);
        if(res=="True")
        {
          this.status=true;
          console.log("success");
        }
        else{
          this.status=false;
        }
      }

      // console.log(params)
    });

  // var countdownNumberEl = document.getElementById('countdown-number');
  // var countdown = 10;
  
  // countdownNumberEl.textContent = countdown;
  
  // setInterval(function() {
  //   countdown = --countdown <= 0 ? 10 : countdown;
  
  //   countdownNumberEl.textContent = countdown;
  // }, 1000);
  }

}
