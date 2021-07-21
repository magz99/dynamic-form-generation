import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function passwordMatchValidator(
  pwControl: AbstractControl
): ValidatorFn {
  return (confControl: AbstractControl): ValidationErrors | null => {
    const noMatch = pwControl.value !== confControl.value;
    return noMatch
      ? { passwordNotMatched: { value: confControl.value } }
      : null;
  };
}
