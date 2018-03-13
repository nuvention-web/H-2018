import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { Review } from '../card-detail/review';


import { AngularFireDatabase, AngularFireObject } from "angularfire2/database";

@Injectable()
export class ReviewService {

  constructor(private db: AngularFireDatabase) { }

}

