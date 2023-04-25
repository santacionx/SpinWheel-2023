//Hello World of Phaser = Basic Game = Single Scene in Spin & Win Game
// How to create the basic skeleton for the game -> Game Loop
let spin =0;
let prizes_config = {
    count:10,
    prize_names : [
        "IPHONE 13 PRO",
        "1KILO GOLD",
        "NIKE VOUCHER",
        "1000$",
        "PUBG LITE VIP",
        "AMAZON VOUCHER",
        "IPAD MINI ",
        "XBOX",
        "TWITCH PRIME ",
        "NETFLIX PRIME 1 YEAR SUBSCRIPTION",
        
       
       
        
        
    
   ]
}



let config = {
    type : Phaser.CANVAS,
    width : 800,
    height:600,
    // backgroundColor : 0xffcc00,
    
    scene : {
        preload : preload,
        create : create,
        update : update,
    }
   
};
let game = new Phaser.Game(config);

function preload(){
    console.log("Preload");
    //load object, load some images
    this.load.image('background','3.jpg');
    // console.log(this);
    this.load.image('wheel','x.png');
    this.load.image('pin','pin.png');
    this.load.image('stand','stand.png');
       
}
function create(){
    console.log("Create");
    //create the background image
    let W = game.config.width;
    let H = game.config.height;
    
    let background = this.add.sprite(0,0,'background');
    // background.setPosition(W/2,H/2);
//     background.setScale(50);
   background.alpha=0.98;
    
     //lets create the stand
    let stand = this.add.sprite(W/2,H/2 + 250,'stand');
    stand.setScale(0.25);
    
    //lets create a pin
    let pin = this.add.sprite(W/2,H/2-245,"pin");
    pin.setScale(0.23);
    pin.depth = 1;
    
    //let create wheel
    this.wheel = this.add.sprite(W/2,H/2,"wheel");
    // this.wheel.setScale(0.20); 
    //this.wheel.alpha = 0.5;
    
    
    
    //event listener for mouse click
    this.input.on("pointerdown",spinwheel,this);
    
    //lets create text object
    font_style = {
        font : "bold 30px Arial",
        align : "center",
        color : "#FF6000",
    }
    this.game_text = this.add.text(10,10,"Welcome to Spin & Win",font_style);
    
    
    
}

//Game Loop
function update(){
    console.log("Inside Update");
    // this.wheel.angle += 1;
}

function spinwheel(){
    
    console.log("You clicked the mouse");
    console.log("Start spinning");
    //this.game_text.setText("You clicked the mouse!");
    
    let rounds = Phaser.Math.Between(2,4);
    let degrees = Phaser.Math.Between(0,11)*36;
    
    let total_angle = rounds*360 + degrees;
    console.log(total_angle);
    
    let idx = prizes_config.count - Math.floor(degrees/(360/prizes_config.count));
    
    
    tween = this.tweens.add({
        targets: this.wheel,
        angle: total_angle, 
        ease: "Cubic.easeOut",
        duration: 1000,
        callbackScope:this,
        onComplete:function(){
            if(prizes_config.prize_names[idx]==undefined ){
                spin++;
                if(spin>2){
                    this.game_text.setText("You won NETFLIX PRIME 1 YEAR SUBSCRIPTION  ") 
                }else{
                    this.game_text.setText("You won IPHONE 13 PRO   ")
                }
               
                
            }else{
                this.game_text.setText("You won  " + prizes_config.prize_names[idx]);
            }
            
        },
    });
    
}





