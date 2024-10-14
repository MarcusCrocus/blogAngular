import { Component, EventEmitter, Input,  Output } from '@angular/core';
import { DUMMY_USERS } from '../static-data';

const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length)

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  //selectedUser = DUMMY_USERS[randomIndex]
  // //selectedtUser = signal(DUMMY_USERS[randomIndex]) //from angular 16
    @Input({required: true}) id!: string
    @Input({required: true}) avatar!: string
    @Input({required: true}) name!: string
    @Output() select = new EventEmitter()
    //select = output<string>();
    useras = DUMMY_USERS

  get imagePath() {
    return "assets/users-img/" + this.avatar
  }

  onSeclectUser(){
    this.select.emit(this.id)
  }
}
