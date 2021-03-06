var app=new Vue({
    el: '#app',
    data:{
        firstrow:[ 
         {
            nome:"Download App",
            url:"http://www.asnlsdk.it"
        },

        {
            nome:"Advertise with us",
            url:"http://www.asnlsdk.it"
        }],

        nav:[
                
            {
                nome:"Home",
                url:"http://www.asnlsdk.it"
            },
        
            {
                nome:"Recipes",
                url:"http://www.asnlsdk.it"
             },
    
            {
                nome:"Places",
                url:"http://www.asnlsdk.it"
             },

            {
                nome:"Blog",
                url:"http://www.asnlsdk.it"
             },

            {
    
                nome:"About",
                url:"http://www.asnlsdk.it"
            
            },

            {
                nome:"Contact",
                url:"http://www.asnlsdk.it"
            },
        
        ],

        icons:["fas fa-search"],

        logohead:["img/avada-food-logo.png"],

        social:["fab fa-facebook-f","fab fa-instagram", "fab fa-twitter", "fab fa-youtube"],

        logofooter:["img/avada-food-logo-mob-2x-200x87.png"],

        contact:[
            {
                icon:"fas fa-map-marker-alt",
                info:" 775 New York Ave, Brooklyn, Kings, New York 11203"
            },

            {
                icon:"fas fa-phone",
                info:" + 0100-505-0000"
            },

            {
                icon:"fas fa-envelope",
                info:"info@yourdomain.com"
            }
        ],

        badges:[
            {
                img:"img/download-android.png",
                url:"http://www.asnlsdk.it"
            },

            {
                img:"img/download-app-store.png",
                url:"http://www.asnlsdk.it"
            }
        ],
        recipepics:["img/Mixed-fruits-400x263.jpg", "img/fi-water-side-rest-400x263.jpg", "img/r-michelle-tsang-500721-unsplash-min-400x263.jpg","img/Mixed-fruits-400x263.jpg", "img/fi-water-side-rest-400x263.jpg", "img/r-michelle-tsang-500721-unsplash-min-400x263.jpg","img/Mixed-fruits-400x263.jpg", "img/fi-water-side-rest-400x263.jpg"],

        culinarycards:[
            {
                nome:"BAKERY",
                img:"img/baking-recipes.png",
                url:"http://www.asnlsdk.it"
            }, 

            {
                nome:"DINNER",
                img:"img/dinner-recipes.png",
                url:"http://www.asnlsdk.it"
            },

            {
                nome: "DRINKS",
                img:"img/drinks-recipes.png",
                url:"http://www.asnlsdk.it"
            } ,

            {
                nome: "RECIPES",
                img:"img/premium-recipes.png",
                url:"http://www.asnlsdk.it"
            } ,

            {
                nome:"QUICK & EASY",
                img:"img/quick-easy-recipes.png",
                url:"http://www.asnlsdk.it"
            } ,

            {
                nome:"SOUPS",
                img:"img/soups-recipes.png",
                url:"http://www.asnlsdk.it"
            } ,

            {
                nome:"STAFF PICKS",
                img:"img/staff-picks.png",
                url:"http://www.asnlsdk.it"
            },

            {
                nome:"RECIPES",
                img:"img/baking-recipes.png",
                url:"http://www.asnlsdk.it"
            } ]
    }
})