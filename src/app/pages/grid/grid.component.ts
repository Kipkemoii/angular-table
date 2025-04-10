import { Component } from '@angular/core';
import { AgGridAngular } from 'ag-grid-angular'; // Angular Data Grid Component
import type { ColDef } from 'ag-grid-community';
import { AllCommunityModule, ModuleRegistry } from 'ag-grid-community';
import { isPlatformBrowser } from '@angular/common';
import { Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule } from '@angular/common';

// Register all Community features
ModuleRegistry.registerModules([AllCommunityModule]);

@Component({
  selector: 'app-grid',
  standalone: true,
  imports: [AgGridAngular, CommonModule],
  templateUrl: './grid.component.html',
  styleUrl: './grid.component.css',
})
export class GridComponent {
  isBrowser = false;
  rowData = [
    {
      Indicators:
        'Number of patients listed at high risk of missing appointment',
      PatientCount: 56,
      rowSpan: 1,
    },
    {
      Indicators: 'Number of patients whom a contact attempt was made',
      PatientCount: 37,
      rowSpan: 1,
    },
    {
      Indicators:
        'Number and type of contact attempts for patients listed as at high risk of missing appointment',
      sub: 'Number of phone contact attempts',
      PatientCount: 37,
      rowSpan: 2,
    },
    { sub: 'Number of home visit attempts', PatientCount: 0 },
    {
      Indicators: 'Contact attempts outcome',
      sub: 'Number of successful contact attempts',
      PatientCount: 13,
      rowSpan: 3,
    },
    { sub: 'Number of unsuccessful contact attempts', PatientCount: 24 },
    { sub: 'Number of patients with NO contact attempt', PatientCount: 19 },
    {
      Indicators: 'Bi-weekly patient appointment outcome',
      sub: 'Number of patients successfully contacted and kept appointment',
      PatientCount: 13,
      rowSpan: 5,
    },
    {
      sub: 'Number of patients successfully contacted but missed appointment',
      PatientCount: 8,
    },
    {
      sub: 'Number of patients successfully contacted and wish to reschedule',
      PatientCount: 3,
    },
    {
      sub: 'Number of patients unsuccessfully contacted but kept appointment',
      PatientCount: 6,
    },
    {
      sub: 'Number of patients with NO contact attempt but kept appointment',
      PatientCount: 8,
    },
  ];

  colDefs: ColDef[] = [
    {
      headerName: 'Indicators',
      field: 'Indicators',
      rowSpan: (params) => {
        return params.data.rowSpan || 1;
      },
      cellClassRules: {
        'ag-row-span': 'true',
      },
      cellStyle: { backgroundColor: '#e8eaf6', fontWeight: 'bold' },
      suppressMovable: true,
    },
    {
      headerName: '',
      field: 'sub',
      cellStyle: { backgroundColor: '#e8eaf6' },
      suppressMovable: true,
    },
    {
      headerName: 'Patient Count',
      field: 'PatientCount',
      cellStyle: { backgroundColor: '#e8eaf6' },
      suppressMovable: true,
    },
  ];

  defaultColDef: ColDef = {
    flex: 1,
  };

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    this.isBrowser = isPlatformBrowser(this.platformId);
  }
}
