import { FormGroup } from "@angular/forms";

export function dateLessThan() {
    return (group: FormGroup): {[key: string]: string} => {
      const fromDate = group.controls['roadAgeFrom'];
      const toDate = group.controls['roadAgeTo'];
      if (fromDate.value > toDate.value) {
        return {
          dates: "Date from should be less than Date to"
        };
      }
      return {};
    }
}