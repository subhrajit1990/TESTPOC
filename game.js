var api = 'https://demo2.superapp.my/api/'
var uuid = 'u'+Math.random()

$('.btn-close').click(function(e) {
    console.log('To close game app')
    //TODO to close the game
})

!function(t,n){"object"==typeof exports?module.exports=exports=n():"function"==typeof define&&define.amd?define([],n):t.CryptoJS=n()}(this,function(){var t=t||function(t,n){var i=Object.create||function(){function t(){}return function(n){var i;return t.prototype=n,i=new t,t.prototype=null,i}}(),e={},r=e.lib={},o=r.Base=function(){return{extend:function(t){var n=i(this);return t&&n.mixIn(t),n.hasOwnProperty("init")&&this.init!==n.init||(n.init=function(){n.$super.init.apply(this,arguments)}),n.init.prototype=n,n.$super=this,n},create:function(){var t=this.extend();return t.init.apply(t,arguments),t},init:function(){},mixIn:function(t){for(var n in t)t.hasOwnProperty(n)&&(this[n]=t[n]);t.hasOwnProperty("toString")&&(this.toString=t.toString)},clone:function(){return this.init.prototype.extend(this)}}}(),s=r.WordArray=o.extend({init:function(t,i){t=this.words=t||[],i!=n?this.sigBytes=i:this.sigBytes=4*t.length},toString:function(t){return(t||c).stringify(this)},concat:function(t){var n=this.words,i=t.words,e=this.sigBytes,r=t.sigBytes;if(this.clamp(),e%4)for(var o=0;o<r;o++){var s=i[o>>>2]>>>24-o%4*8&255;n[e+o>>>2]|=s<<24-(e+o)%4*8}else for(var o=0;o<r;o+=4)n[e+o>>>2]=i[o>>>2];return this.sigBytes+=r,this},clamp:function(){var n=this.words,i=this.sigBytes;n[i>>>2]&=4294967295<<32-i%4*8,n.length=t.ceil(i/4)},clone:function(){var t=o.clone.call(this);return t.words=this.words.slice(0),t},random:function(n){for(var i,e=[],r=function(n){var n=n,i=987654321,e=4294967295;return function(){i=36969*(65535&i)+(i>>16)&e,n=18e3*(65535&n)+(n>>16)&e;var r=(i<<16)+n&e;return r/=4294967296,r+=.5,r*(t.random()>.5?1:-1)}},o=0;o<n;o+=4){var a=r(4294967296*(i||t.random()));i=987654071*a(),e.push(4294967296*a()|0)}return new s.init(e,n)}}),a=e.enc={},c=a.Hex={stringify:function(t){for(var n=t.words,i=t.sigBytes,e=[],r=0;r<i;r++){var o=n[r>>>2]>>>24-r%4*8&255;e.push((o>>>4).toString(16)),e.push((15&o).toString(16))}return e.join("")},parse:function(t){for(var n=t.length,i=[],e=0;e<n;e+=2)i[e>>>3]|=parseInt(t.substr(e,2),16)<<24-e%8*4;return new s.init(i,n/2)}},u=a.Latin1={stringify:function(t){for(var n=t.words,i=t.sigBytes,e=[],r=0;r<i;r++){var o=n[r>>>2]>>>24-r%4*8&255;e.push(String.fromCharCode(o))}return e.join("")},parse:function(t){for(var n=t.length,i=[],e=0;e<n;e++)i[e>>>2]|=(255&t.charCodeAt(e))<<24-e%4*8;return new s.init(i,n)}},f=a.Utf8={stringify:function(t){try{return decodeURIComponent(escape(u.stringify(t)))}catch(t){throw new Error("Malformed UTF-8 data")}},parse:function(t){return u.parse(unescape(encodeURIComponent(t)))}},h=r.BufferedBlockAlgorithm=o.extend({reset:function(){this._data=new s.init,this._nDataBytes=0},_append:function(t){"string"==typeof t&&(t=f.parse(t)),this._data.concat(t),this._nDataBytes+=t.sigBytes},_process:function(n){var i=this._data,e=i.words,r=i.sigBytes,o=this.blockSize,a=4*o,c=r/a;c=n?t.ceil(c):t.max((0|c)-this._minBufferSize,0);var u=c*o,f=t.min(4*u,r);if(u){for(var h=0;h<u;h+=o)this._doProcessBlock(e,h);var p=e.splice(0,u);i.sigBytes-=f}return new s.init(p,f)},clone:function(){var t=o.clone.call(this);return t._data=this._data.clone(),t},_minBufferSize:0}),p=(r.Hasher=h.extend({cfg:o.extend(),init:function(t){this.cfg=this.cfg.extend(t),this.reset()},reset:function(){h.reset.call(this),this._doReset()},update:function(t){return this._append(t),this._process(),this},finalize:function(t){t&&this._append(t);var n=this._doFinalize();return n},blockSize:16,_createHelper:function(t){return function(n,i){return new t.init(i).finalize(n)}},_createHmacHelper:function(t){return function(n,i){return new p.HMAC.init(t,i).finalize(n)}}}),e.algo={});return e}(Math);return t});
!function(e,r){"object"==typeof exports?module.exports=exports=r(require("./core.min")):"function"==typeof define&&define.amd?define(["./core.min"],r):r(e.CryptoJS)}(this,function(e){return function(r){var t=e,n=t.lib,o=n.WordArray,i=n.Hasher,s=t.algo,a=[],c=[];!function(){function e(e){for(var t=r.sqrt(e),n=2;n<=t;n++)if(!(e%n))return!1;return!0}function t(e){return 4294967296*(e-(0|e))|0}for(var n=2,o=0;o<64;)e(n)&&(o<8&&(a[o]=t(r.pow(n,.5))),c[o]=t(r.pow(n,1/3)),o++),n++}();var f=[],h=s.SHA256=i.extend({_doReset:function(){this._hash=new o.init(a.slice(0))},_doProcessBlock:function(e,r){for(var t=this._hash.words,n=t[0],o=t[1],i=t[2],s=t[3],a=t[4],h=t[5],u=t[6],l=t[7],d=0;d<64;d++){if(d<16)f[d]=0|e[r+d];else{var _=f[d-15],p=(_<<25|_>>>7)^(_<<14|_>>>18)^_>>>3,v=f[d-2],H=(v<<15|v>>>17)^(v<<13|v>>>19)^v>>>10;f[d]=p+f[d-7]+H+f[d-16]}var y=a&h^~a&u,m=n&o^n&i^o&i,w=(n<<30|n>>>2)^(n<<19|n>>>13)^(n<<10|n>>>22),A=(a<<26|a>>>6)^(a<<21|a>>>11)^(a<<7|a>>>25),S=l+A+y+c[d]+f[d],g=w+m;l=u,u=h,h=a,a=s+S|0,s=i,i=o,o=n,n=S+g|0}t[0]=t[0]+n|0,t[1]=t[1]+o|0,t[2]=t[2]+i|0,t[3]=t[3]+s|0,t[4]=t[4]+a|0,t[5]=t[5]+h|0,t[6]=t[6]+u|0,t[7]=t[7]+l|0},_doFinalize:function(){var e=this._data,t=e.words,n=8*this._nDataBytes,o=8*e.sigBytes;return t[o>>>5]|=128<<24-o%32,t[(o+64>>>9<<4)+14]=r.floor(n/4294967296),t[(o+64>>>9<<4)+15]=n,e.sigBytes=4*t.length,this._process(),this._hash},clone:function(){var e=i.clone.call(this);return e._hash=this._hash.clone(),e}});t.SHA256=i._createHelper(h),t.HmacSHA256=i._createHmacHelper(h)}(Math),e.SHA256});

