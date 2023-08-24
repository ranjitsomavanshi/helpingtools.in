import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root',
})
export class InstagramService {
  private accessToken: string = ''; // Obtain this through authentication

  constructor() {}
  setAccessToken(accessToken: string){
     this.accessToken = accessToken;
  }
  async fetchFollowers(userId: string): Promise<string[]> {
    const response = await axios.get(
      `https://graph.instagram.com/${userId}/followers?access_token=${this.accessToken}`
    );

    const followers: string[] = response.data.data.map((follower: any) => follower.username);
    return followers;
  }

  async fetchUnfollowers(previousFollowers: string[], currentFollowers: string[]): Promise<string[]> {
    const unfollowers: string[] = previousFollowers.filter(
      (follower) => !currentFollowers.includes(follower)
    );

    return unfollowers;
  }
}
