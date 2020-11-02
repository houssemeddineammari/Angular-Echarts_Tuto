import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LineChartComponent } from './charts/line-chart/line-chart.component';
import { NgxEchartsModule } from 'ngx-echarts';
import * as echarts from 'echarts';



@NgModule({
  declarations: [
    AppComponent,
    LineChartComponent
  ],
  imports: [
    BrowserModule,
    NgxEchartsModule.forRoot({ echarts })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
