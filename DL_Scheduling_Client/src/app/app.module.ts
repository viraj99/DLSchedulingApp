import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { FlexLayoutModule } from "@angular/flex-layout";
import {MatSelectModule} from '@angular/material/select';

import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import {
  MatSnackBarModule,
  MatTableModule,
  MatFormFieldModule,
  MatRadioModule,
  MatCheckboxModule,
  MatInputModule,
  MatCardModule
} from "@angular/material";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { NgbModule, NgbTimepickerModule } from "@ng-bootstrap/ng-bootstrap";
import { MatDialogModule } from "@angular/material/dialog";
import {MatTabsModule} from '@angular/material/tabs';

import {
  MatToolbarModule,
  MatIconModule,
  MatSidenavModule,
  MatListModule
} from "@angular/material";

import { FullCalendarModule } from "@fullcalendar/angular"; // for FullCalendar!
//jqwidget
import { jqxBarGaugeModule } from "jqwidgets-ng/jqxbargauge";
import { jqxSchedulerModule } from "jqwidgets-ng/jqxscheduler";

import { MatButtonModule } from "@angular/material/button";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { StdSchedulerComponent } from "./components/std-scheduler/std-scheduler.component";
import { HomeComponent } from "./components/home/home.component";
import { TrialtableComponent } from "./components/trialtable/trialtable.component";
import { DLscheduleComponent } from "./components/dlschedule/dlschedule.component";
import { StdScheduleComponent } from "./components/std-schedule/std-schedule.component";
import { StdScheduleAddComponent } from "./components/std-schedule-add/std-schedule-add.component";
import { LoginComponent } from "./components/login/login.component";
import { DlClassAddComponent } from "./components/dl-class-add/dl-class-add.component";
import { StdRequestLeaveComponent } from "./components/std-request-leave/std-request-leave.component";
import { UserListComponent } from "./components/user-list/user-list.component";
import { UserFormComponent } from "./components/user-form/user-form.component";
import { UserService } from "./services/user.service";
import { StdUnavailabilityService } from "./services/std-unavailability.service";
import { LeaveRequestService } from "./services/leave-request.service";
import { AuthService } from "./services/auth.service";
import { AppHeaderComponent } from "./components/app-header/app-header.component";
import { WebsocketComponent } from "./components/websocket/websocket.component";
import { FullcalenderComponent } from "./components/fullcalender/fullcalender.component";

//user authentication
import { AdminComponent } from "./components/admin/admin.component";
// import { JwtInterceptor } from "./helpers/jwt.interceptor";
// import { ErrorInterceptor } from "./helpers/error.itercptor";

import { AuthGuard } from "./services/auth.guard";
import { LogoutComponent } from './components/logout/logout.component';
import { StdWorkersComponent } from './components/std-workers/std-workers.component';
import { StdWorkersAddComponent } from './components/std-workers-add/std-workers-add.component';
import { DlAssignClassComponent } from './components/dl-assign-class/dl-assign-class.component';

@NgModule({
  declarations: [
    AppComponent,
    // jqxSchedulerComponent,
    StdSchedulerComponent,
    HomeComponent,
    TrialtableComponent,
    DLscheduleComponent,
    StdScheduleComponent,
    StdScheduleAddComponent,
    LoginComponent,
    DlClassAddComponent,
    StdRequestLeaveComponent,
    UserListComponent,
    UserFormComponent,
    AppHeaderComponent,
    WebsocketComponent,
    FullcalenderComponent,
    AdminComponent,
    LogoutComponent,
    StdWorkersComponent,
    StdWorkersAddComponent,
    DlAssignClassComponent
  ],
  entryComponents: [StdScheduleAddComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatSnackBarModule,
    AppRoutingModule,
    jqxBarGaugeModule,
    jqxSchedulerModule,
    FormsModule,
    FlexLayoutModule,
    HttpClientModule,
    NgbModule,
    MatButtonModule,
    MatFormFieldModule,
    MatRadioModule,
    MatCheckboxModule,
    MatInputModule,
    NgbTimepickerModule,
    MatDialogModule,
    ReactiveFormsModule,
    MatCardModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    FullCalendarModule, // for FullCalendar!
    MatSelectModule,
    MatTabsModule
  ],
  providers: [
    
    // StdUnavailabilityService,
    // LeaveRequestService,
    AuthService,
    AuthGuard,
    UserService
    // { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    // { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
