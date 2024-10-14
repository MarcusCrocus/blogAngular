import { Component } from '@angular/core';
import{ HeaderComponent} from './header/header.component'
import { UserComponent } from "./user/user.component";
import { DUMMY_USERS } from './static-data';
import { TasksComponent } from './tasks/tasks.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, UserComponent,TasksComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  users = DUMMY_USERS
  selectedUserId = 'u1'

  get selectedUser() {
    return this.users.find( user => this.selectedUserId == user.id)!
  }

  onClickUser(id: string){
    this.selectedUserId = id
  }

}