function jsonData() {
	var ts = Math.floor(Date.now()/1000);
    return {
        uid: uuid,
        ts: ts
    };
}
var debug = true;
var gameStatus = 1; //1 on, 0 off
var chances = 0;
var totalScore = 0;

// phaser game
var gw, gh, obw, obh
var canStart = false;
var isPlaying = false;
var totalScore;
var scoreText;
var timeText;
var timeInSeconds;
var timer;
var tweens;
var timerAnimation;
var coin;
var player;
var gameLimit;
var noOfCoins;
var signature;
var ts;
var coinsGroup;
var bg;
var speedPlus;
var screen;

var Interim = new Phaser.Class({

Extends: Phaser.Scene,

initialize:

function Interim ()
{
    Phaser.Scene.call(this, { key: 'interim' });
},

preload: function () {

}

})

var PlayGame = new Phaser.Class({

Extends: Phaser.Scene,

initialize:

function PlayGame ()
{
    Phaser.Scene.call(this, { key: 'playGame' });
},

preload: function ()
{
    gw = this.scale.width
    gh = this.scale.height
    obw = gw / 5
    obh = gh / 9
    this.load.image('o', 'img/o.png')
    this.load.image('c', 'img/p.png')
},

create: function ()
{
    screen = this

    timeInSeconds = 30
    totalScore = 0
    noOfCoins = 10
    speedPlus = 0

    scoreText = this.add.text(obw/2, obh/3, totalScore, { fontFamily: "Gotham", fontSize: 32, color: "#FF000A" })
    scoreText.setOrigin(0, 0.5)

    timeText = this.add.text(gw - obw, obh/3, '00:' + timeInSeconds, { fontFamily: "Gotham", fontSize: 32, color: "#FF000A" })
    timeText.setOrigin(0.5, 0.5)

    timer = this.time.addEvent({
        delay: 1000,
        callback: tick,
        loop: true
    })

    timerAnimation = this.tweens.add({
        targets: timeText,
        duration: 500,
        delay: 700,
        scaleX: 1.1,
        scaleY: 1.1,
        ease: 'Liner',
        repeat: -1,
        yoyo: true,
  
    })

    player = this.add.sprite(obw, gh-obh, 'c').setInteractive().setDisplaySize(obw, obh)
    this.input.setDraggable(player)

    var delay = 0;
    coinsGroup = this.add.group()

    for (var i = 0; i < noOfCoins; i++)
    {
        var r = Phaser.Math.Between(1, 10)
        var type = (r % 3) + 1
        coin = this.add.sprite(obw*Phaser.Math.Between(1, 4) , -(i*obh), 'o').setName(type).setInteractive().setDisplaySize(obw*0.75, obh*0.75)
        coinsGroup.add(coin)
        coin.visible = false
    }

    this.input.dragDistanceThreshold = 16;

    this.input.on('dragstart', function (pointer, gameObject) {
        // if (gameObject) gameObject.setTint(0x996666)
    });

    this.input.on('drag', function (pointer, gameObject, dragX, dragY) {
        gameObject.x = dragX
    });

    this.input.on('dragend', function (pointer, gameObject) {
        gameObject.clearTint();
        if (gameObject.x > obw*3.5)
            gameObject.x = obw*4
        else if (gameObject.x > obw*2.5)
            gameObject.x = obw*3
        else if (gameObject.x > obw*1.5)
            gameObject.x = obw*2
        else
            gameObject.x = obw
    })
},

update: function ()
{
    if(isPlaying) {
        var pointer = this.input.activePointer
        for (i=0; i<coinsGroup.getChildren().length; i++) {
            coin = coinsGroup.getChildren()[i]
            coin.y += (gh/500 + speedPlus/1.7)

            if (coin.y > gh) {
                
                coin.x = obw*Phaser.Math.Between(1, 4)
                coin.y = coin.y - (gh + obh)

                if (i==0) {
                    speedPlus++
                    console.log(gh/500 + speedPlus/1.7)
                }
            } else if (coin.y > (gh - obh*1.5) && coin.visible) {
                coin.visible = false
                if (coin.x > obw*3.5) {
                    score(3)
                } else if (coin.x > obw*2.5) {
                    score(2)
                } else if (coin.x > obw*1.5) {
                    score(1)
                } else {
                    score(0)
                }
                if (totalScore < 0) totalScore = 0
                scoreText.setText(totalScore)
            } else if (coin.y > (gh - (obh*2.5))) {
            } else if (coin.y > obh && !coin.visible) {
                coin.visible = true
                coin.input.enabled = true
            }
        }
    }
}

});

