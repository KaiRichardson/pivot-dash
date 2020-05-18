import { Component, OnInit, ViewChild } from '@angular/core';
import { DashboardService } from '../dashboard.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

export interface Agent {
  name: string;
  title: string;
  language: string;
  specialization: string;
  team: string;
  schedule: string;
  shift: string;
  hire_date: string;
  tph: string;
  cph: string;
}

const ELEMENT_DATA: Agent[] = [
  {
    name: 'Jemima Forrest',
    title: 'Tech',
    language: 'English',
    specialization: 'DOTA2',
    team: 'DOTA2',
    schedule: 'DOTA2',
    shift: 'DOTA2',
    hire_date: 'DOTA2',
    tph: 'DOTA2',
    cph: 'DOTA2',
  },
  {
    name: 'Kayleigh Stewart',
    title: 'Billing',
    language: 'Chinese',
    specialization: 'Billing',
    team: 'DOTA2',
    schedule: 'DOTA2',
    shift: 'DOTA2',
    hire_date: 'DOTA2',
    tph: 'DOTA2',
    cph: 'DOTA2',
  },
  {
    name: 'Lisa Molina',
    title: 'Training',
    language: 'English',
    specialization: 'L&D',
    team: 'DOTA2',
    schedule: 'DOTA2',
    shift: 'DOTA2',
    hire_date: 'DOTA2',
    tph: 'DOTA2',
    cph: 'DOTA2',
  },
  {
    name: 'Thea Rowe',
    title: 'Hardware',
    language: 'Russian',
    specialization: 'Hardware',
    team: 'DOTA2',
    schedule: 'DOTA2',
    shift: 'DOTA2',
    hire_date: 'DOTA2',
    tph: 'DOTA2',
    cph: 'DOTA2',
  },
  {
    name: 'Nannie Harrison',
    title: 'Team Lead',
    language: 'English',
    specialization: 'DOTA2',
    team: 'DOTA2',
    schedule: 'DOTA2',
    shift: 'DOTA2',
    hire_date: 'DOTA2',
    tph: 'DOTA2',
    cph: 'DOTA2',
  },
  {
    name: 'Chelsea Humphreys',
    title: 'Billing',
    language: 'French',
    specialization: 'Billing',
    team: 'DOTA2',
    schedule: 'DOTA2',
    shift: 'DOTA2',
    hire_date: 'DOTA2',
    tph: 'DOTA2',
    cph: 'DOTA2',
  },
  {
    name: 'Isabella Lewis',
    title: 'Hardware',
    language: 'English',
    specialization: 'Billing',
    team: 'DOTA2',
    schedule: 'DOTA2',
    shift: 'DOTA2',
    hire_date: 'DOTA2',
    tph: 'DOTA2',
    cph: 'DOTA2',
  },
  {
    name: 'Orla Harmon',
    title: 'Tech',
    language: 'English',
    specialization: 'CS:GO',
    team: 'DOTA2',
    schedule: 'DOTA2',
    shift: 'DOTA2',
    hire_date: 'DOTA2',
    tph: 'DOTA2',
    cph: 'DOTA2',
  },
  {
    name: 'Beatrice Oliver',
    title: 'Team Lead',
    language: 'Ukrainian',
    specialization: 'Billing',
    team: 'DOTA2',
    schedule: 'DOTA2',
    shift: 'DOTA2',
    hire_date: 'DOTA2',
    tph: 'DOTA2',
    cph: 'DOTA2',
  },
  {
    name: 'Jessie Whelan',
    title: 'Billing',
    language: 'English',
    specialization: 'Billing',
    team: 'DOTA2',
    schedule: 'DOTA2',
    shift: 'DOTA2',
    hire_date: 'DOTA2',
    tph: 'DOTA2',
    cph: 'DOTA2',
  },
  {
    name: 'Angus Glover',
    title: 'Tech',
    language: 'English',
    specialization: 'Billing',
    team: 'DOTA2',
    schedule: 'DOTA2',
    shift: 'DOTA2',
    hire_date: 'DOTA2',
    tph: 'DOTA2',
    cph: 'DOTA2',
  },
  {
    name: 'Homer Castillo',
    title: 'Team Lead',
    language: 'English',
    specialization: 'Billing',
    team: 'DOTA2',
    schedule: 'DOTA2',
    shift: 'DOTA2',
    hire_date: 'DOTA2',
    tph: 'DOTA2',
    cph: 'DOTA2',
  },
  {
    name: 'Alec Guerrero',
    title: 'Hardware',
    language: 'Italian',
    specialization: 'DOTA',
    team: 'DOTA2',
    schedule: 'DOTA2',
    shift: 'DOTA2',
    hire_date: 'DOTA2',
    tph: 'DOTA2',
    cph: 'DOTA2',
  },
  {
    name: 'Albert Briggs',
    title: 'Billing',
    language: 'English',
    specialization: 'Billing',
    team: 'DOTA2',
    schedule: 'DOTA2',
    shift: 'DOTA2',
    hire_date: 'DOTA2',
    tph: 'DOTA2',
    cph: 'DOTA2',
  },
  {
    name: 'Hugh Richardson',
    title: 'Tech',
    language: 'Chinese',
    specialization: 'CS:GO',
    team: 'DOTA2',
    schedule: 'DOTA2',
    shift: 'DOTA2',
    hire_date: 'DOTA2',
    tph: 'DOTA2',
    cph: 'DOTA2',
  },
  {
    name: 'Eddie Gonzalez',
    title: 'Team Lead',
    language: 'English',
    specialization: 'CS:GO',
    team: 'DOTA2',
    schedule: 'DOTA2',
    shift: 'DOTA2',
    hire_date: 'DOTA2',
    tph: 'DOTA2',
    cph: 'DOTA2',
  },
  {
    name: 'Otis Baker',
    title: 'Training',
    language: 'Russian',
    specialization: 'Billing',
    team: 'DOTA2',
    schedule: 'DOTA2',
    shift: 'DOTA2',
    hire_date: 'DOTA2',
    tph: 'DOTA2',
    cph: 'DOTA2',
  },
  {
    name: 'Christopher Wilson',
    title: 'Billing',
    language: 'English',
    specialization: 'Billing',
    team: 'DOTA2',
    schedule: 'DOTA2',
    shift: 'DOTA2',
    hire_date: 'DOTA2',
    tph: 'DOTA2',
    cph: 'DOTA2',
  },
  {
    name: 'Rafael Duncan',
    title: 'Hardware',
    language: 'English',
    specialization: 'DOTA',
    team: 'DOTA2',
    schedule: 'DOTA2',
    shift: 'DOTA2',
    hire_date: 'DOTA2',
    tph: 'DOTA2',
    cph: 'DOTA2',
  },
  {
    name: 'Chris Black',
    title: 'Tech',
    language: 'English',
    specialization: 'DOTA2',
    team: 'DOTA2',
    schedule: 'DOTA2',
    shift: 'DOTA2',
    hire_date: 'DOTA2',
    tph: 'DOTA2',
    cph: 'DOTA2',
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

  displayedColumns: string[] = [
    'name',
    'title',
    'language',
    'specialization',
    'team',
    'schedule',
    'shift',
    'hire_date',
    'tph',
    'cph',
  ];
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
