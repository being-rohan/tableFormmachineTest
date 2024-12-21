import { AbstractControl, ValidationErrors } from "@angular/forms";


export class empIdValidator {
    static idValidator(control: AbstractControl) : ValidationErrors | null {
        if(!control.value){
            return null
        }
       let expression = /^[a-z]\d{3}$/;
       let valid = expression.test(control.value)
       if(valid){
         return null;
       }else{
       return {
            empError : "Please enter number."
        }
       }
    }
}