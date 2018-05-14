import { Component, OnInit } from '@angular/core';
import { MaterialService } from '../../services/material.service';

@Component({
  selector: 'app-materials-list',
  templateUrl: './materials-list.component.html',
  styleUrls: ['./materials-list.component.css']
})
export class MaterialsListComponent implements OnInit {

  self ;

  materials = [{
    id: 253,
    name: "",
    article_id : "",
    tags: [""],
    state: "",
    gallery_image: "assets/images/shader-balls/mat0001.jpg"
  }] // I like that when loading data it shows a void element (this intends to be that, the image for example should be the siloute)

  constructor(private materialService : MaterialService) { }

  ngOnInit() {
    this.materialService.getMaterials()
        .then(materials => this.materials = materials);
    this.self = this;
    window.addEventListener('scroll', (event) => {
      if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) { // If we are at the bottom we call the backend for more info
        this.materialService.getMaterials() // We just call the same and push the materials
            .then(materials => {
            this.materials = [...this.materials, ...materials] // Some ES6
          });
      }
    });
  }

}
