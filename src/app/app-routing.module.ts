import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ResultpageComponent } from './resultpage/resultpage.component';
import { SearchComponent } from './search/search.component';
const routes: Routes = [
  { path: '', component: SearchComponent },
  { path: 'result', component: ResultpageComponent},
  { path: 'search', component: SearchComponent}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [],
  exports: [RouterModule]
})
export class AppRoutingModule { }
