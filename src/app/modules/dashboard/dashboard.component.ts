import { Component, OnInit, ViewChild } from '@angular/core';
import { DashboardService } from '../dashboard.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

export interface Agent {
  name: string;
  title: string;
  language: string;
  specialization: string;
}

const ELEMENT_DATA: Agent[] = [];

@Component({
  selector: 'app-dashboard',
  styleUrls: ['./dashboard.component.scss'],
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent implements OnInit {
  bigChart = [];
  cards = [];
  pieChart = [];

  displayedColumns: string[] = ['name', 'title', 'language', 'specialization'];
  dataSource = new MatTableDataSource<Agent>(ELEMENT_DATA);

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  constructor(private dashboardService: DashboardService) {}

  ngOnInit() {
    this.bigChart = this.dashboardService.bigChart();
    this.cards = this.dashboardService.cards();
    // this.pieChart = this.dashboardService.pieChart();

    this.dataSource.paginator = this.paginator;
  }
}
