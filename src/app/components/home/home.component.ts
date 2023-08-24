import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { InstagramToolsComponent } from '../tools/instagram-tools/instagram-tools.component';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent {
  constructor(
    private router: Router,
    private route: ActivatedRoute) {}

    ngOnInit(): void {
      this.route.queryParams.subscribe(params => {
        // Check if a specific query parameter is present
        if (params['code']) {
          this.router.navigate(['instagram-tools'], {
            relativeTo: this.route,
            queryParams: { code: params['code']},
            queryParamsHandling: 'merge',
          });
        }
      });
    }
}
