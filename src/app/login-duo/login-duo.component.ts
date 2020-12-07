import { Component, OnInit } from '@angular/core';

declare var Duo: any;

@Component({
  selector: 'app-login-duo',
  templateUrl: './login-duo.component.html',
  styleUrls: ['./login-duo.component.css']
})
export class LoginDuoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    var el = document.createElement('script');
    el.onload = () => {

      Duo.init({
        iframe: "duo_iframe",
        host: "api-0c827f40.duosecurity.com",
        sig_request: "TX|YWJ1enppfERJQzlSNUREQVNNMERSVjJUR0VSfDE2MDczMjkxNjQ=|7666362d0f6d39b71e611dac12b169321ac72d78:APP|YWJ1enppfERJQzlSNUREQVNNMERSVjJUR0VSfDE2MDczMzI0NjQ=|c25c7ae295bd741857da74ff23f1fa27695a322b",
        submit_callback: (data:any) => {
          var elem = document.getElementsByName('sig_response');
          var sig_response = elem[0].getAttribute('value');
          console.log(sig_response);
          if (sig_response) alert("sig_response received: "+sig_response);
        }
      });

    };
    el.src = "https://api.duosecurity.com/frame/hosted/Duo-Web-v2.js";
    document.getElementsByTagName('head')[0].append(el);

  }

}
