import { Component } from '@angular/core';

import { JwtService } from 'src/app/core/shared-services/jwt.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  constructor(public jwtService: JwtService) {
    console.log(this.jwtService.isTokenExpired());
  }
}
