sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'hab/zvaadfvk00006/test/integration/FirstJourney',
		'hab/zvaadfvk00006/test/integration/pages/TourMessageList',
		'hab/zvaadfvk00006/test/integration/pages/TourMessageObjectPage'
    ],
    function(JourneyRunner, opaJourney, TourMessageList, TourMessageObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('hab/zvaadfvk00006') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheTourMessageList: TourMessageList,
					onTheTourMessageObjectPage: TourMessageObjectPage
                }
            },
            opaJourney.run
        );
    }
);