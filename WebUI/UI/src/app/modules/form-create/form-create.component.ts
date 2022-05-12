import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Question } from '@datas/models/base/question';
import { FormService } from '@datas/services/base/form/form.service';
import { LocalStorageService } from '@shared/services/local-storage/local-storage.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-form-create',
  templateUrl: './form-create.component.html',
  styleUrls: ['./form-create.component.scss'],
})
export class FormCreateComponent implements OnInit {
  createdForm: FormGroup;

  constructor(
    private formService: FormService,
    private formBuilder: FormBuilder,
    private toastrService: ToastrService,
    private router: Router,
    private localStorageService: LocalStorageService
  ) {}

  ngOnInit(): void {
    this.createNewForm();
  }

  createNewForm() {
    this.createdForm = this.formBuilder.group({
      name: ['', Validators.required],
    });
  }

  create() {
    if (this.createdForm.valid) {
      let formModel = Object.assign({}, this.createdForm.value);

      this.formService.create(formModel).subscribe(
        (response) => {
          this.toastrService.success(response.message, 'Success');
          this.localStorageService.setFormAction('create');
          this.getLastForm();
        },
        (responseError) => {
          if (responseError.error.Errors.length > 0) {
            for (let i = 0; i < responseError.error.Errors.length; i++) {
              this.toastrService.error(
                responseError.error.Errors[i].ErrorMessage,
                'Validation Error'
              );
            }
          }
        }
      );
    }
  }

  getLastForm() {
    this.formService.getLastForm().subscribe((response) => {
      let newCreatedForm = response.data;
      let question = new Question(0, 0, '', '', 0);
      this.localStorageService.setEditedForm(newCreatedForm);

      this.localStorageService.setEditedQuestion(question);
      this.router.navigate(['form/' + response.data.id + '/create']);
    });
  }
}
