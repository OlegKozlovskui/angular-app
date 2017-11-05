import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LayoutModule } from './layout/layout.module';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app.routing.module';
import { AuthModule } from './auth/auth.module';
import { SharedModule } from './shared/shared.module';
import { ApiService } from './shared/services/api.service';
import { JwtService } from './shared/services/jwt.service';
import { AuthService } from './shared/services/auth.service';
import { HttpModule } from '@angular/http';
import { AuthGuard } from './auth/auth.guard';
import { UserService } from './shared/services/user.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    LayoutModule,
    SharedModule,
    AuthModule,
    AppRoutingModule,
  ],
  providers: [
    AuthGuard,
    ApiService,
    JwtService,
    AuthService,
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
