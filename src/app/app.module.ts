import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuBarComponent } from './components/menu-bar/menu-bar.component';
import { MenuTitleComponent } from './components/menu-title/menu-title.component';
import { BigCardComponent } from './components/big-card/big-card.component';
import { SmallCardComponent } from './components/small-card/small-card.component';
import { HomeComponent } from './pages/home/home.component';
<<<<<<< HEAD
import { ContentComponent } from './pages/content/content.component';
=======
>>>>>>> 039cfe6e82e0f7f33a60c416d7c7a45d23eeedf9

@NgModule({
  declarations: [
    AppComponent,
    MenuBarComponent,
    MenuTitleComponent,
    BigCardComponent,
    SmallCardComponent,
<<<<<<< HEAD
    HomeComponent,
    ContentComponent
=======
    HomeComponent
>>>>>>> 039cfe6e82e0f7f33a60c416d7c7a45d23eeedf9
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
