import { Component, ViewChild, AfterViewInit } from '@angular/core';
 
import { jqxSchedulerComponent } from 'jqwidgets-ng/jqxscheduler';
 
@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})
 
export class AppComponent implements AfterViewInit {
    @ViewChild('schedulerReference', {static: false}) scheduler: jqxSchedulerComponent;
    ngAfterViewInit(): void {
        this.scheduler.ensureAppointmentVisible('id1');
    }
 
    generateAppointments(): any {
        let appointments = new Array();
        let appointment1 = {
            id: "id1",
            description: "George brings projector for presentations.",
            location: "",
            subject: "Quarterly Project Review Meeting",
            calendar: "Room 1",
            start: new Date(2016, 10, 23, 9, 0, 0),
            end: new Date(2016, 10, 23, 16, 0, 0)
        };
        let appointment2 = {
            id: "id2",
            description: "",
            location: "",
            subject: "IT Group Mtg.",
            calendar: "Room 2",
            start: new Date(2016, 10, 24, 10, 0, 0),
            end: new Date(2016, 10, 24, 15, 0, 0)
        };
        let appointment3 = {
            id: "id3",
            description: "",
            location: "",
            subject: "Course Social Media",
            calendar: "Room 3",
            start: new Date(2016, 10, 27, 11, 0, 0),
            end: new Date(2016, 10, 27, 13, 0, 0)
        };
        let appointment4 = {
            id: "id4",
            description: "",
            location: "",
            subject: "New Projects Planning",
            calendar: "Room 2",
            start: new Date(2016, 10, 23, 16, 0, 0),
            end: new Date(2016, 10, 23, 18, 0, 0)
        };
        let appointment5 = {
            id: "id5",
            description: "",
            location: "",
            subject: "Interview with James",
            calendar: "Room 1",
            start: new Date(2016, 10, 25, 15, 0, 0),
            end: new Date(2016, 10, 25, 17, 0, 0)
        };
        let appointment6 = {
            id: "id6",
            description: "",
            location: "",
            subject: "Interview with Nancy",
            calendar: "Room 4",
            start: new Date(2016, 10, 26, 14, 0, 0),
            end: new Date(2016, 10, 26, 16, 0, 0)
        };
        appointments.push(appointment1);
        appointments.push(appointment2);
        appointments.push(appointment3);
        appointments.push(appointment4);
        appointments.push(appointment5);
        appointments.push(appointment6);
        return appointments;
    };
    source: any =
    {
        dataType: "array",
        dataFields: [
            { name: 'id', type: 'string' },
            { name: 'description', type: 'string' },
            { name: 'location', type: 'string' },
            { name: 'subject', type: 'string' },
            { name: 'calendar', type: 'string' },
            { name: 'start', type: 'date' },
            { name: 'end', type: 'date' }
        ],
        id: 'id',
        localData: this.generateAppointments()
    };
    dataAdapter: any = new jqx.dataAdapter(this.source);
    date: any = new jqx.date(2016, 11, 23);
    appointmentDataFields: any =
    {
        from: "start",
        to: "end",
        id: "id",
        description: "description",
        location: "location",
        subject: "subject",
        resourceId: "calendar"
    };
    resources: any =
    {
        colorScheme: "scheme05",
        dataField: "calendar",
        source: new jqx.dataAdapter(this.source)
    };
    views: any[] =
    [
        'dayView',
        'weekView',
        'monthView'
    ];
}