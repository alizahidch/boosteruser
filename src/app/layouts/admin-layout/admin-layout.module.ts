import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ClipboardModule } from 'ngx-clipboard';

import { AdminLayoutRoutes } from './admin-layout.routing';
import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { IconsComponent } from '../../pages/icons/icons.component';
import { MapsComponent } from '../../pages/maps/maps.component';
import { UserProfileComponent } from '../../pages/user-profile/user-profile.component';
import {UsersComponent} from '../../pages/users/users.component';
import {OrdersComponent} from '../../pages/orders/orders.component';
import {ChatComponent} from '../../pages/chat/chat.component';
import {UserspageComponent} from '../../pages/userspage/userspage.component'
import {OrderpageComponent} from '../../pages/orderpage/orderpage.component'

import { TablesComponent } from '../../pages/tables/tables.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {NgxPaginationModule} from 'ngx-pagination';
import { HelpComponent } from '../../pages/help/help.component';
import { NewsComponent } from '../../pages/news/news.component';
import { WithdrawComponent } from '../../pages/withdraw/withdraw.component';
import { PurchasesComponent } from '../../pages/purchases/purchases.component';
import { DboostingComponent } from '../../pages/dboosting/dboosting.component';
import { CoachingComponent } from '../../pages/coaching/coaching.component';
import { DqueueComponent } from '../../pages/dqueue/dqueue.component';

// import { ToastrModule } from 'ngx-toastr';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    HttpClientModule,
    NgxPaginationModule,
    NgbModule,
    ClipboardModule
  ],
  declarations: [
    DashboardComponent,
    UserProfileComponent,
    TablesComponent,
    IconsComponent,
    UsersComponent,
    OrdersComponent,
    UserspageComponent,
    ChatComponent,
    OrderpageComponent,
    MapsComponent,
    HelpComponent,
    NewsComponent,
    WithdrawComponent,
    PurchasesComponent,
    CoachingComponent,
    DqueueComponent
  ]
})

export class AdminLayoutModule {}
