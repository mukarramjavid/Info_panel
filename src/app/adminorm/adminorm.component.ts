import {
  Component,
  OnInit,
  Input,
  Inject,
  Output,
  EventEmitter,
} from '@angular/core';

@Component({
  selector: 'app-adminorm',
  templateUrl: './adminorm.component.html',
  styleUrls: ['./adminorm.component.css'],
})
export class AdminormComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  @Input() btnColor;
  @Input() placeHolderText;

  @Output() inputEvent = new EventEmitter();
  count: number = 0;
  @Output() countNum = new EventEmitter();
  handleClick(inputName) {
    if (inputName.value.length > 0) {
      // alert(inputName.value)
      this.count += 1;
      this.inputEvent.emit(inputName.value);
      this.countNum.emit(this.count);
      inputName.value = '';
    } else {
      alert('Add Value First');
    }
  }
}
