import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    },
    {
        path: 'login',
        loadComponent: () =>
            import('./features/authentication/login/login')
                .then(m => m.Login)
    },
    {
        path: 'forgot-password',
        loadComponent: () =>
            import('./features/authentication/forgot-password/forgot-password')
                .then(m => m.ForgotPassword)
    },
    {
        path: 'reset-password',
        loadComponent: () =>
            import('./features/authentication/reset-password/reset-password')
                .then(m => m.ResetPassword)
    },
    {
        path: '**',
        redirectTo: 'login'
    }


];
