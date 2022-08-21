import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AuthGuard } from './auth.guard';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { MoviesComponent } from './movies/movies.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { RegisterComponent } from './register/register.component';
import { TvShowsComponent } from './tv-shows/tv-shows.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', canActivate:[AuthGuard], component: HomeComponent},
  {path: 'about', canActivate:[AuthGuard], component: AboutComponent},
  {path: 'tv', canActivate:[AuthGuard], component: TvShowsComponent},
  {path: 'movies', canActivate:[AuthGuard], component: MoviesComponent},
  {path: 'moviesDetails/:id', canActivate:[AuthGuard], component: MovieDetailsComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: '**', component: NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
