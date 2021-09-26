import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ContactModel } from 'src/app/model/contact.model';
import { ContactService } from 'src/app/service/contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

    title = 'dew-work-fe';
  
    constructor(public service: ContactService, private toastr: ToastrService) { }
  
    ngOnInit(): void {
  
    }
  
    onSubmit(form: NgForm) {
  
      this.service._postSaveContact().subscribe(
        res => {
          this.resetForm(form);
          console.info(form);
          this.toastr.success("Se guardo satisfactoriamente", "Contacto")
        },
        err => {
          console.log(err);
        }
  
      );
    }
    resetForm(form: NgForm) {
      form.form.reset();
      this.service.formData = new ContactModel();
    }
}
