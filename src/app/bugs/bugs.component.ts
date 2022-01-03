import { Component, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Subject } from 'rxjs';

@Component({
  templateUrl: './bugs.component.html',
})
export class BugsComponent implements OnDestroy {
  public bugsForm: FormGroup;
  public submitted: boolean = false;

  // Can be used as a takeUntil for any observables this component may subscribe to. e.g. a form control valueChanges
  private onDestroy$ = new Subject();

  public constructor(private formBuilder: FormBuilder) {
    this.bugsForm = this.formBuilder.group({
      monStart: [],
      prePopulate: [123456],
      decMarkerComma: [],
      decMarkerDot: [],
      correctRemovingSpace: [1200300.99],
      secureInput: [987654321],
    });
  }

  ngOnDestroy(): void {
    this.onDestroy$.next();
    this.onDestroy$.complete();
  }

  submitForm(): void {
    this.submitted = true;
  }

  resetForm(): void {
    this.bugsForm.reset({
      prePopulate: 2000,
    });
    this.submitted = false;
  }
}
