

(function(window){

//
var hasClass, addClass, removeClass;

if ( 'classList' in document.documentElement ) {//判断浏览器是否支持classList
	hasClass = function( elem, c ) {
		return elem.classList.contains( c );
    };
    addClass = function( elem, c ) {
        elem.classList.add( c );
    };
    removeClass = function( elem, c ) {
        elem.classList.remove( c );
    };
}else{
	hasClass = function( elem, c ) {
        return classReg( c ).test( elem.className );
    };
    addClass = function( elem, c ) {
        if ( !hasClass( elem, c ) ) {
            elem.className = elem.className + ' ' + c;
        }
    };
    removeClass = function( elem, c ) {
        elem.className = elem.className.replace( classReg( c ), ' ' );
    };
}

function toggleClass( elem, c ) {
  var fn = hasClass( elem, c ) ? removeClass : addClass;
  fn( elem, c );
}

var classie = {
  // full names
  hasClass: hasClass,
  addClass: addClass,
  removeClass: removeClass,
  toggleClass: toggleClass,
  // short names
  has: hasClass,
  add: addClass,
  remove: removeClass,
  toggle: toggleClass
};

// transport
if ( typeof define === 'function' && define.amd ) {
  // AMD
  define( classie );
} else {
  // browser global
  window.classie = classie;
}
})(window)

var test = (function(){
  //window.open("http://localhost/subgroups/","hello","width:320,height:480")
  //var bodyChilds = document.body;
  // alert(bodyChilds.nodeType);
  // alert(bodyChilds.childNodes.length);
})()

/**
*
*移动滚动条动态调整导航
*
*/ 
//var moveScrollAdjustHeader=(function(){var b=document.documentElement,g=document.querySelector(".header-main"),e=false,a=56;function f(){window.addEventListener("scroll",function(){if(!e){e=true;setTimeout(d,100)}},false);}function d(){var h=c();if(h>=a){classie.add(g,"header-main-shrink");}else{classie.remove(g,"header-main-shrink");}e=false;}function c(){return window.pageYOffset||b.scrollTop;}f();})();

/**
*
*添加移动设备导航
*去掉PC设备导航
*移动设备优先
*Mobile device priority
*
*/
// var mobileDevicePriority=(function(){
//   var m=document.querySelector(".m-header-home"),g=document.querySelector(".header-home"),t=document.querySelector(".tab-mobile-header"),s=document.getElementById("aboutus"),a=992;
//   function d(){
//     var w=r();
//     if(w>a){classie.remove(g,"hidden");classie.remove(t,"blank-56");classie.remove(s,"hidden");classie.add(m,"hidden");classie.add(t,"blank-120");}
//     else{}
//   }
//   function r(){
//     return $(window).width();
//   }
//   d();
// })()

