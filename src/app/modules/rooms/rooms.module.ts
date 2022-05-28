import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RoomsRoutingModule } from './rooms-routing.module';
import { RoomsComponent } from './rooms/rooms.component';
import { RoomsListComponent } from './rooms-list/rooms-list.component';
import { JoinRoomComponent } from './join-room/join-room.component';
import { CreateRoomComponent } from './create-room/create-room.component';
import { MaterialModule } from '../material/material.module';
import { FormsModule } from '@angular/forms';
import { DataListModule } from '../data-list/data-list.module';


@NgModule({
  declarations: [
    RoomsComponent,
    RoomsListComponent,
    JoinRoomComponent,
    CreateRoomComponent
  ],
  imports: [
    CommonModule,
    RoomsRoutingModule,
    MaterialModule,
    FormsModule,
    DataListModule
  ]
})
export class RoomsModule { }
