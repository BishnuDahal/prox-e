"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.D3LineComponent = void 0;
const core_1 = require("@angular/core");
const theme_1 = require("@nebular/theme");
let D3LineComponent = class D3LineComponent {
    constructor(theme) {
        this.theme = theme;
        this.multi = [
            {
                name: 'Germany',
                series: [
                    {
                        name: '2010',
                        value: 7300,
                    },
                    {
                        name: '2011',
                        value: 8940,
                    },
                ],
            },
            {
                name: 'USA',
                series: [
                    {
                        name: '2010',
                        value: 7870,
                    },
                    {
                        name: '2011',
                        value: 8270,
                    },
                ],
            },
            {
                name: 'France',
                series: [
                    {
                        name: '2010',
                        value: 5002,
                    },
                    {
                        name: '2011',
                        value: 5800,
                    },
                ],
            },
        ];
        this.showLegend = true;
        this.showXAxis = true;
        this.showYAxis = true;
        this.showXAxisLabel = true;
        this.xAxisLabel = 'Country';
        this.showYAxisLabel = true;
        this.yAxisLabel = 'Population';
        this.themeSubscription = this.theme.getJsTheme().subscribe(config => {
            const colors = config.variables;
            this.colorScheme = {
                domain: [colors.primaryLight, colors.infoLight, colors.successLight, colors.warningLight, colors.dangerLight],
            };
        });
    }
    ngOnDestroy() {
        this.themeSubscription.unsubscribe();
    }
};
D3LineComponent = __decorate([
    core_1.Component({
        selector: 'ngx-d3-line',
        template: `
    <ngx-charts-line-chart
      [scheme]="colorScheme"
      [results]="multi"
      [xAxis]="showXAxis"
      [yAxis]="showYAxis"
      [legend]="showLegend"
      [showXAxisLabel]="showXAxisLabel"
      [showYAxisLabel]="showYAxisLabel"
      [xAxisLabel]="xAxisLabel"
      [yAxisLabel]="yAxisLabel">
    </ngx-charts-line-chart>
  `,
    }),
    __metadata("design:paramtypes", [theme_1.NbThemeService])
], D3LineComponent);
exports.D3LineComponent = D3LineComponent;