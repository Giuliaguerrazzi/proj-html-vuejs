const app = new Vue ({
    el: '#app',
    data: {
        showMenu: false,
        indexPhoto: 0,
        icons: [
            {
                link: 'home',
                name: 'Home',
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
                name: 'Shortcodes',
               
            },
            {
                link: 'chat',
                name: 'Support',
                
            },
            {
                link: 'envelope',
                name: 'Contact',
                
            },
    
        ],

        iconsHover: [
            {
                 link: 'home-2',
                 name: 'Home'
             },
             {
                 link: 'document-2',
                 name: 'Pages',
             },
             {
                 link: 'printer-2',
                 name: 'Blog',
             },
             {
                 link: 'cart-2',
                 name: 'Shop',
            },
            {
                 link: 'lab-2',
                 name: 'Shortcodes'
             },
             {
                 link: 'chat-2',
                 name: 'Support'
             },
             {
                link: 'envelope-2',
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
        ],

        photo: [
            './images/gallery_01-690x506.jpg',
            './images/gallery_07-690x506.jpg',
            './images/gallery_08-690x506.jpg',
        ],
    },
    methods: {
        visible() {
            this.showMenu = ! this.showMenu;
        },
        nextPhoto() {
            this.indexPhoto += 1;

            if(this.indexPhoto > (this.photo.length - 1)) {
                this.indexPhoto = 0;
            }
        },
        prevPhoto() {
            this.indexPhoto -= 1;
            
            if(this.indexPhoto < 0) {
                this.indexPhoto = this.photo.length - 1;
            }
        },    
    }
});
