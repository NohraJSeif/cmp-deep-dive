import { Component } from '@angular/core';

import { SeverStatusComponent } from './sever-status/sever-status.component';
import { TrafficComponent } from './traffic/traffic.component';
import { TicketsComponent } from './tickets/tickets.component';
import { DashboardItemComponent } from './dashboard-item/dashboard-item.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    DashboardItemComponent,
    SeverStatusComponent,
    TrafficComponent,
    TicketsComponent,
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent {}
