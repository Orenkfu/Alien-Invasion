import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {
  constructor(private router: Router, private route: ActivatedRoute, private userService: UserService) { }
  authenticate() {
      this.userService.loginWithGoogle().then(() => {
        this.router.navigate(['members'], { relativeTo: this.route })
      })
  }
  ngOnInit(): void {
  }

}
