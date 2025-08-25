import { Component } from '@angular/core';

@Component({
  selector: 'app-sever-status',
  standalone: true,
  imports: [],
  templateUrl: './sever-status.component.html',
  styleUrl: './sever-status.component.css',
})
export class SeverStatusComponent {
  currentStatus: 'online' | 'offline' | 'unknown' = 'offline';

  ngOnInit() {
    setInterval(() => {
      const rnd = Math.random();

      if (rnd < 0.5) {
        this.currentStatus = 'online';
      } else if (rnd < 0.9) {
        this.currentStatus = 'offline';
      } else if (rnd < 0.9) {
        this.currentStatus = 'unknown';
      }
    }, 5000);
  }
}
