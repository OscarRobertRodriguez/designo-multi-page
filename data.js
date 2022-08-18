
let web1 = "/assets/web-design/desktop/image-express.jpg"; 
let web2 = "/assets/web-design/desktop/image-transfer.jpg"; 
let web3 = "/assets/web-design/desktop/image-photon.jpg"; 
let web4 = "/assets/web-design/desktop/image-builder.jpg"; 
let web5 = "/assets/web-design/desktop/image-blogr.jpg"; 
let web6 = "/assets/web-design/desktop/image-camp.jpg"; 



let app1 = "/assets/app-design/desktop/image-airfilter.jpg"; 
let app2 = "/assets/app-design/desktop/image-eyecam.jpg"; 
let app3 = "/assets/app-design/desktop/image-faceit.jpg"; 
let app4 = "/assets/app-design/desktop/image-loopstudios.jpg"; 
let app5 = "/assets/app-design/desktop/image-todo.jpg"; 


let graph1 = "/assets/graphic-design/desktop/image-boxed-water.jpg"; 
let graph2 = "/assets/graphic-design/desktop/image-change.jpg"; 
let graph3 = "/assets/graphic-design/desktop/image-science.jpg"; 


const data = [
  {
    "webdesign" : {
      "projectCards" : [
        {   
            img: web1,
            title: 'express',
            info: 'A multi-carrier shipping website for ecommerce businesses'
        },
        {  
            img: web2,
            title: 'transfer',
            info: 'Site for low-cost money transfers and sending money within seconds'
        },
        {
            img: web3,
            title: 'photon',
            info: 'A state-of-the-art music player with high-resolution audio and DSP effects'
        },
        {
            img: web4,
            title: 'builder',
            info: 'Connects users with local contractors based on their location'
        },
        {
            img: web5,
            title: 'blogr',
            info: 'Blogr is a platform for creating an online blog or publication'
        },
        {
            img: web6, 
            title: 'camp',
            info: 'Get expert training in coding, data, design, and digital marketing'
        },

      ]
    },
    "appdesign" : {
        "projectCards" : [
            {  img: app1,
                title: 'airfilter',
                info: 'Solving the problem of poor indoor air quality by filtering the air'
            },
            { 
                img: app2,
                title: 'eyecam',
                info: 'Product that lets you edit your favorite photos and videos at any time'
            },
            {
                img: app3,
                title: 'faceit',
                info: 'Get to meet your favorite internet superstar with the faceit app'
            },
            {
                img: app4,
                title: 'todo',
                info: 'A todo app that features cloud sync with light and dark mode'
            },
            {
                img: app5 ,
                title: 'loopstudios',
                info: 'A VR experience app made for Loopstudios'
            },
        ]
    },

    "graphicdesign" :{
        "projectCards" : [
            {
                img: graph1 ,
                title: 'tim brown',
                info: "A book cover designed for Tim Brown’s new release, ‘Change’"
            },
            {
                img: graph2,
                title: 'boxed water',
                info: 'A simple packaging concept made for Boxed Water'
            },
            {
                img: graph3,  
                title: 'science!',
                info: 'A poster made in collaboration with the Federal Art Project'
            },
        ]
    }

  }
]

export default data; 