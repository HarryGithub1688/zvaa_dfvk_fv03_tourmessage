sap.ui.define(['sap/fe/test/ListReport'], function(ListReport) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {},
        assertions: {}
    };

    return new ListReport(
        {
            appId: 'hab.zvaadfvk00006',
            componentId: 'TourMessageList',
            contextPath: '/TourMessage'
        },
        CustomPageDefinitions
    );
});