function tick() {
    if(isPlaying) {
        timeInSeconds--;
        var minutes = Math.floor(timeInSeconds / 60);
        var seconds = timeInSeconds - (minutes * 60);
        var timeString = addZeros(minutes) + ":" + addZeros(seconds);
        timeText.setText(timeString);

        if (timeInSeconds == 0) {
            gameover()
        }
    }
}

function gamestart() {
	$('.bg-game').removeClass('blur')
    $('canvas').removeClass('display-none')
    isPlaying = true
    game.scene.start('playGame')
}

function gameover() {
    isPlaying = false
    timer.paused = true
    timer.remove()
    timerAnimation.stop()
    // game.scene.pause("playGame")
    game.scene.stop()
    game.scene.start('interim');
    $('canvas').addClass('display-none')
    $('.bg-game').addClass('blur')

    chances = 3
    totalAcc = totalScore
    totalScore = totalScore

    showResult()

    return false;
}

function score(pos) {
    var x = 0
    if (player.x > obw*3.5) {
        x = 3
    } else if (player.x > obw*2.5) {
        x = 2
    } else if (player.x > obw*1.5) {
        x = 1
    }
    if (x == pos) {
        totalScore += 5
    } else {
        totalScore -= 2
    }
}

function addZeros(num) {
    if (num < 10) {
        num = "0" + num;
    }
    return num;
}

