import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//import { DetailPageComponent } from './detail-page/detail-page.component';
import { HomeComponent } from './home/home.component';
//import { SearchPageComponent } from './search-page/search-page.component';
// https://balta.io/blog/angular-rotas-guardas-navegacao
const routes: Routes = [
  { path: 'home', component: HomeComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
