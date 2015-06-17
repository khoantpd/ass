
//<![CDATA[
function FallingFlower1k()
{
var _this = '';
this.timer = '';
this.snowmax=70;
this.snowcolor=new Array("#FFFF00","#FFFF66","#FFFFCC");
this.snowtype=new Array("Wingdings");
this.snowletter="";
this.sinkspeed=0.6;
this.snowmaxsize=25;
this.snowminsize=8;
this.snow=new Array();
this.marginbottom;
this.marginright;
this.timer;
this.i_snow=0;
this.x_mv=new Array();
this.crds=new Array();
this.lftrght=new Array();
this.browserinfos=navigator.userAgent;
this.ie5=document.all&&document.getElementById&&!browserinfos.match(/Opera/);
this.ns6=document.getElementById&&!document.all;
this.opera=this.browserinfos.match(/Opera/);
this.browserok=this.ie5||this.ns6||this.opera;

this.randommaker = function (range) 
{ 
rand=Math.floor(range*Math.random());
return rand;
}

this.init = function() 
{
_this = this;
for (i=0;i<=this.snowmax;i++)
{
document.write("<span id='s"+i+"' style='position:absolute;top:-"+this.snowmaxsize+"'>"+this.snowletter+"</span>")
}

if (this.ie5 || this.opera) 
{
this.marginbottom = document.body.clientHeight;
this.marginright = document.body.clientWidth;
}

else if (this.ns6) 
{
this.marginbottom = window.innerHeight;
this.marginright = window.innerWidth;
}

this.snowsizerange= this.snowmaxsize - this.snowminsize;

for (i=0;i<=this.snowmax;i++) 
{
this.crds[i] = 0; 
this.lftrght[i] = Math.random()*15; 
this.x_mv[i] = 0.03 + Math.random()/10;
this.snow[i] = document.getElementById("s"+i);
this.snow[i].size = this.randommaker(this.snowsizerange) + this.snowminsize;
this.snow[i].sink = this.sinkspeed * this.snow[i].size / 5;
this.snow[i].posx = this.randommaker(this.marginright-this.snow[i].size); 
this.snow[i].posy = this.randommaker(6*this.marginbottom-this.marginbottom-6*this.snow[i].size);

this.snow[i].style.fontFamily = this.snowtype[this.randommaker(this.snowtype.length)];
this.snow[i].style.fontSize = this.snow[i].size;
this.snow[i].style.color = this.snowcolor[this.randommaker(this.snowcolor.length)];
this.snow[i].style.left = this.snow[i].posx + 'px';
this.snow[i].style.top = this.snow[i].posy + 'px';
}
}

this.animate = function() 
{
for (i=0;i<=_this.snowmax;i++) 
{ 
_this.crds[i] += _this.x_mv[i];
_this.snow[i].posy += _this.snow[i].sink;
_this.snow[i].style.left = _this.snow[i].posx + _this.lftrght[i] * Math.sin(_this.crds[i]) + 'px';
_this.snow[i].style.top = _this.snow[i].posy + 'px';

if(_this.snow[i].posy >= _this.marginbottom-6*_this.snow[i].size || parseInt(_this.snow[i].style.left) > (_this.marginright-20))
{
_this.snow[i].posx = _this.randommaker(_this.marginright-_this.snow[i].size);
_this.snow[i].posy = 0;
_this.snow[i].style.left = _this.snow[i].posx + 'px';
_this.snow[i].style.top = _this.snow[i].posy + '0px';
}
}
_this.timer = setTimeout(_this.animate,50);
}
}
//]]>


//<![CDATA[
var snow = new FallingFlower1k();
snow.init();snow.animate();
//]]>
