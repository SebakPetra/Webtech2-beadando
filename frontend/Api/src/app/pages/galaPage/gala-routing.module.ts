import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateGalaComponent } from './create-gala/create-gala.component';
import { ListGalaComponent } from './listGalaPage/list-gala.component';

const routes: Routes = [
    { path: 'galas', component: ListGalaComponent },

];
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class GalaRoutingModule { }
