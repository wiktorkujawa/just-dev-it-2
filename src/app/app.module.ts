import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PublicLayoutComponent } from './modules/public/public-layout/public-layout.component';
import { AdminLayoutComponent } from './modules/admin/admin-layout/admin-layout.component';
import { MaterialModule } from './modules/shared/material/material.module';
import { AuthComponent } from './modules/public/components/elements/auth/auth.component';
import { DateTimePickerField } from './modules/shared/material/custom-formly/date-time-picker/date-time-picker.component';
import { FormlyModule } from '@ngx-formly/core';
import { InfoComponent } from './modules/public/components/pages/info/info.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from 'src/environments/environment';
import { HttpClientModule } from '@angular/common/http';
import * as fromUser from './auth/store/reducers/user.reducer';
import { UserEffects } from './auth/store/effects/user.effects';
import { MatDialogModule } from '@angular/material/dialog';
import { ProjectsComponent } from './modules/public/components/pages/info/projects/projects.component';
import { SkillsComponent } from './modules/public/components/pages/skills/skills.component';
import { ExperienceComponent } from './modules/public/components/pages/experience/experience.component';
import { WasmAppComponent } from './modules/public/components/pages/wasm-app/wasm-app.component';

@NgModule({
  declarations: [
    AppComponent,
    PublicLayoutComponent,
    AdminLayoutComponent,
    AuthComponent,
    DateTimePickerField,
    InfoComponent,
    ProjectsComponent,
    SkillsComponent,
    ExperienceComponent,
    WasmAppComponent
  ],
  imports: [
    FormlyModule.forRoot({ extras: { lazyRender: true }, types: [
      { name: 'datetimepicker', component: DateTimePickerField },
    ] }),
    MatDialogModule,
    EffectsModule.forRoot([]),
    StoreModule.forRoot({}, {}),
    HttpClientModule,
    MaterialModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    StoreModule.forFeature(fromUser.userFeatureKey, fromUser.reducer),
    EffectsModule.forFeature([UserEffects])
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
