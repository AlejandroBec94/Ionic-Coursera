import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {DeseosProvider} from "../../providers/deseos";
import {Lista, ListaItem} from "../../models";

/**
 * Generated class for the AgregarPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-agregar',
  templateUrl: 'agregar.html',
})
export class AgregarPage {

  lista: Lista;
  nombreItem: string = "";

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public deseosService: DeseosProvider,
  ) {

    const titulo = this.navParams.get('titulo');
    this.lista = new Lista( titulo )

  }

  listaSeleccionada(lista: Lista) {

    console.log(lista)

  }
  agregarItem(){

    if(this.nombreItem.length === 0){
      return;
    }

    // @ts-ignore
    const nuevoItem = new ListaItem(this.nombreItem);
    this.lista.items.push(nuevoItem);
    this.nombreItem = "";

  }

  actualizarTarea(item:ListaItem){

    item.completado = !item.completado;

  }

  borrarItem(i:number){

    this.lista.items.splice( i,1 );

  }

}
