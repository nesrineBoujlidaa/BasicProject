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
  address="";
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

  onChange!: (address:string) => void;
  onTouched!: () => void;
  writeValue(obj: any): void {
    this.address = obj;

  }


  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

}
