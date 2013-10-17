//Loading Scene
Crafty.scene("loading", function(){
    Crafty.background("gray");
    Crafty.e("2D, DOM, Text")
        .attr({w: 800, h: 20, x: 0, y: 120})
        .textFont({ size: '20px', weight: 'bold', family: 'Verdana'  })
        .text("Loading");

    Crafty.load(["assets/tableOnly762x464.png","assets/cards50x78.png"], function(){
        Crafty.background("SkyBlue");
       // Crafty('2D').addComponent('Tween').animate({alpha:0.0},1000);
        Crafty.scene("room");
    });
});