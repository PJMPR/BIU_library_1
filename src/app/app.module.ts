import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }from '@angular/forms';
import { NgIf } from '@angular/common';

import { AppComponent } from './app.component';
import { MainPageComponent } from './main-page/main-page.component';
import { BooklistComponent } from './booklist/booklist.component';
import { RightMenuComponent } from './right-menu/right-menu.component';
import { HeaderComponent } from './header/header.component';
import { BookPreviewComponent } from './book-preview/book-preview.component';
import { ContentListComponent } from './content-list/content-list.component';
import { PersonalDataComponent } from './personal-data/personal-data.component';
import { SearchComponent } from './search/search.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { AddBookComponent } from './add-book/add-book.component';
@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    HeaderComponent,
    RightMenuComponent,
    BooklistComponent,
    BookPreviewComponent,
    ContentListComponent,
    PersonalDataComponent
    SearchComponent,
    RegisterComponent,
    LoginComponent,
    ChangePasswordComponent,
    AddBookComponent

  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
