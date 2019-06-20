import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }    from '@angular/forms';
import { HttpClientModule }    from '@angular/common/http';

import { AppRoutingModule }     from './app-routing.module';
import {FilterPipe}             from './pipes'
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { CarouselComponent } from './carousel/carousel.component';
import { FooterComponent } from './footer/footer.component';
import { NewmoviesComponent } from './newmovies/newmovies.component';
import { HighestratedComponent } from './highestrated/highestrated.component';
import { AwardsComponent } from './awards/awards.component';
import { TheatresnearbyComponent } from './theatresnearby/theatresnearby.component';
import { MoviepageComponent } from './moviepage/moviepage.component';
import { SearchbarComponent } from './searchbar/searchbar.component';
import { OldmoviepageComponent } from './oldmoviepage/oldmoviepage.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    CarouselComponent,
    FooterComponent,
    NewmoviesComponent,
    HighestratedComponent,
    AwardsComponent,
    TheatresnearbyComponent,
    MoviepageComponent,
    SearchbarComponent,
    FilterPipe,
    OldmoviepageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,

    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.
    // HttpClientInMemoryWebApiModule.forRoot(
    //   InMemoryDataService, { dataEncapsulation: false }
    // )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
