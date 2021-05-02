import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-main-directives',
  templateUrl: './main-directives.component.html',
  styleUrls: ['./main-directives.component.scss']
})
export class MainDirectivesComponent implements OnInit {
  constructor () {}

  ngOnInit (): void {}
  //numbers = [1, 2, 3, 4, 5];
  oddNumbers = [1, 3, 5]
  evenNumbers = [2, 4]
  value = 0
  onlyOdd = false
}
