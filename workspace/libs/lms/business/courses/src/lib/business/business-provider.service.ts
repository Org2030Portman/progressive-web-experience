import { Injectable, Inject } from '@angular/core';
import { BusinessProviderBase, ApiResponse } from '@angularlicious/foundation';
import { LoggingService } from '@angularlicious/logging';
import { Observable } from 'rxjs';
import { RetrieveLatestCoursesAction } from './actions/retrieve-latest-courses.action';
import { FirestoreCourseRepositoryService } from './firestore-course-repository.service';
import { Course } from '@angularlicious/lms-common';
import { RetrieveCourseVideosAction } from './actions/retrieve-course-videos.action';

/**
 * This is the coordinator of business operations for the core domain module. It will
 * compose business operations using one or more [Business Actions].
 */
@Injectable()
export class BusinessProviderService extends BusinessProviderBase {
  constructor(@Inject(FirestoreCourseRepositoryService) public apiService: FirestoreCourseRepositoryService, loggingService: LoggingService) {
    super('LmsBusinessCoursesModule', loggingService);
  }

  /**
   * Use to retrieve the current/latest video courses.
   */
  retrieveLatestCourses<T>(): Observable<T> {
    const action = new RetrieveLatestCoursesAction<T>();
    action.Do(this);
    return action.response;
  }

  retrieveCourseVideos<T>(course: Course): Observable<T> {
    const action = new RetrieveCourseVideosAction<T>(course);
    action.Do(this);
    return action.response;
  }
}
