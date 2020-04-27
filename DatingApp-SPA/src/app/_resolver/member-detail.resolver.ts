import { Injectable } from '@angular/core';
import { Resolve, Router, ActivatedRouteSnapshot } from '@angular/router';
import { UserService } from '../_services/user.service';
import { AlertifyService } from '../_services/alertify.service';
import { User } from '../_model/user';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class MemberDetailsResolver implements Resolve<User> {
    constructor(private userService: UserService, 
                private router: Router, private alerttify: AlertifyService) {}

    resolve(route: ActivatedRouteSnapshot): Observable<User> {
        return this.userService.getUser(route.params.id).pipe(
            catchError(error => {
                this.alerttify.error('Problem retrieving data');
                this.router.navigate(['/members']);
                return of(null);
            })
        )
    }
}