import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { AppRoles } from '@pa-util/trident-rolemanagement/types/app-roles';

@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.css']
})
export class RolesComponent implements OnInit {

  resolvedRoles: AppRoles;

  constructor( private route: ActivatedRoute ) {}

  ngOnInit() {
    this.resolvedRoles = this.route.snapshot.data.resolvedRoles;
  }

}
