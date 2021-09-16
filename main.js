var app = new Vue({
    el:"#root",
    data:{
        message:"ciao a tutti",
        myColor:["color1", "color2"],
        color:"color1"
    },
    methods:{
        this.color = (this.color== "color1")? "color2":"color1"
    }
}

);