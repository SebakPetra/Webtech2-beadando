import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { CurrentUserService } from 'src/app/services/domain/auth/current-user/current-user.service';
import { Gala } from 'src/app/services/domain/settings/gala/gala.model';
import { ProductService } from 'src/app/services/domain/settings/gala/product.service';
import { CreateGalaComponent } from '../create-gala/create-gala.component';

@Component({
  selector: 'app-list-galas',
  templateUrl: './list-gala.component.html',
  styleUrls: ['./list-gala.component.css']
})
export class ListGalaComponent implements OnInit {

  constructor(private router: Router, public dialog: MatDialog, private service: ProductService, private currentUserService: CurrentUserService) { }

  user: string;
  ELEMENT_DATA: Gala[];
  displayedColumns: string[];
  dataSource: any;

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngOnInit(): void {
    // console.log(sessionStorage.getItem('currentUser'));
    this.user = this.currentUserService.getUsername();
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  // tslint:disable-next-line: use-lifecycle-interface
  ngAfterViewInit() {
    this.getAllProducts();
  }

  deleteProduct(product: Gala): void {

    this.service.deleteGala(product._id).subscribe(val => {
      console.log(val);
      alert('Sikeres törlés!');
      this.getAllProducts();
    });

  }

  editProduct(gala: Gala): void {
    localStorage.setItem('title', gala.title);
    localStorage.setItem('organizer', gala.organizer);
    localStorage.setItem('price', gala.price.toString());
    localStorage.setItem('sitting', gala.sitting.toString());
    this.router.navigate(['settings/gala', 'edit', gala._id]);
  }

  getAllProducts(): void {
    this.service.getGalas().subscribe(val => {
      this.ELEMENT_DATA = val;
      this.displayedColumns = ['title', 'organizer', 'date', 'price', 'sitting', 'delete'];
      this.dataSource = new MatTableDataSource(this.ELEMENT_DATA);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    });
  }
  navigateBack() {
    this.router.navigate(['../../']);
  }
  createProduct(): void {
    const dialogRef = this.dialog.open(CreateGalaComponent, {
      width: '400px',
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.getAllProducts();
    });
  }

  logout(): void {
    sessionStorage.clear();
    this.router.navigate(['../../']);
  }

}
