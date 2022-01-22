/**
 *
 *
  _____                      _              _ _ _     _   _     _        __ _ _
 |  __ \                    | |            | (_) |   | | | |   (_)      / _(_) |
 | |  | | ___    _ __   ___ | |_    ___  __| |_| |_  | |_| |__  _ ___  | |_ _| | ___
 | |  | |/ _ \  | '_ \ / _ \| __|  / _ \/ _` | | __| | __| '_ \| / __| |  _| | |/ _ \
 | |__| | (_) | | | | | (_) | |_  |  __/ (_| | | |_  | |_| | | | \__ \ | | | | |  __/
 |_____/ \___/  |_| |_|\___/ \__|  \___|\__,_|_|\__|  \__|_| |_|_|___/ |_| |_|_|\___|

 * DO NOT EDIT THIS FILE!!
 *
 *  FOR CUSTOMIZE examBaseService PLEASE EDIT ../exam.service.ts
 *
 *  -- THIS FILE WILL BE OVERWRITTEN ON THE NEXT SKAFFOLDER'S CODE GENERATION --
 *
 */
 // DEPENDENCIES
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

// CONFIG
import { environment } from '../../../environments/environment';

// MODEL
import { Exam } from '../../domain/school_db/exam';

/**
 * THIS SERVICE MAKE HTTP REQUEST TO SERVER, FOR CUSTOMIZE IT EDIT ../exam.service.ts
 */

/*
 * SCHEMA DB exam
 *
	{
		place: {
			type: 'String'
		},
		score: {
			type: 'Number'
		},
		valid: {
			type: 'Boolean'
		},
		//RELATIONS
		//EXTERNAL RELATIONS
		_course: {
			type: Schema.ObjectId,
			ref : "exam"
		},
		_teacher: {
			type: Schema.ObjectId,
			ref : "exam"
		},
		student: {
			type: Schema.ObjectId,
			ref : "exam"
		},
	}
 *
 */
@Injectable()
export class ExamBaseService {

    contextUrl: string = environment.endpoint + '/exam';
    constructor(
        protected http: HttpClient
        ) { }

    // CRUD METHODS

    /**
    * examService.create
    *   @description CRUD ACTION create
    *
    */
    create(item: Exam): Observable<Exam> {
        return this.http
            .post<Exam>(this.contextUrl, item)
            .pipe(map(data => data));
    }

    /**
    * examService.delete
    *   @description CRUD ACTION delete
    *   @param ObjectId id Id
    *
    */
    remove(id: string): Observable<void> {
        return this.http
            .delete<void>(this.contextUrl + '/' + id)
            .pipe(map(data => data));
    }

    /**
    * examService.findBy_course
    *   @description CRUD ACTION findBy_course
    *   @param Objectid key Id of model to search for
    *
    */
    findBy_course(id: string): Observable<Exam[]> {
        return this.http
            .get<Exam[]>(this.contextUrl + '/findBy_course/' + id)
            .pipe(
                map(response => response)
            );
    }

    /**
    * examService.findBy_teacher
    *   @description CRUD ACTION findBy_teacher
    *   @param Objectid key Id of model to search for
    *
    */
    findBy_teacher(id: string): Observable<Exam[]> {
        return this.http
            .get<Exam[]>(this.contextUrl + '/findBy_teacher/' + id)
            .pipe(
                map(response => response)
            );
    }

    /**
    * examService.findBystudent
    *   @description CRUD ACTION findBystudent
    *   @param Objectid key Id of model to search for
    *
    */
    findByStudent(id: string): Observable<Exam[]> {
        return this.http
            .get<Exam[]>(this.contextUrl + '/findBystudent/' + id)
            .pipe(
                map(response => response)
            );
    }

    /**
    * examService.get
    *   @description CRUD ACTION get
    *   @param ObjectId id Id resource
    *
    */
    get(id: string): Observable<Exam> {
        return this.http
            .get<Exam>(this.contextUrl + '/' + id)
            .pipe(map(data => data));
    }

    /**
    * examService.list
    *   @description CRUD ACTION list
    *
    */
    list(): Observable<Exam[]> {
        return this.http
            .get<Exam[]>(this.contextUrl)
            .pipe(map(data => data));
    }

    /**
    * examService.update
    *   @description CRUD ACTION update
    *   @param ObjectId id Id
    *
    */
    update(item: Exam): Observable<Exam> {
        return this.http
            .post<Exam>(this.contextUrl + '/' + item._id, item)
            .pipe(map(data => data));
    }


    // Custom APIs


    /**
    * examService.validate
    *   @description this api used to validate the exam
    *   @param String id id of the exam
    *   @returns Boolean
    *
    */
    validate(...params: any[]): Observable<any> {
        return this.http
            .post<any>(this.contextUrl + '/{id}/validate', {})
            .pipe(
                map(response => response)
            );
    }

}
