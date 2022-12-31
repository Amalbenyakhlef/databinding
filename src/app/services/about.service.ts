import { Injectable } from '@angular/core';

@Injectable()
export class AboutService {
  info = {
    nom: 'ben yakhlef',
    email: 'amel.benyakhlef@gmail.com',
    tel: 21084513,
  };

  commentaire = { date: new Date(), message: '' };
  comments = [
    { date: new Date(), message: 'A' },
    { date: new Date(), message: 'B' },
    { date: new Date(), message: 'C' },
  ];

  //les methodes
  addcomment(c: any) {
    this.comments.push(c);
  }

  getInfo() {
    return this.info;
  }

  getAllComments() {
    return this.comments;
  }
}
