import { Routes } from '@angular/router';
import { LayaoutComponent } from './components/shared/layaout/layaout.component';

export const routes: Routes = [
    {
        path: '',
        component: LayaoutComponent,
        children: [
            {
                path: 'Home',
                loadComponent: () => import('./components/feature/rick-and-morty-view/rick-and-morty-view.component').then(m => m.RickAndMortyViewComponent)
            }
        ]
    }
];
