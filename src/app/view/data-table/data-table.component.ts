import {Component, OnInit} from '@angular/core';
import {MainService} from "../../core/services/main.service";

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css']
})
export class DataTableComponent implements OnInit {
  displayedColumns: string[] = ['row', 'name', 'Date', 'Vol', 'Low', 'Close', 'High', 'sma_20', 'Vol_dev_20', 'Vol_sma_20', 't_Vol', 'strong_buy', 'buy', 'weak_buy',];
  dataSource: any[] = [];
  loading: boolean = false;

  constructor(private mainService: MainService) {
  }

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this.loading = true;
    setTimeout(()=> {
      this.mainService.getData().subscribe(res => {
        this.dataSource = res;
        this.loading = false;
      }, error => {
        this.loading = false;
      })
    }, 500)
  }

}
