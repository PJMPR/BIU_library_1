import {Routes} from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';
import { BooklistComponent } from './booklist/booklist.component';
import { HeaderComponent } from './header/header.component';
import { RightMenuComponent } from './right-menu/right-menu.component';
import { SearchComponent } from './search/search.component';

export var appRoutes:Routes=[
    {
        path:'home',
        component: MainPageComponent
    },
    {
        path:'',
        component: MainPageComponent
    },
    {
        path:'booklist',
        component: BooklistComponent
    },
    {
        path:'header',
        component: HeaderComponent
    },
    {
        path:'rightmenu',
        component: RightMenuComponent
    },
    {
        path:'advancedsearch',
        component: SearchComponent
    }
]