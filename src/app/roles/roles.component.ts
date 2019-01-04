import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { AppRoles } from '@pa-util/trident-rolemanagement/types/app-roles';

@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.css']
})
export class RolesComponent implements OnInit {

  resolvedroles: AppRoles;

  constructor( private route: ActivatedRoute ) {}

  ngOnInit() {
    this.resolvedroles = this.route.snapshot.data.resolvedroles;
  }

}
