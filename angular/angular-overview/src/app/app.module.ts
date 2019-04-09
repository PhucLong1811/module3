import { BrowserModule } from '@angular/platform-browser';


import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ProfileComponent } from './profile/profile.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { FontSizeEditorComponent } from './font-size-editor/font-size-editor.component';
import { PetComponent } from './pet/pet.component';
import { CountdownTimerComponent } from './countdown-timer/countdown-timer.component';
import { NameCardComponent } from './name-card/name-card.component';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    CalculatorComponent,
    FontSizeEditorComponent,
    PetComponent,
    CountdownTimerComponent,
    NameCardComponent,
    ProgressBarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
