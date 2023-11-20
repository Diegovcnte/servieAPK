import { Component, OnInit, inject,Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Product } from 'src/app/models/product.model';
import { User } from 'src/app/models/user.model';
import { FirebaseService } from 'src/app/services/firebase.service';
import { UtilsService } from 'src/app/services/utils.service';
@Component({
  selector: 'app-add-update-product',
  templateUrl: './add-update-product.component.html',
  styleUrls: ['./add-update-product.component.scss'],
})
export class AddUpdateProductComponent  implements OnInit {

  @Input() product: Product;


  form = new FormGroup({
    id : new FormControl(''),
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    price: new FormControl(null, [Validators.required, Validators.min(0)]),
    disponibilidad: new FormControl(null, [Validators.required, Validators.min(0)]),

  




  })

  firebaseSvc= inject(FirebaseService);
  utilsSvc = inject(UtilsService);

  user = {} as User;


  ngOnInit() {

    this.user  = this.utilsSvc.getFromLocalStorage('user');
    if(this.product) this.form.setValue(this.product);

  }

  submit(){
    if (this.form.valid){

      if(this.product) this.updateProduct();
      else this.createProduct()
    }
  }





  async createProduct(){
    

      let path = `users/${this.user.uid}/products`

      const loading = await this.utilsSvc.loading();
      await loading.present();

      delete this.form.value.id

      this.firebaseSvc.addDocument(path,this.form.value).then(async res => {
        
        this.utilsSvc.dismissModal({success:true});

        this.utilsSvc.presentToast({
          message: 'Servicio creado exitosamente',
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





  async updateProduct(){
    

      let path = `users/${this.user.uid}/products/${this.product.id}`

      const loading = await this.utilsSvc.loading();
      await loading.present();

      delete this.form.value.id

      this.firebaseSvc.updateDocument(path,this.form.value).then(async res => {
        
        this.utilsSvc.dismissModal({success:true});

        this.utilsSvc.presentToast({
          message: 'Servicio actualizado exitosamente',
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

