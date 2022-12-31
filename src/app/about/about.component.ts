import { Component, OnInit } from '@angular/core';
import { AboutService } from '../services/about.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent implements OnInit {
  info: any;
  comments!: any[];

  commentaire = { date: new Date(), message: '' };

  //injector inject the service
  constructor(private aboutService: AboutService) {}

  ngOnInit(): void {
    // to retrive the data from the service with ngOnInit
    this.info = this.aboutService.getInfo();
    this.comments = this.aboutService.getAllComments();
  }

  //ajouter un commentaire a la liste
  onAddCommentaire() {
    this.aboutService.addcomment(this.commentaire);
    this.commentaire = { date: new Date(), message: '' };
    //this.comments.push(this.commentaire);
    //this.commentaire = { date: new Date(), message: '' }; //pour vider les cases crees dans la table commentaire par refrech
  }
}
