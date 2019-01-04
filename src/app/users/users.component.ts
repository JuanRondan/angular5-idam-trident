import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

import { AppUserRolesPaging } from '@pa-util/trident-rolemanagement/types/app-user-roles-paging';
import { AppRoles } from '@pa-util/trident-rolemanagement/types/app-roles';

import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  
  users: AppUserRolesPaging;
  roles: AppRoles;
  users$: Observable<string>;

  constructor( private route: ActivatedRoute,
               private usersService: UsersService ) { }

  ngOnInit() {
    this.users = this.route.snapshot.data.resolvedUsers;
    this.roles = this.route.snapshot.data.resolvedRoles;
    this.users$ = this.usersService.getUsers();
  }
}
