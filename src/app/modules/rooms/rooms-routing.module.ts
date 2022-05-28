import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateRoomComponent } from './create-room/create-room.component';
import { JoinRoomComponent } from './join-room/join-room.component';
import { RoomsListComponent } from './rooms-list/rooms-list.component';

import { RoomsComponent } from './rooms/rooms.component';

const routes: Routes = [
  { path: '', component: RoomsComponent, children: [
    { path: '', component: RoomsListComponent },
    { path: 'join', component: JoinRoomComponent },
    { path: 'create', component: CreateRoomComponent }
  ] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RoomsRoutingModule { }
