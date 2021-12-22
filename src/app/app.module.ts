import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatIconModule } from '@angular/material/icon';
import { BuilderModule } from '@builder.io/angular';
import { RouterModule } from '@angular/router';
import { ButtonNewComponent } from './button-new/button-new.component';
import { MatButtonModule } from '@angular/material/button';
import { SelectComponent } from './select/select.component';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { InputComponent } from './input/input.component';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    ButtonNewComponent,
    SelectComponent,
    InputComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatIconModule,
    BuilderModule.forRoot('fb39763560ba4c39959923ab41e49eec'),
    //MatButtonModule,
    MatSelectModule,
    MatFormFieldModule,
    BrowserAnimationsModule,
    MatInputModule,
    //MaterialModule,
    FormsModule,
  ],
  providers: [
    {provide: "MAT_FORM_FIELD_DEFAULT_OPTIONS", useValue: {floatLabel: 'always'}}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
