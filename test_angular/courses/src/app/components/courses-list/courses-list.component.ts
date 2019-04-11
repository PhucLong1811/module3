import { Component, OnInit, OnDestroy } from '@angular/core';
import { CourseService } from 'src/app/services/course.service';
import { Subscription } from 'rxjs';

import { Course } from 'src/app/models/courses.model';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.css']
})
export class CoursesListComponent implements OnInit {

  public subscription = Subscription;
  public courses: Course[] = [];
  constructor(public courseSerive: CourseService) { }

  ngOnInit() {
    this.courseSerive.getAllCourses().subscribe((data: Course[]) => {
      for (let item of data) {
        if (!item.status) {
          this.courses.push(item);
        }
      }
    });
  }
  onDelete(id: number) {
    this.courseSerive.deleteCourse(id).subscribe(data => {
      this.updateDataAfterdelete(id);
    });
  }
  updateDataAfterdelete(id: number) {
    for (var i = 0; i < this.courses.length; i++) {
      if (this.courses[i].id == id) {
        this.courses.splice(i, 1);
        break;
      }
    }
  }
  onCourse(course) {
    course.status = true;
    this.courseSerive.updateCourse(course).subscribe((data: Course) => {
      this.courses = this.courses.filter(t => t.id !== data.id)
    })
  }
}
  // ngOnDestroy() {
  //   if (this.subscription) {
  //     this.subscription.unsubscribe();
  //   }
  // }

