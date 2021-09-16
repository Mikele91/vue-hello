var app = new Vue({
    el:"#root",
    data:{
        message:"Cosa sarà mai ???",
        message2:"Benvenuto Vue Js",
        color:"color1",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/1200px-Vue.js_Logo_2.svg.png",
        visibile:false
    },
    methods: {
        changeColor :function(){
        this.color = (this.color== "color1")? "color2":"color1",
        this.visibile= (this.visibile == false)? true: false
        }
    }
}

);