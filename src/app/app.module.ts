import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MainPageComponent } from './main-page/main-page.component';
import { BooklistComponent } from './booklist/booklist.component';
import { RightMenuComponent } from './right-menu/right-menu.component';
import { HeaderComponent } from './header/header.component';
import { BookPreviewComponent } from './book-preview/book-preview.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ChangePasswordComponent } from './change-password/change-password.component';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    HeaderComponent,
    RightMenuComponent,
    BooklistComponent,
    BookPreviewComponent,
    RegisterComponent,
    LoginComponent,
    ChangePasswordComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
