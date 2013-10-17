GAME_DEBUG = false;
Array.prototype.shuffle = function (){
    for(var rnd, tmp, i=this.length; i; rnd=parseInt(Math.random()*i), tmp=this[--i], this[i]=this[rnd], this[rnd]=tmp);
};
jQuery(document).ready(function(){
    Crafty.init(800,640);
    Crafty.scene('loading');

});
