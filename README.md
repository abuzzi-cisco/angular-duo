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

Please remember to fill valid host & sig_request within the Duo.init initialization.

        host: "XXXXXXXXX.duosecurity.com",
        sig_request: "XXXXXXXXXXXX",

The sign_request should come from API toward backend.


## Final results

This project outcome will allow you to embed Cisco DUO inside angular's component:

<img src="https://github.com/abuzzi-cisco/angular-duo/blob/master/cisco_duo_1of2.png" width="500">
<img src="https://github.com/abuzzi-cisco/angular-duo/blob/master/cisco_duo_2of2.png" width="500">