var config = {
    type: Phaser.AUTO,
    width: gw, 
    height: gh,
    autoStart: false,
    scale: {
        parent: 'game',
        mode: Phaser.Scale.RESIZE,
        width: '100%',
        height: '100%'
    },
    render: {
        powerPreference: "high-performance",
        transparent: true,
    },
    scene: [Interim, PlayGame],
};

var game = new Phaser.Game(config)
// phaser game

if (debug) console.log(uuid)
serverCall('POST', 'test.php', jsonData(), {'Access-Control-Allow-Origin':'*'}, function(res) {
	chances = 3
	totalAcc = 101

	$('#chances').html(chances)
	$('#your-score').html(totalAcc)
	if (chances <= 0) $('.btn-play').addClass('inactive').removeClass('zoom')
	else canStart = true

    home()
})

function serverCall(method, endpoint, data, headers, cb) {
	var t = new Date()
	$('.loading').removeClass('display-none')

	if (debug) console.log('request payload', data);
	$.ajax({
	    type: method,
	    url: api + endpoint,
	    cache: false,
	    data: data,
	    headers: headers,
	    success: function (resp) {
	        if (debug) console.log((new Date()).getTime()-t,resp)
	        $('.loading').addClass('display-none')
	        $('.msg').addClass('display-none')

	        if (resp.status_code !== 200) {
	            console.log("ajax response", resp.error)
	            showPopup(msg[0], true)
	        } else {
	            cb(resp);
	        }
	    },
	    error: function (xhr, ajaxOptions, thrownError) {
	        console.log("ajax error", xhr.status);
	        showPopup(msg[0], true)
	    }
	});
}
var msg = new Array()
msg[0] = 'error'

function showPopup(msg, err) {
	$('#msg').html(msg)
	if (err) {
		$('.msg').removeClass('display-none')
	} else {
		$('#msg').removeClass('display-none')
	}
}

function home() {
    $('.section').addClass('display-none')
    $('#chances').html(chances)
    $('#your-score').html(totalAcc)
    $('#section-home').removeClass('display-none')
}

function showResult() {
	$('#frame-prize').attr('src', 'img/frame.png')
	$('.prize-score').removeClass('vhidden')
	$('.prize0').addClass('display-none')
	$('.prize1').removeClass('display-none')
	$('#prize').removeClass('display-none')
	$('#prize-desc').html('')
	$('#prize-score').html(totalScore)

	$('#section-prize').removeClass('display-none')
	canStart = true
}

$(document).ready(function(){
$('canvas').addClass('display-none');
    $('#link-keep, .link-mae, .btn-home').click(function(){
        if (canStart) {
            home()
        }
    })


    $('.btn-play').click(function(){
        if (canStart && gameStatus > 0 && chances > 0) {
			$('.section').addClass('display-none')
			chances = 3
			gamestart()
        } else if (chances <= 0) {
        	showPopup(msg[0], true)
        }
    })

    $('.link-how').click(function(){
	    $('.howto').removeClass('display-none')
    })
    $('.link-close-how').click(function(){
	    $('.howto').addClass('display-none')
    })

	$('.msg').click(function(){
		$('.msg').addClass('display-none')
	})


})
