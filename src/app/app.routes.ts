import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { authGuard } from './guards/authGuard/auth.guard';
import { ProfileComponent } from './pages/profile/profile.component';

export const routes: Routes = [
    {path: "", redirectTo: "login", pathMatch: "full"},
    {path: "login", component: LoginComponent},
    {path: "home", component: HomeComponent, canActivate: [authGuard]},
    {path: "profile", component: ProfileComponent, canActivate: [authGuard]},
];