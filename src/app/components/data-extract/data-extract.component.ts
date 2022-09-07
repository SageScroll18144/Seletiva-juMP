import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service'


@Component({
  selector: 'app-data-extract',
  templateUrl: './data-extract.component.html',
  styleUrls: ['./data-extract.component.scss']
})
export class DataExtractComponent implements OnInit {
  timeout: any;
  constructor(
    private userService: UsersService
  ) { }

  ngOnInit() {
    this.userService.getAllData()
      .subscribe(data => {
        console.log(data)
      })
  }
  submitData(value: any) {
    let body = {
      inf:value
    }
    this.userService.postData(body)
    .subscribe(response => {
      console.log(response)
    })
  }
  public searchBounce() {
    if (this.timeout) {
      clearTimeout(this.timeout);
    }
    this.timeout = setTimeout(() => {
      this.submitData(this.timeout);
    }, 1000);
  }
}
