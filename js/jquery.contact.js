!function(a){"use strict";jQuery(document).ready(function(){a("#cform").submit(function(){var b=a(this).attr("action");return a("#message").slideUp(750,function(){a("#message").hide(),a("#submit").before('<img src="images/ajax-loader.gif" class="contact-loader" />').attr("disabled","disabled"),a.post(b,{name:a("#name").val(),email:a("#email").val(),comments:a("#comments").val()},function(b){document.getElementById("message").innerHTML=b,a("#message").slideDown("slow"),a("#cform img.contact-loader").fadeOut("slow",function(){a(this).remove()}),a("#submit").removeAttr("disabled"),null!=b.match("success")&&a("#cform").slideUp("slow")})}),!1})})}(jQuery);