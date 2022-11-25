import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  info={
    nom:"ben yakhlef",
    email: "amel.benyakhlef@gmail.com",
    tel:21084513
  };

  commentaire={date:new Date, message:""};
  comments=[
    {date: new Date, message:"A"},
    {date: new Date, message:"B"},
    {date: new Date, message:"C"}
  ];
  constructor() { }

  ngOnInit(): void {
  }

  //ajouter un commentaire a la liste
  onAddCommentaire(){
    this.comments.push(this.commentaire);
    this.commentaire={date: new Date, message:""}; //pour vider les cases crees dans la table commentaire par refrech 
  }

}
