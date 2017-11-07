import { Routes } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';
import { BooklistComponent } from './booklist/booklist.component';
import { HeaderComponent } from './header/header.component';
import { CategoryMenuComponent } from './category-menu/category-menu.component';
import { SearchComponent } from './search/search.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { BookDetailsComponent } from './book-details/book-details.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { AddBookComponent } from './add-book/add-book.component';
import { PersonalDataComponent } from './personal-data/personal-data.component';
import { ContentListComponent } from './content-list/content-list.component';
import { SimilarBooksComponent } from './similar-books/similar-books.component';
import { DescriptionComponent } from './description/description.component';
import { CartComponent } from './cart/cart.component';

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
                path:'advancedsearch',
                component: SearchComponent
            },
            {
                path:'booklist',
                component: BooklistComponent
            },
            {
                path: 'login',
                component: LoginComponent
            },
            {
                path: 'register',
                component: RegisterComponent
            },
            {
                path: 'book/add',
                component: AddBookComponent
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
                path: 'personaldata',
                component: PersonalDataComponent
            },
            {
                path: 'book/content',
                component: ContentListComponent
        
            },
            {
                path:'books/:bookid',
                component:BookDetailsComponent,
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
        path: '',
        redirectTo:'/home',
        pathMatch:'full'
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
        path: 'header',
        component: HeaderComponent
    },
    {
        path: 'cart',
        component: CartComponent
    },

]