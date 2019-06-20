import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NewmoviesComponent } from './newmovies/newmovies.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { CarouselComponent } from './carousel/carousel.component';
import { FooterComponent } from './footer/footer.component';
import { HighestratedComponent } from './highestrated/highestrated.component';
import { AwardsComponent } from './awards/awards.component';
import { TheatresnearbyComponent } from './theatresnearby/theatresnearby.component';
import { MoviepageComponent } from './moviepage/moviepage.component';
import { OldmoviepageComponent } from './oldmoviepage/oldmoviepage.component';

const routes: Routes = [
   { path: '', redirectTo: '/carousel', pathMatch: 'full' },
  { path: 'newmovies', component: NewmoviesComponent },
   { path: 'detail/:id', component: MoviepageComponent },
   { path: 'olddetail/:id', component: OldmoviepageComponent },
   { path: 'carousel', component: CarouselComponent },
   { path: 'highestrated', component: HighestratedComponent },
   { path: 'theatresnearby', component: TheatresnearbyComponent},
   { path: 'awards', component: AwardsComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }