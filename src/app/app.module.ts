import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { MainPageComponent } from './common-components/main-page/main-page.component';
import { BooklistComponent } from './book-components/booklist/booklist.component';
import { CategoryMenuComponent } from './common-components/category-menu/category-menu.component';
import { HeaderComponent } from './common-components/header/header.component';
import { BookDetailsComponent } from './book-components/book-details/book-details.component';
import { ContentListComponent } from './book-components/content-list/content-list.component';
import { PersonalDataComponent } from './user-components/personal-data/personal-data.component';
import { SearchComponent } from './common-components/search/search.component';
import { RegisterComponent } from './user-components/register/register.component';
import { LoginComponent } from './user-components/login/login.component';
import { ChangePasswordComponent } from './user-components/change-password/change-password.component';
import { AddBookComponent } from './book-components/add-book/add-book.component';
import { appRoutes } from './app.routes';
import { TabsComponent } from './book-components/tabs/tabs.component';
import { DescriptionComponent } from './book-components/description/description.component';
import { SimilarBooksComponent } from './book-components/similar-books/similar-books.component';
import { CartComponent } from './common-components/cart/cart.component';
import { InboxComponent } from './user-components/inbox/inbox.component';
import { CategoriesService } from './common-components/category-menu/categories.service';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    HeaderComponent,
    CategoryMenuComponent,
    BooklistComponent,
    BookDetailsComponent,
    ContentListComponent,
    PersonalDataComponent,
    SearchComponent,
    LoginComponent,
    RegisterComponent,
    ChangePasswordComponent,
    AddBookComponent,
    TabsComponent,
    DescriptionComponent,
    SimilarBooksComponent,
    CartComponent,
    InboxComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
    
  ],
  providers: [CategoriesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
