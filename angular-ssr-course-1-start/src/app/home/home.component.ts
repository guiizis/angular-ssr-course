import {Component, OnInit} from '@angular/core';
import {Course} from "../model/course";
import {Observable} from "rxjs";
import {CoursesService} from "../services/courses.service";
import {map, tap} from 'rxjs/operators';
import { AsyncPipe } from '@angular/common';
import { CoursesCardListComponent } from '../courses-card-list/courses-card-list.component';
import { MatTabsModule } from '@angular/material/tabs';
import { Title } from '@angular/platform-browser';

@Component({
    selector: 'home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
    imports: [MatTabsModule, CoursesCardListComponent, AsyncPipe]
})
export class HomeComponent implements OnInit {

    courses$: Observable<Course[]>;

    constructor(private coursesService: CoursesService, private titleService: Title) {

    }

    ngOnInit() {
        this.titleService.setTitle('Learn Angular with Courses and Examples- All Courses');
        this.courses$ = this.coursesService.findAllCourses()
            .pipe(
                map(Object.values)
            );
    }

}
