import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab2Page } from './tab2.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

import * as PlotlyJS from 'plotly.js/dist/plotly.js';
import { PlotlyModule } from 'angular-plotly.js';

 PlotlyModule.plotlyjs = PlotlyJS;

import { Tab2PageRoutingModule } from './tab2-routing.module';
import { ChartingComponent } from './charting/charting.component';
import { Tab1PageModule } from '../tab1/tab1.module';
import { VolatilityComponent } from './volatility/volatility.component';
import { OptionIoComponent } from './option-io/option-io.component';
import { VolChartComponent } from './vol-chart/vol-chart.component';
import { OptionchComponent } from '../optionch/optionch.component';


@NgModule({
    declarations: [Tab2Page,
        ChartingComponent, OptionIoComponent, VolatilityComponent, VolChartComponent,OptionchComponent],
    imports: [
        IonicModule,
        CommonModule,
        FormsModule,
        PlotlyModule,
        RouterModule,
        ExploreContainerComponentModule,
        Tab2PageRoutingModule,
        Ng2SearchPipeModule,
        Tab1PageModule,

    ],
    exports: [
        OptionchComponent,
        OptionIoComponent
    ],
})
export class Tab2PageModule {}
