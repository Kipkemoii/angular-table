import { NgFor, NgIf } from '@angular/common';
import { Component, NgModule } from '@angular/core';
import { TabViewModule } from 'primeng/tabview';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [NgIf, NgFor, TabViewModule],
  templateUrl: './table.component.html',
  styleUrl: './table.component.css',
})
export class TableComponent {}
