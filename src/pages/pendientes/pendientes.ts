import {Component} from '@angular/core';
import {AlertController, IonicPage, NavController, NavParams} from 'ionic-angular';
import {DeseosProvider} from "../../providers/deseos";
import {Lista} from "../../models";
import {AgregarPage} from "../agregar/agregar";

/**
 * Generated class for the PendientesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-pendientes',
  templateUrl: 'pendientes.html',
})
export class PendientesPage {

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public deseosService: DeseosProvider,
    private alertCtrl: AlertController
  ) {

  }


  listaSeleccionada(lista: Lista) {

    console.log(lista)

  }

  agregarLista() {
    const alerta = this.alertCtrl.create(({

      title: 'Nueva lista',
      message: 'Nombre de la nueva lista que desea',
      inputs: [{
        name: 'titulo',
        placeholder: 'Nombre de la lista'
      }],
      buttons: [{
        text: "Cancelar"
      },
      {
        text:'Agregar',
        handler:data=>{
          if(data.titulo.length === 0){
            return ;
          }

          this.navCtrl.push(AgregarPage,{
            titulo:data.titulo
          });

          console.log(data)
        }
      }
      ]

    }));
    alerta.present()
  }

}
