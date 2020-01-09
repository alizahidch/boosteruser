import { Routes } from '@angular/router';

import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { IconsComponent } from '../../pages/icons/icons.component';
import { MapsComponent } from '../../pages/maps/maps.component';
import { UserProfileComponent } from '../../pages/user-profile/user-profile.component';
import { TablesComponent } from '../../pages/tables/tables.component';
import {UsersComponent} from '../../pages/users/users.component';
import{OrdersComponent} from '../../pages/orders/orders.component';
import {UserspageComponent} from '../../pages/userspage/userspage.component'
import { HelpComponent } from '../../pages/help/help.component';
import { NewsComponent } from '../../pages/news/news.component';
import { WithdrawComponent } from '../../pages/withdraw/withdraw.component';
import { PurchasesComponent } from '../../pages/purchases/purchases.component';
import { DboostingComponent } from '../../pages/dboosting/dboosting.component';
import { CoachingComponent } from '../../pages/coaching/coaching.component';
import { DqueueComponent } from '../../pages/dqueue/dqueue.component';

import {OrderpageComponent} from '../../pages/orderpage/orderpage.component'
import { from } from 'rxjs';
export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard',      component: DashboardComponent },
    { path: 'user-profile',   component: UserProfileComponent },
    { path: 'tables',         component: TablesComponent },
    { path: 'icons',          component: IconsComponent },
    { path: 'maps',           component: MapsComponent },
    { path: 'user',           component: UsersComponent },
    { path: 'userpage',           component: UserspageComponent },
    { path: 'orderpage',          component: OrderpageComponent },
    { path: 'help',           component: HelpComponent },
        { path: 'news',           component: NewsComponent },
        { path: 'withdraw',           component: WithdrawComponent },
        { path: 'purchases',           component: PurchasesComponent },
        // { path: 'dboosting',           component: DboostingComponent },
        { path: 'coaching',           component: CoachingComponent },
        { path: 'dqueue',           component: DqueueComponent },

    { path: 'orders',           component: OrdersComponent },
];
