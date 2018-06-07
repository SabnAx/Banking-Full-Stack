import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Compte } from '../../domain/compte';
import { ComptesService } from '../../services/comptes.service';

@Component({
  selector: 'app-comptes-delete',
  templateUrl: './comptes-delete.component.html',
  styleUrls: ['./comptes-delete.component.css']
})
export class ComptesDeleteComponent implements OnInit {

  numCompte: string;
  compte: Compte = {'numero' : null, 'proprietaire': null, 'solde': null};

  constructor(private _router: ActivatedRoute,
             private _service: ComptesService,
             private _route: Router) { }

  ngOnInit() {
    this._router.params.subscribe(
      parametres => {
        this.numCompte = parametres['id'];
        this.getCompteById(this.numCompte);
      },
      error => console.log('Il y a eu une erreur lors de la navigation vers Delete. Détails : ' + error)
    );
  }

  getCompteById(id) {
    this._service.getCompteById(this.numCompte).subscribe(
      resp => this.compte = resp
    );
  }

  annulerDelete() {
    this._route.navigate(['/list']);
    console.log('Annulation du DELETE \nRetour à la vue list');
  }

  confirmerDelete() {

    this._service.deleteCompteById(this.numCompte).subscribe(
      res => {
        this._route.navigate(['/list']);
        console.log('Confirmation du DELETE \nRetour à la vue list'); },
      erreur => console.log(`ATTENTION : erreur lors du DELETE, Détails : ${erreur}. `)
    );
  }

}
