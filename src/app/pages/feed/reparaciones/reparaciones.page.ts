import { Component, OnInit, inject } from '@angular/core';
import { User } from '@angular/fire/auth';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Product } from 'src/app/models/product.model';
import { FirebaseService } from 'src/app/services/firebase.service';
import { UtilsService } from 'src/app/services/utils.service';
import { AddUpdateProductComponent } from 'src/app/shared/add-update-product/add-update-product.component';

@Component({
  selector: 'app-reparaciones',
  templateUrl: './reparaciones.page.html',
  styleUrls: ['./reparaciones.page.scss'],
})
export class ReparacionesPage implements OnInit {

  isAdmin:boolean =  false;

  firebaseSvc = inject(FirebaseService);
  utilsSvc = inject(UtilsService);


  products: Product[] = [];

  constructor(
    private afAuth: AngularFireAuth
  ) {
    
   }

  ngOnInit() {
    this.afAuth.authState.subscribe((user)=>{
      this.isAdmin =  user?.email === 'serviexpress@gmail.com';
    });
  }

  user(): User{
    return this.utilsSvc.getFromLocalStorage('user');
  }

  ionViewWillEnter() {
    this.gatProducts();
  }


  gatProducts(){
    let path = `users/${this.user().uid}/products`

    let sub =  this.firebaseSvc.getCollectionData(path).subscribe({
      next: (res:any)=>{
        console.log(res);
        this.products =  res;
        sub.unsubscribe();
      }
    })

  }


  addUpdateProduct(product?: Product){

    this.utilsSvc.presentModal({
      component: AddUpdateProductComponent,
      cssClass: 'add-update-modal',
      componentProps:{product}
    })
  }


  async confirmDeleteProduct(product: Product) {
    this.utilsSvc.presentAlert({
      header: 'Eliminar',
      message: '¿Quieres eliminar este servicio?',
      buttons: [
        {
          text: 'Cancelar',

        }, {
          text: 'Eliminar',
          handler: () => {
            this.deleteProduct(product)
          }
        }
      ]
    });
  

  }


  async deleteProduct(product:Product){
    

    let path = `users/${this.user().uid}/products/${product.id}`

    const loading = await this.utilsSvc.loading();
    await loading.present();



    this.firebaseSvc.deleteDocument(path).then(async res => {
      
      this.products  = this.products.filter(p => p.id !== product.id);

      this.utilsSvc.presentToast({
        message: 'Servicio eliminado exitosamente',
        duration: 1500,
        color: 'success',
        position: 'middle',
        icon: 'alert-circle-outline'
      })

 

    }).catch(error =>{
      console.log(error);

      this.utilsSvc.presentToast({
        message: error.message,
        duration: 2500,
        color: 'primary',
        position: 'middle',
        icon: 'alert-circle-outline'
      })


    }).finally(()=>{
      loading.dismiss();
    })
  
  
}

}
