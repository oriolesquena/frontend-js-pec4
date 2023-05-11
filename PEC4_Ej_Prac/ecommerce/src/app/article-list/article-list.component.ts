import {Component, OnInit} from '@angular/core';
import {Article} from '../model/article';
import {ArticleQuantityChange} from 'src/app/model/article-quantity-change';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css'],
})
export class ArticleListComponent implements OnInit {
  public articles!: Array<Article>;

  constructor() {}

  ngOnInit() {
    this.articles = [
      new Article(
        1,
        'Zapatillas casual',
        'https://st2.depositphotos.com/1006269/47875/i/450/depositphotos_478758028-stock-photo-black-generic-sneakers-isolated-white.jpg',
        59.95,
        true,
        0
      ),
      new Article(
        2,
        'Zapatillas deportivas',
        'https://www.lidl.es/media/product/0/0/3/9/8/4/5/zapatillas-deportivas-de-mujer-multicolor-zoom.jpg',
        65.95,
        true,
        0
      ),
      new Article(
        3,
        'Zapatillas montaña',
        'https://m.media-amazon.com/images/I/71Y++k65slL._AC_UX395_.jpg',
        79.95,
        false,
        0
      ),
    ];
  }

  onQuantityChange(change: ArticleQuantityChange) {
    const article = this.articles.find(art => {
      return change.article.id === art.id;
    });
    if (article !== undefined) {
      article.quantityInCart += change.changeInQuantity;
    }
  }
}
