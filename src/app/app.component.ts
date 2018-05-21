import { Component } from '@angular/core';
import {Post} from './object/Post';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  posts = [];

  constructor() {
    this.posts.push(new Post('Mon premier post', 'Accedat huc suavitas quaedam oportet sermonum atque morum, haudquaquam ' +
      'mediocre condimentum amicitiae. Tristitia autem et in omni re severitas habet illa quidem gravitatem, sed amicitia remissior esse ' +
      'debet et liberior et dulcior et ad omnem comitatem facilitatemque proclivior.'));

    this.posts.push(new Post('Mon deuxième post', 'Montius nos tumore inusitato quodam et novo ut rebellis et maiestati ' +
      'recalcitrantes Augustae per haec quae strepit incusat iratus nimirum quod contumacem praefectum, quid rerum ordo postulat ' +
      'dissimulantem formidine tenus iusserim custodiri.'));

    this.posts.push(new Post('Mon troisième post', 'Eodem tempore etiam Hymetii praeclarae indolis viri negotium est ' +
      'actitatum, cuius hunc novimus esse textum. cum Africam pro consule regeret Carthaginiensibus victus inopia iam lassatis, ex ' +
      'horreis Romano populo destinatis frumentum dedit, pauloque postea cum provenisset segetum copia, ' +
      'integre sine ulla restituit mora.'));
  }
}
