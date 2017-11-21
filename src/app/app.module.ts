import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {AngularEchartsModule} from 'ngx-echarts';
import {BarComponent} from './bar/bar.component';
import {PieComponent} from './pie/pie.component';
import {LineComponent} from './line/line.component';
import {AreaComponent} from './area/area.component';
import {SplashesComponent} from './splashes/splashes.component';
import {BubbleComponent} from './bubble/bubble.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {PointdensityComponent} from './pointdensity/pointdensity.component';
import {HybirdComponent} from './hybird/hybird.component';

import {AccordionModule, PanelMenuModule} from 'primeng/primeng';

@NgModule({
  declarations: [
    AppComponent,
    BarComponent,
    PieComponent,
    LineComponent,
    AreaComponent,
    SplashesComponent,
    BubbleComponent,
    DashboardComponent,
    PointdensityComponent,
    HybirdComponent
  ],
  imports: [
    BrowserModule,
    AngularEchartsModule,
    AccordionModule,
    PanelMenuModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
