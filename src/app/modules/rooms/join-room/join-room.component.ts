import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { RoomService } from '../room.service';

@Component({
  selector: 'dw-join-room',
  templateUrl: './join-room.component.html',
  styleUrls: ['./join-room.component.scss']
})
export class JoinRoomComponent implements OnInit {

  code: string = '';

  constructor(private roomService: RoomService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
  }

  joinRoom() {
    this.roomService.joinRoom(this.code).subscribe({
      next: response => {
        this.router.navigate(['..'], {
          relativeTo: this.activatedRoute
        }); // rooms
      },
      error: err => {}
    });
  }

}
