import { Routes } from '@angular/router';
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
import { TabsComponent } from './book-components/tabs/tabs.component';
import { DescriptionComponent } from './book-components/description/description.component';
import { SimilarBooksComponent } from './book-components/similar-books/similar-books.component';
import { CartComponent } from './common-components/cart/cart.component';
import { InboxComponent } from './user-components/inbox/inbox.component';
import { CategoriesService } from './common-components/category-menu/categories.service';

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
                path: 'inbox',
                component: InboxComponent
            },
            {
                path: 'cart',
                component: CartComponent
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

]