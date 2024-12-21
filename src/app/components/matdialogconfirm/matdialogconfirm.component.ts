import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-matdialogconfirm',
  templateUrl: './matdialogconfirm.component.html',
  styleUrls: ['./matdialogconfirm.component.scss']
})
export class MatdialogconfirmComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<MatdialogconfirmComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { title: string; message: string }
  ) {}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  onConfirm(): void {
    this.dialogRef.close(true);
  }

  onCancel(): void {
    this.dialogRef.close(false);
  }

}
