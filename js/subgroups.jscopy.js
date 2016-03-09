

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

/*
* 函数说明：通过id获取对象
*
* @access  public
* @param   id       string  对象id
* @return  object
* @update  2015-10-27
*
*/
function $$(id){
    if(!document.getElementById) return;
    return document.getElementById(id);
}
/*
* 函数说明：某个函数需浏览器加载后运行，调用此函数即可
*
* @access  public
* @param   func    object  需要浏览器加载后调用的函数
* @return  无
* @update  2015-10-27
*
*/
function addLoadEvent(func){
    var oldonload = window.onload;
    if (typeof window.onload != 'function') {
        window.onload = func;
    }else {
        window.onload = function(){
            oldonload();
            func();
        }
    }
}

function jsCopy(id){
  alert(id);
    var copyObj = $$(id);
    // copyObj.select();
    // document.execCommand("Copy"); // 执行浏览器复制命令
}

function getAllJscopy(){
    alert("11");
    if(!document.getElementsByClassName) return;
    var allObj = document.getElementsByClassName("jscopy");
    for(var i=0; i<allObj.length; i++){
        // allObj[i].onclick = test;
    }
}

function test(obj){
  alert(obj.id);
}

addLoadEvent(getAllJscopy);
