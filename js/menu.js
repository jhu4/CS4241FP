var thename= '';

var menuState = {
    preload: function(){
	},

    create: function(){
    	this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        this.scale.maxWidth = this.game.width*scaler;
        this.scale.maxHeight = this.game.height*scaler;
        this.scale.pageAlignHorizontally = true;
        this.scale.pageAlignVertically = true;
    	game.add.button(125,150,'playbutton',this.inputname,this,0,1,2);
    	game.add.button(125,350,'aboutbutton',this.displayabout,this,0,1,2);
    },

    inputname: function(){
    	//document.querySelector('canvas').setAttribute('hidden',true);
    	//document.getElementById('input').removeAttribute('hidden');
      // game.state.start('input');
      if(thename == ''){
        game.state.start('input');
      }else{
        game.state.start('play');
      }
    },

    displayabout: function(){
    	game.state.start('about');
    }

};
