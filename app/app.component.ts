import { Component, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { SecurityService } from './services/SecurityService';

@Component({
    selector: 'my-app',
    directives: [ROUTER_DIRECTIVES],
    template: `<h1>Angular 2 OAuth 2 App</h1>
               {{hash}}
               <router-outlet></router-outlet>`
})

export class AppComponent implements OnInit {
    settings: any;
    hash: string;

    constructor(public securityService: SecurityService) { }

    ngOnInit() {
        if (window.location.hash) {
            this.hash = window.location.hash;
            //this.securityService.AuthorizedCallback();
        }
        else {
            // var authorizationUrl = 'https://localhost:44345/connect/authorize';
            // var client_id = 'js.ng2';
            // var redirect_uri = 'http://localhost:3000';
            // var response_type = "id_token";
            // var scope = "openid";
            // var state = Date.now() + "" + Math.random();
            // var nonce = "N" + Math.random() + "" + Date.now();

            // localStorage["state"] = state;

            // var url =
            //     authorizationUrl + "?" +
            //     "client_id=" + encodeURI(client_id) + "&" +
            //     "redirect_uri=" + encodeURI(redirect_uri) + "&" +
            //     "response_type=" + encodeURI(response_type) + "&" +
            //     "scope=" + encodeURI(scope) + "&" +
            //     "nonce=" + encodeURI(nonce) + "&" +
            //     "state=" + encodeURI(state);
            // window.location.href = url;
            this.securityService.Authorize();
        }
     }

}
