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
        ]
    }
})