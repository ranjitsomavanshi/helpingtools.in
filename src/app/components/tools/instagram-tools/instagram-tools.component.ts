import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import axios from 'axios';
import { InstagramService } from './instagram.service';

@Component({
  selector: 'app-instagram-login',
  template: `
    <button (click)="loginWithInstagram()">Login with Instagram</button>
  `,
})
export class InstagramToolsComponent {
  private clientId: string = '831875128255954';
  private clientSecret: string = '17c43c14a4faae9510cb959e40afa473';
  private redirectUri: string = 'https://helpingtools.in/'
  private responseType: string = 'code';

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private _instagramservice: InstagramService) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      const code = params['code'];
      if (code) {
        console.log('insta code: ', code);
        
        this.exchangeCodeForToken(code);
      }
    });
  }

  private exchangeCodeForToken(code: string): void {
    const tokenUrl = `https://api.instagram.com/oauth/access_token`;
    
    axios
      .post(tokenUrl, null, {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        params: {
          client_id: this.clientId,
          client_secret: this.clientSecret,
          grant_type: 'authorization_code',
          redirect_uri: this.redirectUri,
          code: code,
        },
      })
      .then((response) => {
        const accessToken = response.data.access_token;
        this._instagramservice.setAccessToken(accessToken);
        // Use the obtained accessToken for API requests
      })
      .catch((error) => {
        console.error('Error exchanging code for access token:', error);
      });
  }


  loginWithInstagram(): void {
    const authUrl = `https://api.instagram.com/oauth/authorize?client_id=${this.clientId}&redirect_uri=${this.redirectUri}&response_type=${this.responseType}&scope=user_profile,user_media`;
    window.location.href = authUrl;
  }
}

