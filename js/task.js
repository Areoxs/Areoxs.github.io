$(function () {
    "use strict";
    var flag = false; //global event flag
    $("button, input[type='button'], input[type='submit']").button()
        .bind('mouseup', function () {
            $(this).blur(); // prevent jquery ui button from remaining in the active state
        });
    $("#add-task").button({
        icons: {
            primary: "ui-icon-note"
        }
    }).click(function () {
        $("#new-task").dialog("open");
    });
    $("#new-task").dialog({
        modal: true,
        autoOpen: false,
        draggable: false,
        buttons: {
            "Добавить": function () {
                var $val = $("#task").val();
                if ($val === "") return false; //check value entered
                var $taskHtml = '<li><i class="fa fa-check complete" aria-hidden="true"></i>';
                $taskHtml += '<i class="fa fa-times del" aria-hidden="true"></i>';
                $taskHtml += '<span class="task_message"></span></li>';
                var $completetask = $($taskHtml);
                $completetask.find(".task_message").text($val);
                $("#task").val("");
                $completetask.hide();
                $("#new-check").prepend($completetask);
                $completetask.show('clip', 200).effect("highlight", {
                    color: "#151313"
                }, 400);
                $(this).dialog("close");

            },
            "Отмена": function () {
                $(this).dialog("close");
            }
        }
    });
    $("#new-check").on("click", ".complete", function () {
        var $task = $(this).parent("li");
        $task.slideUp(200, function () {
            $(this).detach();
            $("#old-check").prepend($(this));
            $(this).slideDown(200);
        });
    });

    $("#old-check,#new-check").on("click", ".del", function () {
        var $task = $(this).parent("li");
        $("#confirm-del").dialog({
            modal: true,
            autoOpen: false,
            draggable: false,
            buttons: {
                "Да": function () {
                    $task.effect("clip", function () {
                        $(this).remove();
                    });

                    $(this).dialog("close");
                },
                "Нет": function () {
                    $(this).dialog("close");
                }
            }
        });
        $("#confirm-del").dialog("open");
    });
    $(".sort").sortable({
        connectWith: ".sort",
        cursour: "pointer",
        placeholder: "false",
        cancel: ".del.complete"
    });
    $(document).mouseup(function (e) {
        var container = $("#sign_in,#sign_up");
        if (!container.is(e.target) && container.has(e.target).length === 0) {
            container.slideUp();
            $("#login,#reg").removeClass("a_active");
            $("#login,#reg").removeClass("b_active");
        }
    });
    $('#login,#reg').click(function (e) {
        e.preventDefault();
        if (flag) return false;
        flag = true;
        $(this).next('.sign_in,.sign_up').slideToggle(function () {
            flag = false;
        });
        $(this).toggleClass("a_active");
        $(this).toggleClass("b_active");
        $("#username,#username_primary").focus();
        if ($("#login").hasClass("a_active")) {
            $(".sign_up").slideUp();
            $("#reg").removeClass("a_active");
            $("#login").removeClass("a_active");
        } else if ($("#reg").hasClass("a_active")) {
            $(".sign_in").slideUp();
            $("#login").removeClass("a_active");
            $("#reg").removeClass("a_active");
        }
    });
});
/*
 $('#login,#reg').click(function(e){
     e.preventDefault();
    if(flag) return false;
    flag=true;
    $(this).next('.sign_in,.sign_up').slideToggle(function(){flag = false;});
     $(this).toggleClass("a_active");
     $(this).toggleClass("b_active");
     $("#username,#username_primary").focus();
     if($("#login").hasClass("a_active")){
        $(".sign_up").slideUp();
         $("#reg").removeClass("a_active");
          $("#login").removeClass("a_active"); 
        }
     else if($("#reg").hasClass("a_active")){
        $(".sign_in").slideUp();
         $("#login").removeClass("a_active"); 
         $("#reg").removeClass("a_active");
     }
 });
$(document).click(function(e) {
    if( $(e.target).closest("#login,#reg").length ) 
        return;
      $("#sign_in,#sign_up").slideUp();
    $("#login,#reg").removeClass("a_active");
     $("#login,#reg").removeClass("b_active");
      e.stopPropagation();     
});
*/