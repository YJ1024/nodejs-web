function warnAlert(e){'"'==e.substr(0,1)&&'"'==e.substr(e.length-1,1)&&(e=e.substr(1,e.length-2));var o=document.createElement("div");o.className="alertPopbg",o.id="alertPopbg";var t=document.createElement("div");t.className="AlertDiv";var i=document.body.scrollTop||document.documentElement.scrollTop,n=document.documentElement.clientHeight;t.style.top=i+(n-100)/2+"px",t.innerHTML=e,t.id="alertmsgDiv",document.body.appendChild(t),document.body.appendChild(o),window.setTimeout("closewin()",2e3)}function closewin(){document.body.removeChild(document.getElementById("alertmsgDiv")),document.body.removeChild(document.getElementById("alertPopbg"))}function dangerAlert(e){$("body").append("<div class='alertPopbg'></div>"),$("#"+e).addClass("show").removeClass("hide"),$(".alertPopbg").click(function(){$(".alertPopbg").remove(),$("#"+e).addClass("hide").removeClass("show")})}function GetQueryString(e){var o=location.href,t=o.substring(o.indexOf("?")+1,o.length).split("&"),n={};for(i=0;j=t[i];i++)n[j.substring(0,j.indexOf("=")).toLowerCase()]=j.substring(j.indexOf("=")+1,j.length);var a=n[e.toLowerCase()];return"undefined"==typeof a?"":decodeURIComponent(a)}function addLocal(e,o){if(ifNotNull(getCookie("noLocal")))addCookie(e,o);else try{localStorage.setItem(e,o)}catch(t){addCookie("noLocal","true"),addCookie(e,o)}}function getLocal(e){return ifNotNull(getCookie("noLocal"))?getCookie(e):ifNotNull(localStorage.getItem(e))?localStorage.getItem(e):getCookie(e)}function delLocal(e){ifNotNull(getCookie("noLocal"))?addCookie(e,""):localStorage.removeItem(e)}function addCookie(e,o,t){var i=e+"="+escape(o),n=window.location.host;if(""!=t){var a=new Date;a.setTime(a.getTime()+24*t*3600*1e3),i+=";expires="+a.toGMTString()}i+=";path=/;domain="+n,document.cookie=i}function getCookie(e){for(var o=document.cookie.split(";"),t=0;t<o.length;t++){var i=o[t].split("=");if(i[0].trim()==e)return unescape(i[1])}}function createCookie(e,o,t,i){var i=i?i:"/";if(t){var n=new Date;n.setTime(n.getTime()+24*t*60*60*1e3);var a="; expires="+n.toGMTString()}else var a="";document.cookie=e+"="+o+a+"; path="+i}function ifNotNull(e){return null!=e&&"undefined"!=e&&"null"!=e&&"undefined"!=typeof e&&void 0!=e&&void 0!=typeof e?(e=$.trim(e+""),""!=e?!0:!1):!1}function popup(e,o,t){$("#popup").remove();var i="",n="",a="确定",d="取消",l="提示",p="",s="";e=e||{},l=e.txt_title||l,p=e.style||p,s=e.txt_style||s,a=e.txt_true||a,d=e.txt_false||d,i="2"==e.btn?'<span class="popup_false" id="popup_false">'+d+'</span><span class="popup_true" id="popup_true">'+a+"</span>":"3"==e.btn?'<span class="popup_false no-bg" id="popup_cant"  data-clipboard-text="dashebao110" data-clipboard-action="copy">'+d+'</span><span class="popup_true" id="popup_true">'+a+"</span>":'<span class="popup_true" style="margin: auto;" id="popup_true">我知道了</span>',n="无"==l?"hide":"popup_title";var c='<div class="loading_line" id="popup" style="visibility: visible;"><div class="box-middle"><div class="popup_box f26" '+p+'><div class="'+n+'">'+l+'</div><div class="popup_txt main-color" '+s+"><div>"+e.txt+'</div></div><div class="popup_bt">'+i+"</div></div></div></div>";$("body").append(c);var r=function(e){e.preventDefault(),$("#popup").hide()};$("#popup_true").bind("click",function(e){r(e),o&&o()}),$("#popup_cant").bind("click",function(e){r(e),t&&t()}),$("#popup_false").bind("click",function(e){r(e)})}function pageNoScroll(){$("body").css({position:"fixed",top:"0px",height:window.innerHeight,overflow:"hidden"})}function pageScroll(){$("body").css({position:"initial",height:"auto",overflow:"auto"})}$(function(){var e={init:function(){this.render(),this.bind()},render:function(){var e=this;e.nav_unit=$(".footer_nav .nav_unit")},bind:function(){var e=this;$(".footer_nav .home").find(".active").show(),$(".footer_nav .home").find(".default").hide(),e.nav_unit.click(function(){var e=$(".footer_nav .nav_unit");e.find("p a").css("color","#757575"),$(this).find("p a").css("color","#2196F3"),e.find("img:eq(0)").hide(),e.find("img:eq(1)").show(),$(this).find("img:eq(0)").show(),$(this).find("img:eq(1)").hide()})}};e.init()}),$("#zhezhao").click(function(){dangerAlert("sbjisuanqi-bili")}),$(".goBack").click(function(){history.back(-1)});var hideHead=$("#hideNavbar").val();"1"==hideHead&&$(".bar-nav").hide();var $body=$("body");$body.append('<script src="https://s13.cnzz.com/z_stat.php?id=1265433259&web_id=1265433259" language="JavaScript"></script>');