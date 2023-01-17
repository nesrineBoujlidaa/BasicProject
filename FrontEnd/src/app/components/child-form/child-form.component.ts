import {Component, OnInit, EventEmitter, Output, Input} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {User} from "../../shared/user";
import {UserService} from "../../services/user.service";
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-child-form',
  templateUrl: './child-form.component.html',
  styleUrls: ['./child-form.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: ChildFormComponent,
      multi: true,
    },
  ],
})
export class ChildFormComponent implements OnInit,ControlValueAccessor {

  constructor(private userService: UserService, private fb:FormBuilder) { }
  field= "";
  status="";

  childForm : FormGroup;

  @Output() buttonClicked: EventEmitter<any> = new EventEmitter<any>();

  @Input() user:FormGroup;

  ngOnInit() {
    this.childForm = this.fb.group({
      address: ['', Validators.required],
      status: ['', Validators.required],
      }
    )
  }



  incrementSalary() {
    this.buttonClicked.emit(Math.round(this.user.value.salary + 500) );
    console.log(this.user.value.salary);
  }

// value Accessor
  onChange: any = () => {}
  onTouch: any = () => {}

// sets the value used by the ngModel of the element
  set address(val: string){
    this.field = val
    this.onChange(val)
    this.onTouch(val)
  }

  // This will will write the value to the view if the the value changes occur on the model programmatically
  writeValue(address: any){
    this.address = address;
  }

  // When the value in the UI is changed, this method will invoke a callback function
  registerOnChange(fn: any){
    this.onChange = fn
  }

  // When the element is touched, this method will get called
  registerOnTouched(onTouched: Function) {
    this.onTouch = onTouched;
  }

}
