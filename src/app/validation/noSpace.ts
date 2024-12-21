import { AbstractControl, ValidationErrors } from "@angular/forms";




export class NoSpaceValidator {
    static noSpace(control: AbstractControl) : ValidationErrors | null{
        let val = control.value as string;
        if(!val){
            return null;
        }

        if(val.includes(" ")){
          return {
            noSpaceErr :" space is not allowed !!!"
          }
        }else{
            return null;
        }
    }
}