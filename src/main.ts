import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { AppComponent } from './app/app.component';
import { HomeComponent } from './app/home.component';

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter([
      { path: '', component: HomeComponent },
      {
        path: 'menu-completo',
        loadChildren: () => import('./app/menu-completo/menu-completo.module').then((m) => m.MenuCompletoModule)
      },
      { path: '**', redirectTo: '' }
    ])
  ]
}).catch((error) => console.error(error));
