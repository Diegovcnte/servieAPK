import { Component, OnInit } from '@angular/core';
import { SwitchService } from 'src/app/services/switch.service';


@Component({
  selector: 'app-feed',
  templateUrl: './feed.page.html',
  styleUrls: ['./feed.page.scss'],
})
export class FeedPage implements OnInit {


  modalSwitch!:boolean;

  constructor(private modalSS:SwitchService) { }



  ngOnInit() {

    this.modalSS.$modal.subscribe((valor)=>{this.modalSwitch = valor})

  }


  openModal(){
    this.modalSwitch = true;
  }

}
