import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { SubscriptionModel } from './model/susbcription.model';
import { SubscriptionService } from './service/subscription.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'dew-work-fe';

  constructor(public service: SubscriptionService, private toastr: ToastrService) { }

  ngOnInit(): void {

  }

  onSubmit(form: NgForm) {

    this.service._postSaveSusbscription().subscribe(
      res => {
        this.resetForm(form);
        this.toastr.success("Se guardo satisfactoriamente", "Suscripción")
      },
      err => {
        console.log(err);
      }

    );
  }
  resetForm(form: NgForm) {
    form.form.reset();
    this.service.formData = new SubscriptionModel();
  }

}
