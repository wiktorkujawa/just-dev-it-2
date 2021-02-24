import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminLayoutComponent } from './modules/admin/admin-layout/admin-layout.component';
import { ExperienceComponent } from './modules/public/components/pages/experience/experience.component';
import { InfoComponent } from './modules/public/components/pages/info/info.component';
import { SkillsComponent } from './modules/public/components/pages/skills/skills.component';
import { PublicLayoutComponent } from './modules/public/public-layout/public-layout.component';

const routes: Routes = [
  {
    path: '',
    component: PublicLayoutComponent,
    children: [
      {
        path: '',
        component: InfoComponent,
        data: {animation: 'One'}
      },
      {
        path: 'skills',
        component: SkillsComponent,
        data: {animation: 'Two'}
      },
      {
        path: 'experience',
        component: ExperienceComponent,
        data: {animation: 'Three'}
      },
      {
        path: 'posts',
        data: { animation: 'Four'},
        loadChildren: () =>
          import('./modules/public/components/pages/posts/posts.module').then(
            (m) => m.PostsModule
          ),
      },
    ],
  },
  {
    path: 'admin',
    component: AdminLayoutComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
