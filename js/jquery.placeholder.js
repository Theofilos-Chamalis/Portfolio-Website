!function(a){function b(a){var b=a.attr("placeholder");c(a,b),a.focus(function(c){a.data("changed")!==!0&&a.val()===b&&a.val("")}).blur(function(c){""===a.val()&&a.val(b)}).change(function(b){a.data("changed",""!==a.val())})}function c(a,b){""===a.val()?a.val(b):a.data("changed",!0)}function d(b){var c=e(b);b.after(c),""===b.val()?b.hide():c.hide(),a(b).blur(function(a){""===b.val()&&(b.hide(),c.show())}),a(c).focus(function(a){b.show().focus(),c.hide()})}function e(b){return a("<input>").attr({placeholder:b.attr("placeholder"),value:b.attr("placeholder"),id:b.attr("id"),readonly:!0}).addClass(b.attr("class"))}function f(b){b.find(":input[placeholder]").each(function(){a(this).data("changed")!==!0&&a(this).val()===a(this).attr("placeholder")&&a(this).val("")})}"placeholder"in document.createElement("input")||a(document).ready(function(){a(":input[placeholder]").not(":password").each(function(){b(a(this))}),a(":password[placeholder]").each(function(){d(a(this))}),a("form").submit(function(b){f(a(this))})})}(jQuery);