import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Icountry } from 'src/app/const/countr';
import { COUNTRIES_META_DATA } from 'src/app/const/country';
import { VALIDATION_PATTERNS } from 'src/app/const/valid';
import { CustomRegex } from 'src/app/const/validators';
import { EmployerService } from 'src/app/services/employer.service';
import { SanckBarService } from 'src/app/services/sanck-bar.service';
import { empIdValidator } from 'src/app/validation/empidValidators';
import { NoSpaceValidator } from 'src/app/validation/noSpace';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.scss']
})
export class PostFormComponent implements OnInit {

  signUpForm !: FormGroup;
  CountryInfo: Array<Icountry> = [];
  postid!: string
  isEditMode: boolean = false

  // CountryInfo:Array<Ico
  constructor(private _EmpService: EmployerService, private _act: ActivatedRoute,
    private _router: Router, private _matsanck: SanckBarService
  ) {

  }
  ngOnInit(): void {

    this.CountryInfo = COUNTRIES_META_DATA;
    this.CreateSignUpForm();
    this.postid = this._act.snapshot.params['postId']
    if (this.postid) {
      this.isEditMode = true
      this._EmpService.singlePostFetch(this.postid)
        .subscribe((res) => {
          this.signUpForm.patchValue(res)
        })
    }


    console.log(this.signUpForm.value);

  }

  onupdtae() {
    let updateObj = this.signUpForm.value
    console.log(updateObj)
    this._EmpService.updatePost(updateObj, this.postid)
      .subscribe((res) => {
        console.log(res)
        this._router.navigate(['home'])
        this._matsanck.matsancopen(`${updateObj.name} is updated`)
     

      })
  }
  CreateSignUpForm() {
    this.signUpForm = new FormGroup({
      name: new FormControl(null, [Validators.required,
      Validators.pattern(CustomRegex.username),
      Validators.minLength(255),
      Validators.maxLength(30),
        // NoSpaceValidator.noSpace
      ]),
      client: new FormControl(null, [Validators.required,
      Validators.pattern(CustomRegex.client),
      Validators.minLength(15),
      Validators.maxLength(18),
        // NoSpaceValidator.noSpace 
      ]),
      code: new FormControl(null, [Validators.required, Validators.pattern(VALIDATION_PATTERNS.code)]),

      email: new FormControl(null, [Validators.required, Validators.pattern(CustomRegex.email)]),
      mobileno: new FormControl(null, [Validators.required]),
      gstno: new FormControl(null, [Validators.required, Validators.pattern(VALIDATION_PATTERNS.gstno)]),
      panno: new FormControl(null, [Validators.required, Validators.pattern(VALIDATION_PATTERNS.panno)]),
      address: new FormControl(null, [Validators.required, Validators.maxLength(255)]),
      country: new FormControl(null, [Validators.required]),
      state: new FormControl(null, [Validators.required]),
      city: new FormControl(null, [Validators.required]),
      pincode: new FormControl(null, [Validators.required]),

      gender: new FormControl(null),
      skills: new FormArray([new FormControl(null), new FormControl(null)]),




    });
  }
  onSignUp() {
    console.log(this.signUpForm);
    // console.log(this.signUpForm.value);

    let post = this.signUpForm.value
    this.signUpForm.reset()
    this._EmpService.ceratepost(post)
      .subscribe((res) => {
        console.log('post creted succesfully')

        this._router.navigate(['home'])
        this._matsanck.matsancopen(`${post.name} is created`)

      })

  };

  get f() {
    return this.signUpForm.controls
  }

  get getname() {
    return this.signUpForm.get("name") as FormControl
  }
  get getaddress() {
    return this.signUpForm.get("address") as FormControl
  }
  get getpincode() {
    return this.signUpForm.get("pincode") as FormControl
  }
  get getstate() {
    return this.signUpForm.get("pincode") as FormControl
  }
  get getcity() {
    return this.signUpForm.get("pincode") as FormControl
  }
  getcountry() {
    return this.signUpForm.get("country") as FormControl
  }
  get getclient() {
    return this.signUpForm.get("client") as FormControl
  }
  get skillsformArr() {
    return this.signUpForm.get('skills') as FormArray
  }

  onaddskill() {
    if (this.skillsformArr.length < 5) {
      let skillcontrol = new FormControl(null, [Validators.required])
      this.skillsformArr.push(skillcontrol)
    }
  }

  onremoveskill(i: number) {
    this.skillsformArr.removeAt(i)
  }


}
