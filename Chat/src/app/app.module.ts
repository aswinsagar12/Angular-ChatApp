import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule} from '@angular/forms'
import { AppComponent } from './app.component';
import { ChatComponent } from './container/chat/chat.component';
import { UsernameComponent } from './components/username/username.component';

@NgModule({
  declarations: [
    AppComponent,
    ChatComponent,
    UsernameComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
