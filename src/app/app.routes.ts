import { Routes } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';
import { BooklistComponent } from './booklist/booklist.component';
import { HeaderComponent } from './header/header.component';
import { CategoryMenuComponent } from './category-menu/category-menu.component';
import { SearchComponent } from './search/search.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { BookPreviewComponent } from './book-preview/book-preview.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { AddBookComponent } from './add-book/add-book.component';
import { PersonalDataComponent } from './personal-data/personal-data.component';
import { ContentListComponent } from './content-list/content-list.component';
import { SimilarBooksComponent } from './similar-books/similar-books.component';
import { DescriptionComponent } from './description/description.component';

export var appRoutes: Routes = [
    {
        path: '',
        component: MainPageComponent,
        children:[
            {
                path:'',
                component:BooklistComponent
            },
            {
                path:'books',
                component:BooklistComponent
            },
            {
                path:'books/:bookid',
                component:BookPreviewComponent,
                children:[
                    {
                        path:'content',
                        component:ContentListComponent
                    },
                    {
                        path:'description',
                        component:DescriptionComponent
                    },
                    {
                        path:'similarBooks',
                        component:SimilarBooksComponent

                    }
                ]
            },
            {
                path:'add',
                component:AddBookComponent
            }
        ]
    },
    {
        path:'booklist',
        component: BooklistComponent
    },
    {
        path:'header',
        component: HeaderComponent,
        children:[
            {
                path:'',
                component:BooklistComponent
            },
            {
                path:'add',
                component:AddBookComponent
            }
        ]
    },
    {
        path:'categorymenu',
        component: CategoryMenuComponent
    },
    {
        path:'advancedsearch',
        component: SearchComponent
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'header',
        component: HeaderComponent
    },
    {
        path: 'register',
        component: RegisterComponent
    },
    {
        path: 'book/list',
        component: BooklistComponent
    },
    {
        path: 'login/changepassword',
        component: ChangePasswordComponent
    },
    {
        path: 'book/add',
        component: AddBookComponent
    },
    {
        path: 'personaldata',
        component: PersonalDataComponent
    },
    {
        path: 'book/content',
        component: ContentListComponent

    }


]