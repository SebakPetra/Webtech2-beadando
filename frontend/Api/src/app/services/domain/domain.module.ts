import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Optional } from '@angular/core';
import { SkipSelf } from '@angular/core';
import { HttpUserController } from './auth/http-user-controller.service';
import { UserController } from './auth/user.controller.service';
import { HttpProductController } from './settings/gala/http-gala-controller.service';
import { GalaController } from './settings/gala/gala.controller.service';
import { GalaGuard } from 'src/app/pages/galaPage/gala.guard';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers:
    [
      GalaGuard,
      { provide: UserController, useClass: HttpUserController },
      { provide: GalaController, useClass: HttpProductController },
    ]
})
export class DomainModule {
  constructor(@Optional() @SkipSelf() parentModule: DomainModule) {
    if (parentModule) {
      throw new Error(
        'DomainModule is already loaded. Import it in the AppModule only');
    }
  }
}
