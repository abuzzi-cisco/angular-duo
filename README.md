# HOW-TO: embedding Cisco DUO into angular

This repo shows a possible way to include Cisco DUO into angular's component.

Key elements are:
- Cisco DUO library loaded dynamically in component's
- Get sign_response programmatically

## Test this project on your machine

Follow these instructions:

```
git clone https://github.com/abuzzi-cisco/angular-duo.git
cd angular-duo
npm install
ng serve
```

Please remember to fill valid host & sig_request within the Duo.init initialization.<br>
These can be found inside src/app/login-duo/login-duo.component.ts file

        host: "api-0c827f40.duosecurity.com",
        sig_request: "TX|YWJXXXX....",

The sign_request should come from API toward backend.


## Final results

This project outcome will allow you to embed Cisco DUO inside angular's component:<br>

<img src="https://github.com/abuzzi-cisco/angular-duo/blob/master/cisco_duo_1of3.png" width="500"><br>
<img src="https://github.com/abuzzi-cisco/angular-duo/blob/master/cisco_duo_2of3.png" width="500"><br>

Please note you will get an Access denied message due to invalid sig_request:<br>

<img src="https://github.com/abuzzi-cisco/angular-duo/blob/master/cisco_duo_3of3.png" width="500"><br>
