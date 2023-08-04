import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

// custom validator to check that two fields match
export function MustMatch(controlName: string, matchingControlName: string): ValidatorFn {
  return (group: AbstractControl): ValidationErrors | null => {
    const control = group.get(controlName);
    const matchingControl = group.get(matchingControlName);

    if (!control || !matchingControl) {
      return null;
    }

    // Return if another validator has already found an error on the matchingControl
    if (matchingControl.errors && !matchingControl.errors['mustMatch']) {
      return null;
    }

    // Set error on matchingControl if validation fails
    if (control.value !== matchingControl.value) {
      matchingControl.setErrors({ mustMatch: true });
    } else {
      matchingControl.setErrors(null);
    }

    // Return null if there are no errors, otherwise return the error object
    return matchingControl.errors;
  };
}
