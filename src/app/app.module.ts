import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

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
import { appRoutes } from './app.routes';
import { TabsComponent } from './tabs/tabs.component';
import { DescriptionComponent } from './description/description.component';
import { SimilarBooksComponent } from './similar-books/similar-books.component';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    HeaderComponent,
    RightMenuComponent,
    BooklistComponent,
    BookPreviewComponent,
    ContentListComponent,
    PersonalDataComponent,
    SearchComponent,
    LoginComponent,
    RegisterComponent,
    ChangePasswordComponent,
    AddBookComponent,
    TabsComponent,
    DescriptionComponent,
    SimilarBooksComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
