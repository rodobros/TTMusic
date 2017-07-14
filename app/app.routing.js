"use strict";
var router_1 = require('@angular/router');
var music_sheet_component_1 = require('./components/music-sheet/music-sheet.component');
var start_dashboard_component_1 = require('./components/start-dashboard/start-dashboard.component');
// import components here
var appRoutes = [
    {
        path: 'musicSheet',
        component: music_sheet_component_1.MusicSheetComponent
    },
    {
        path: '',
        redirectTo: 'startDashboard',
        pathMatch: 'full'
    },
    {
        path: 'startDashboard',
        component: start_dashboard_component_1.StartDashboardComponent
    }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map