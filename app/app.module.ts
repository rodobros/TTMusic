import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

// application routing
import { routing } from './app.routing';

// components imports
import { AppComponent } from './components/app/app.component'
import { MusicSheetComponent } from './components/music-sheet/music-sheet.component'
import { StartDashboardComponent } from './components/start-dashboard/start-dashboard.component'

//service imports
import { MusicSheetSettingsService } from './services/music-sheet-settings-service/music-sheet-settings.service'
import { TimerEventsManagerService } from './services/timer-events-service/TimerEventsManager.service'
import { AppConstantsService } from './services/app-constants-service/AppConstants.service'
import { ApplicationImageSpriteService } from './services/ApplicationImagesSpriteService/ApplicationImageSprite.service'



@NgModule({
  imports: [ 
  	BrowserModule,
  	FormsModule,
    routing
   ],
  declarations: [ 
  	AppComponent,
    MusicSheetComponent,
    StartDashboardComponent
  ],
  bootstrap: [ AppComponent ],
  providers : [ MusicSheetSettingsService,
  TimerEventsManagerService,
  AppConstantsService,
  ApplicationImageSpriteService ]
})

export class AppModule { }