import { Injectable } from '@angular/core';
import { Router, CanActivate} from '@angular/router';

import { UserService } from '../services/user.service';

@Injectable({ providedIn: 'root' })
export class LoginRedirect implements CanActivate {
    constructor(
        private router: Router,
        private userService: UserService
    ) { }

    canActivate() {
        const user = this.userService.userValue;        

        if (user === undefined) {            
            // authorized so return true
            return true;
        }
        // not logged in so redirect to login page with the return url 
        this.router.navigate(['/']);
        return false;
    }
}