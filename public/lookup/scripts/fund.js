$(function(){var a,t,e=60,n={init:function(){that=this,that.start(),that.accountPage()},start:function(){$("#loading").show();var t=$("#shebaoInfo"),e=t.data("flush"),n=5e3*e;setTimeout("that.getInfo()",n);var i=parseInt(10*Math.random()+50,10),d=0;a=setInterval(function(){if(i>d){d++;var a=d;$("#progressBar").text(a)}},95)},getInfo:function(){var a,t=$("#shebaoInfo"),e=t.data("sign"),n=(t.data("index"),t.data("cityid")),i=t.data("flush"),d=t.data("userid");$.ajax({type:"get",url:"/get_user_info",data:{sign:e,userId:d,city_id:n,type:"2",flush:i},dataType:"json",success:function(i){if("200"==i.code){a=i.data,$("#update").data("searchId",a.search_id);var d=t.children("p");t.find("div h3").text(a.name).siblings("span").text(a.pay_type),t.find("div p span").text(a.updated_at),d.eq(0).find("span").text(a.fund_account),d.eq(1).find("span").text(a.fund_balance),d.eq(2).find("span").text(a.total),d.eq(3).find("span").text(a.city_name),d.eq(4).find("span").text(a.company_name);var o=a.userId,s=$("#lookDetail").attr("href");$("#lookDetail").attr("href",s+"&userId="+o),$("#rongdai").attr("href","https://m.dashebao.com/dsbapi/three/index/city_id/"+n+"/userId/"+e+"/real_name/"+a.name+"/iden_card/"+a.idcard),that.timeLoop("succ")}else"204"==i.code&&that.timeLoop("fail")},error:function(){warnAlert("抱歉，系统发生错误")}})},timeLoop:function(n){if("succ"===n)e="succ",clearInterval(t),clearInterval(a),$("#shebaoInfo,.isHide").removeClass("hide"),$("#loading").hide(),$("#tip").addClass("hide"),$(".no-data").show();else{var i=parseInt(10*Math.random()+80,10);a=setInterval(function(){var a=$("#progressBar"),t=a.text();if(i>t){t++;var e=t;a.text(e)}},130),t=setInterval(function(){0==e?(clearInterval(a),clearInterval(t),$("#loading").hide(),$(".isHide").addClass("hide"),$("#shebaoInfo,#tip").removeClass("hide"),$(".no-data").hide()):e>0?(e--,console.log(e--)):(clearInterval(a),clearInterval(t))},1e3),setTimeout("that.getInfo()",5e3)}},accountPage:function(){var a=$("#shebaoInfo"),t=a.data("sign"),e=a.data("cityid"),n=$("#accountPage").data("isapp");$("#accountPage").click(function(){window.location.href="/account?sign="+t+"&type=2&is_app="+n}),$("#update").click(function(){var a=$(this).data("searchId");window.location.href="/index?sign="+t+"&city_id="+e+"&type=2&flush=1&is_app="+n+"&search_id="+a}),$("#addAccount").click(function(){window.location.href="/city?sign="+t+"&is_app="+n+"&type=2&flush=1"})}};n.init()});