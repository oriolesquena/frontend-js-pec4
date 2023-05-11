import { Component, OnInit } from '@angular/core';
import { Article } from 'src/app/model/article'

@Component({
  selector: 'app-article-item',
  templateUrl: './article-item.component.html',
  styleUrls: ['./article-item.component.css']
})
export class ArticleItemComponent implements OnInit {

  public article!: Article;

  constructor() { }

  ngOnInit() {
    this.article = new Article('Zapatillas casual', 
    'https://st2.depositphotos.com/1006269/47875/i/450/depositphotos_478758028-stock-photo-black-generic-sneakers-isolated-white.jpg',
    59.95, true, 0);
  }

  incrementInCart() {
    this.article.quantityInCart++;
  }

  decrementInCart() {
    if (this.article.quantityInCart > 0) {
      this.article.quantityInCart--;
    }
  }
}