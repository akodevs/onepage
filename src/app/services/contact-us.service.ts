import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { IEmail } from '../models/email';
import { map } from 'rxjs/operators';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ContactUsService {

  emailCollection: AngularFirestoreCollection<IEmail>;
  emails: Observable<IEmail[]>;
  emailDoc: AngularFirestoreDocument<IEmail>;

  constructor(public afs: AngularFirestore, private http: HttpClient) {
    // this.emails = this.afs.collection('inquiries').valueChanges();

    this.emailCollection = this.afs.collection('inquiries', ref => ref.orderBy('name', 'asc'));

    this.emails = this.emailCollection.snapshotChanges().pipe(map(changes => {
      return changes.map(a => {
        const data = a.payload.doc.data() as IEmail;
        data.id = a.payload.doc.id;
        return data;
      });
    }));
  }

  getEmails() {
    return this.emails;
  }

  sendEmail(email: IEmail) {
    this.emailCollection.add(email);
  }


}
