import { Component } from '@angular/core';

import { HeaderComponent } from './header/header.component';
import { DashboardItemComponent } from './dashboard/dashboard-item/dashboard-item.component';
import { SeverStatusComponent } from './dashboard/sever-status/sever-status.component';
import { TrafficComponent } from './dashboard/traffic/traffic.component';
import { TicketsComponent } from './dashboard/tickets/tickets.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HeaderComponent,
    DashboardItemComponent,
    SeverStatusComponent,
    TrafficComponent,
    TicketsComponent,
  ],
  templateUrl: './app.component.html',
})
export class AppComponent {}
