import {Routes} from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';

export var appRoutes:Routes=[
    {
        path:'home',
        component: MainPageComponent
    },
    {
        path:'',
        component: MainPageComponent
    }
]