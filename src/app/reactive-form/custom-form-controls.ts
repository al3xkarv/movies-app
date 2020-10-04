import { FormControl, ValidatorFn } from '@angular/forms';

export function upperAndLowerCase(control: FormControl) {
  const password = control.value;
  if (
    password?.toLowerCase() === password ||
    password?.toUpperCase() === password
  ) {
    return { notUpperandLowerCase: {} };
  } else {
    return null;
  }
}
