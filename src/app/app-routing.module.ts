import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { FamousDishesComponent } from './famous-dishes/famous-dishes.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { NonvegComponent } from './nonveg/nonveg.component';
import { SignupComponent } from './signup/signup.component';
import { SouthIndianComponent } from './south-indian/south-indian.component';
import { VegComponent } from './veg/veg.component';

const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'signup',component:SignupComponent},
  {path:'about',component:AboutComponent},
  {path:'contact',component:ContactComponent},
  {path:'footer',component:FooterComponent},
  {path:'famous-dishes',component:FamousDishesComponent},
  {path:'veg',component:VegComponent},
  {path:'nonveg',component:NonvegComponent},
  {path:'south-indian',component:SouthIndianComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
