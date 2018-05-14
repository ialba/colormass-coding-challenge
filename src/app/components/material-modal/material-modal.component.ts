import { Component, OnInit, Output, EventEmitter, Inject } from '@angular/core';

import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

import { Router, ActivatedRoute } from '@angular/router';
import { MaterialService } from '../../services/material.service';

import { Material } from '../../types/material';

@Component({
  selector: 'app-material-modal',
  templateUrl: './material-modal.component.html',
  styleUrls: ['./material-modal.component.css']
})
export class MaterialModalComponent implements OnInit {

  @Output() modalClose : EventEmitter<any> = new EventEmitter<any>();

  constructor(
    private router : Router,
    public dialog: MatDialog,
    private route: ActivatedRoute
   ) {}


  ngOnInit() {
    this.route.paramMap.subscribe(result => {
      let dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
        width: '95%',
        height: '90%',
        data: {
          id : result.get('id')
        }
      });
      dialogRef.afterClosed().subscribe(result => {
        this.router.navigate(['/']);
      });
    } );
  }

}

@Component({
  selector: 'material-details-modal',
  templateUrl: 'material-details-modal.html',
})
export class DialogOverviewExampleDialog {

  material : Material = {
    id: 1,
    name: "",
    article_id : "",
    tags: [""],
    state: "",
    gallery_image: ""// I like to place here a "default siluete"
  };

  constructor(
    private materialService: MaterialService,
    public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
      this.materialService.getMaterial(data.id)
        .then(material => {
          this.material = material;
        });
  }

  closeModal(): void {
    this.dialogRef.close();
  }

}
