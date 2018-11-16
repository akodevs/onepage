import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import {ActivatedRoute } from '@angular/router'
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ContactUsService } from '../../services/contact-us.service';


@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {

  post$: Observable<any>;
  form: FormGroup;
  constructor(private service: ContactUsService, private router: ActivatedRoute,
    private fb: FormBuilder) {
      this.createForm();
  }

  createForm() {
    this.form = this.fb.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      message: ['', Validators.required],
    });
  }
  ngOnInit() {
  }

  onSubmit() {
    const {name, email, message} = this.form.value;
    const date = Date();
    const html = `
      <div>From: ${name}</div>
      <div>Email: <a href="mailto:${email}">${email}</a></div>
      <div>Date: ${date}</div>
      <div>Message: ${message}</div>
    `;
    const formRequest = { name, email, message, date, html };
    this.form.reset();

    this.service.sendEmail(formRequest);
  }
}
