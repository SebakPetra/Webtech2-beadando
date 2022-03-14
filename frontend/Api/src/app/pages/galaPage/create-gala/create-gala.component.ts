import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { CreateGalaDTO } from 'src/app/services/domain/settings/gala/gala';
import { ProductService } from 'src/app/services/domain/settings/gala/product.service';

@Component({
  selector: 'app-create-gala',
  templateUrl: './create-gala.component.html',
  styleUrls: ['./create-gala.component.css']
})
export class CreateGalaComponent implements OnInit {

  constructor(private snackBar: MatSnackBar, private router: Router, private service: ProductService) { }

  galaFormGroup = new FormGroup({
    title: new FormControl('', [Validators.required, Validators.maxLength(20)]),
    organizer: new FormControl('', [Validators.required, Validators.maxLength(20)]),
    date: new FormControl('', [Validators.required]),
    price: new FormControl('', [Validators.required]),
    sitting: new FormControl('', [Validators.required]),
  });
  gala: CreateGalaDTO;
  ngOnInit(): void { }

  succes() {
    this.snackBar.open('Sikeres létrehozás', 'Új termék', {
      duration: 1000,
    });
  }
  error() {
    this.snackBar.open('Sikertelen létrehozás', 'A gála már létezik', {
      duration: 1000,
    });
  }
  createProduct = () => {
    this.gala = {
      title: this.galaFormGroup.get('title').value,
      organizer: this.galaFormGroup.get('organizer').value,
      date: this.galaFormGroup.get('date').value,
      price: this.galaFormGroup.get('price').value,
      sitting: this.galaFormGroup.get('sitting').value,
    };
    this.service.createGala(this.gala.title, this.gala.organizer, this.gala.date, this.gala.price, this.gala.sitting).subscribe(val => {
      if (val != null) {
        this.succes();
      }

    }, (err) => {
      this.error();

    });
  }


}
