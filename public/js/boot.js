require.config({
    paths: {
        jQuery: '/js/lib/jquery/dist/jquery',
        Underscore: '/js/lib/underscore/underscore',
        Backbone: '/js/lib/backbone-amd/backbone',
        text: '/js/lib/requirejs-text/text',
        templates: '../templates'
    },
    shim: {
        'Backbone': ['Underscore', 'jQuery'],
        'ChallengeApp': ['Backbone']
    }
});
require(['ChallengeApp'], function(ChallengeApp) {
    ChallengeApp.initialize();
});
