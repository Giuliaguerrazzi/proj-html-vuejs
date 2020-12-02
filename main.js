const app = new Vue ({
    el: '#app',
    data: {
        icons: [
            {
                link: 'home',
                name: 'Home'
            },
            {
                link: 'document',
                name: 'Pages',
            },
            {
                link: 'printer',
                name: 'Blog',
            },
            {
                link: 'cart',
                name: 'Shop',
            },
            {
                link: 'lab',
                name: 'Shortcodes'
            },
            {
                link: 'chat',
                name: 'Support'
            },
            {
                link: 'envelope',
                name: 'Contact'
            },
        ],

        months: [
            {
                month: 'OCTOBER 2014(2)'
            },
            {
                month: 'SEPTEMBER 2014(2)'
            },
            {
                month: 'AUGUSTU 2014(2)'
            },
            {
                month: 'JULY 2014(2)'
            },
            {
                month: 'JUNE 2014(2)'
            },
            {
                month: 'MAY 2014(1)'
            },            
        ],

        features: [
            {
                info: 'Friendly and welcoming place'
            },
            {
                info: 'Science and art classes'
            },
            {
                info: 'Positive learning environment'
            },
            {
                info: 'Educational field trips'
            },
            {
                info: 'Writing and reading classes'
            },
            {
                info: 'Science and art classes'
            },
        ],

        posts: [
            {
                image: '_09-150x150',
                lesson: 'Drawing and painting',
                data: 'October 3, 2014'
            },
            {
                image: '_10-150x150',
                lesson: 'Fall parents meeting day',
                data: 'October 3, 2014'
            },
            {
                image: '_08-150x150',
                lesson: 'Birthday in Kindergarten',
                data: 'September 20, 2014'
            },
        ]
    }
});
