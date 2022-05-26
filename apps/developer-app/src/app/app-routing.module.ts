import { NgModule } from '@angular/core';
import { ExtraOptions, RouterModule } from '@angular/router';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';
import { ReadComponent } from './read/read.component';

export const routingConfiguration: ExtraOptions = {
  paramsInheritanceStrategy: 'always',
  relativeLinkResolution: 'legacy',
};

@NgModule({
  imports: [
    RouterModule.forRoot(
      [
        { path: '', redirectTo: '/create', pathMatch: 'full'},
        { path: 'create', component: CreateComponent },
        { path: 'read', component: ReadComponent },
        { path: 'edit', component: EditComponent}
      ],
      routingConfiguration
    ),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
