import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { cities } from 'src/app/const/city';
import { City, Icountry, Istate } from 'src/app/const/countr';
import { COUNTRIES_META_DATA } from 'src/app/const/country';
import { indianStates } from 'src/app/const/state';
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
  state: Array<Istate> = []
  city: Array<City> = []
  postid!: string
  isEditMode: boolean = false

  // CountryInfo:Array<Ico
  constructor(private _EmpService: EmployerService, private _act: ActivatedRoute,
    private _router: Router, private _matsanck: SanckBarService
  ) {

  }
  ngOnInit(): void {

    this.CountryInfo = COUNTRIES_META_DATA;
    this.state = indianStates
    this.city = cities
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
    if (this.signUpForm.valid) {
      let updateObj = this.signUpForm.value
      console.log(updateObj)
      this._EmpService.updatePost(updateObj, this.postid)
        .subscribe((res) => {
          console.log(res)
          this._router.navigate(['home'])
          this._matsanck.matsancopen(`${updateObj.name} is updated`)


        })
    }
  }
  CreateSignUpForm() {
    this.signUpForm = new FormGroup({
      name: new FormControl(null, [
        Validators.required, // Field is required
        Validators.minLength(3), // Minimum length of 3 characters
        Validators.maxLength(50), // Maximum length of 50 characters
        Validators.pattern(/^[a-zA-Z\s]+$/), // Only alphabets and spaces
      ],),
      client: new FormControl(null,

        [
          Validators.required, // Field is required
          Validators.minLength(3), // Minimum length of 3 characters
          Validators.maxLength(50), // Maximum length of 50 characters
          Validators.pattern(/^[a-zA-Z\s]+$/), // Only alphabets and spaces
        ],
      ),
      code: new FormControl(null, [Validators.required]),//Validators.pattern(VALIDATION_PATTERNS.code)

      email: new FormControl(null, [Validators.required, Validators.pattern(CustomRegex.email)]),
      mobileno: new FormControl(null, [Validators.required, Validators.pattern(/^[0-9]{10}$/)]),
      gstno: new FormControl(null, [Validators.required, Validators.pattern(
        /^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}Z[0-9A-Z]{1}$/
      )]),//Validators.pattern(VALIDATION_PATTERNS.gstno)
      panno: new FormControl(null, [Validators.required, Validators.pattern(/^[A-Z]{5}[0-9]{4}[A-Z]{1}$/)]),//Validators.pattern(VALIDATION_PATTERNS.panno)
      address: new FormControl(null, [Validators.required, Validators.maxLength(255)]),
      country: new FormControl('India', [Validators.required]),
      state: new FormControl('Maharashtra', [Validators.required]),
      city: new FormControl('Maharashtra', [Validators.required]),

      // city: new FormControl('latur', [Validators.required]),
      pincode: new FormControl(null, [Validators.required, Validators.pattern(/^[1-9][0-9]{5}$/)]),

      gender: new FormControl(null),
      skills: new FormArray([new FormControl(null), new FormControl(null)]),




    });
  }
  onSignUp() {
    console.log(this.signUpForm);
    // console.log(this.signUpForm.value);
    if (this.signUpForm.valid) {

      let post = this.signUpForm.value
      this.signUpForm.reset()
      this._EmpService.ceratepost(post)
        .subscribe((res) => {
          console.log('post creted succesfully')

          this._router.navigate(['home'])
          this._matsanck.matsancopen(`${post.name} is created`)

        })
    }

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
    return this.signUpForm.get("state") as FormControl
  }
  get getcity() {
    return this.signUpForm.get("city") as FormControl
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
