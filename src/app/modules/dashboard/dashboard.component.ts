import { Component, OnInit, ViewChild } from '@angular/core';
import { DashboardService } from '../dashboard.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/';

export interface Agent {
  name: string;
  title: string;
  language: string;
  specialization: string;
}

const ELEMENT_DATA: Agent[] = [
  {
    name: 'Jemima Forrest',
    title: 'Tech',
    language: 'English',
    specialization: 'DOTA2',
  },
  {
    name: 'Kayleigh Stewart',
    title: 'Billing',
    language: 'Chinese',
    specialization: 'Billing',
  },
  {
    name: 'Lisa Molina',
    title: 'Training',
    language: 'English',
    specialization: 'L&D',
  },
  {
    name: 'Thea Rowe',
    title: 'Hardware',
    language: 'Russian',
    specialization: 'Hardware',
  },
  {
    name: 'Nannie Harrison',
    title: 'Team Lead',
    language: 'English',
    specialization: 'DOTA2',
  },
  {
    name: 'Chelsea Humphreys',
    title: 'Billing',
    language: 'French',
    specialization: 'Billing',
  },
  {
    name: 'Isabella Lewis',
    title: 'Hardware',
    language: 'English',
    specialization: 'Billing',
  },
  {
    name: 'Orla Harmon',
    title: 'Tech',
    language: 'English',
    specialization: 'CS:GO',
  },
  {
    name: 'Beatrice Oliver',
    title: 'Team Lead',
    language: 'Ukrainian',
    specialization: 'Billing',
  },
  {
    name: 'Jessie Whelan',
    title: 'Billing',
    language: 'English',
    specialization: 'Billing',
  },
  {
    name: 'Angus Glover',
    title: 'Tech',
    language: 'English',
    specialization: 'Billing',
  },
  {
    name: 'Homer Castillo',
    title: 'Team Lead',
    language: 'English',
    specialization: 'Billing',
  },
  {
    name: 'Alec Guerrero',
    title: 'Hardware',
    language: 'Italian',
    specialization: 'DOTA',
  },
  {
    name: 'Albert Briggs',
    title: 'Billing',
    language: 'English',
    specialization: 'Billing',
  },
  {
    name: 'Hugh Richardson',
    title: 'Tech',
    language: 'Chinese',
    specialization: 'CS:GO',
  },
  {
    name: 'Eddie Gonzalez',
    title: 'Team Lead',
    language: 'English',
    specialization: 'CS:GO',
  },
  {
    name: 'Otis Baker',
    title: 'Training',
    language: 'Russian',
    specialization: 'Billing',
  },
  {
    name: 'Christopher Wilson',
    title: 'Billing',
    language: 'English',
    specialization: 'Billing',
  },
  {
    name: 'Rafael Duncan',
    title: 'Hardware',
    language: 'English',
    specialization: 'DOTA',
  },
  {
    name: 'Chris Black',
    title: 'Tech',
    language: 'English',
    specialization: 'DOTA2',
  },
];

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
