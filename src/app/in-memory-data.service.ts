import { Injectable } from '@angular/core';

import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    let materials = [
      {
        id: 253,
        name: "Bellini Pattern Black",
        article_id : " belB 12",
        tags: ["Paid", "Tag2", "tag 3"],
        state: " completed ",
        gallery_image: "assets/images/shader-balls/mat0001.jpg"
      },
      {
        id: 254,
        name: "Bellini Pattern Chocolate",
        article_id : "belB 13",
        tags: ["Paid", "Tag2", "tag 3"],
        state: "completed",
        gallery_image: "assets/images/shader-balls/mat0002.jpg"
      },
      {
        id: 255,
        name: "Bellini Pattern Cream",
        article_id : "belB 14",
        tags: ["Paid", "Tag2", "tag 3"],
        state: "completed",
        gallery_image: "assets/images/shader-balls/mat0003.jpg"
      },
      {
        id: 256,
        name: "Bellini Pattern Cream",
        article_id : "belB 14",
        tags: ["Paid", "Tag2", "tag 3"],
        state: "completed",
        gallery_image: "assets/images/shader-balls/mat0004.jpg"
      },
      {
        id: 257,
        name: "Bellini Pattern Cream",
        article_id : "belB 14",
        tags: ["Paid", "Tag2", "tag 3"],
        state: "completed",
        gallery_image: "assets/images/shader-balls/mat0005.jpg"
      },
      {
        id: 258,
        name: "Bellini Pattern Cream",
        article_id : "belB 14",
        tags: ["Paid", "Tag2", "tag 3"],
        state: "completed",
        gallery_image: "assets/images/shader-balls/mat0006.jpg"
      },
      {
        id: 259,
        name: "Bellini Pattern Cream",
        article_id : "belB 14",
        tags: ["Paid", "Tag2", "tag 3"],
        state: "completed",
        gallery_image: "assets/images/shader-balls/mat0009.jpg"
      },
      {
        id: 260,
        name: "Bellini Pattern Cream",
        article_id : "belB 14",
        tags: ["Paid", "Tag2", "tag 3"],
        state: "completed",
        gallery_image: "assets/images/shader-balls/mat0010.jpg"
      },
      {
        id: 261,
        name: "Bellini Pattern Cream",
        article_id : "belB 14",
        tags: ["Paid", "Tag2", "tag 3"],
        state: "completed",
        gallery_image: "assets/images/shader-balls/mat0011.jpg"
      },
      {
        id: 262,
        name: "Bellini Pattern Cream",
        article_id : "belB 14",
        tags: ["Paid", "Tag2", "tag 3"],
        state: "completed",
        gallery_image: "assets/images/shader-balls/mat0012.jpg"
      },
      {
        id: 263,
        name: "Bellini Pattern Cream",
        article_id : "belB 14",
        tags: ["Paid", "Tag2", "tag 3"],
        state: "completed",
        gallery_image: "assets/images/shader-balls/mat0013.jpg"
      },
      {
        id: 264,
        name: "Bellini Pattern Cream",
        article_id : "belB 14",
        tags: ["Paid", "Tag2", "tag 3"],
        state: "completed",
        gallery_image: "assets/images/shader-balls/mat0014.jpg"
      },
      {
        id: 265,
        name: "Bellini Pattern Cream",
        article_id : "belB 14",
        tags: ["Paid", "Tag2", "tag 3"],
        state: "completed",
        gallery_image: "assets/images/shader-balls/mat0015.jpg"
      },
      {
        id: 266,
        name: "Bellini Pattern Cream",
        article_id : "belB 14",
        tags: ["Paid", "Tag2", "tag 3"],
        state: "completed",
        gallery_image: "assets/images/shader-balls/mat0016.jpg"
      },
      {
        id: 267,
        name: "Bellini Pattern Cream",
        article_id : "belB 14",
        tags: ["Paid", "Tag2", "tag 3"],
        state: "completed",
        gallery_image: "assets/images/shader-balls/mat0017.jpg"
      },
      {
        id: 268,
        name: "Bellini Pattern Cream",
        article_id : "belB 14",
        tags: ["Paid", "Tag2", "tag 3"],
        state: "completed",
        gallery_image: "assets/images/shader-balls/mat0018.jpg"
      },
      {
        id: 269,
        name: "Bellini Pattern Cream",
        article_id : "belB 14",
        tags: ["Paid", "Tag2", "tag 3"],
        state: "completed",
        gallery_image: "assets/images/shader-balls/mat0019.jpg"
      },
      {
        id: 270,
        name: "Bellini Pattern Cream",
        article_id : "belB 14",
        tags: ["Paid", "Tag2", "tag 3"],
        state: "completed",
        gallery_image: "assets/images/shader-balls/mat0020.jpg"
      },
      {
        id: 271,
        name: "Bellini Pattern Cream",
        article_id : "belB 14",
        tags: ["Paid", "Tag2", "tag 3"],
        state: "completed",
        gallery_image: "assets/images/shader-balls/mat0021.jpg"
      }

    ];
    return {materials};
  }
}
