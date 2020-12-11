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
                icon:"ciao"
            }
        ]
    }
})