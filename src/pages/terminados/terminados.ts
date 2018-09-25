import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {DeseosProvider} from "../../providers/deseos";
import {Lista} from "../../models";

/**
 * Generated class for the TerminadosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-terminados',
  templateUrl: 'terminados.html',
})
export class TerminadosPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public deseosService: DeseosProvider) {
  }


  listaSeleccionada(lista: Lista){

    console.log(lista)

  }

}
