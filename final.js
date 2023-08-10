




var number = Math.floor(Math. random() * 100) + 1;

console.log(number)

var x = parseInt("2");

console.log(x);

$("#rev").fadeOut(1,function(){
})

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms))
}

var name
var id

// function createNewCheckboxt(name, id){
//     var checkbox = document.createElement('input'); 
//     checkbox.type= 'checkbox';
//     checkbox.name = name;
//     checkbox.id = id;
//     return checkbox;
// }

// $("#checkboxes").append(createNewCheckboxt('theName', 'theID'));

var textid = "";
textid = (document.getElementById("toodo").value); 

var checkid = "";
var spanid = "";

spanid += 'b';
checkid += 'a';



function newCheckbox(){
    textid = (document.getElementById("toodo").value); 
    $("#checkboxes").append('<input type = "checkbox" id ="' + checkid + '"/><span id = "'+spanid+'">'+textid+'</span>')
    spanid += 'b';
    checkid += 'a';
}

console.log(checkid)
console.log(spanid)

$(function(){

$(document).on('click', "[type=checkbox]", function(event){  /* looks for a click on a button with an id of my-button */
    if($(event.target).is(':checked')) {
        $(event.target).fadeOut(1000,function(){    //theres also slideDown and slideUp.//
        })
        $(event.target).next().fadeOut(1000,function(){    //theres also slideDown and slideUp.//
        })
}
});

$('checkbox').siblings();
})







$(function(){
    $("#go").on('click',function(event) {  /* looks for a click on a button with an id of my-button */

      newCheckbox()
      console.log(checkid)
      console.log(spanid)
      execute()

        
    });
    });

    $(function(){
        $("#a").on('click',function(event) {  /* looks for a click on a button with an id of my-button */
            alert("yay you completed one");
            $("#a").fadeOut(1000,function(){    //theres also slideDown and slideUp.//
            })
            $("#b").fadeOut(1000,function(){    //theres also slideDown and slideUp.//
            })
        });
        });

        $(function(){
            $("#aa").on('click',function(event) {  /* looks for a click on a button with an id of my-button */
                alert("yay you completed one");
                $("#aa").fadeOut(1000,function(){    //theres also slideDown and slideUp.//
                })
                $("#bb").fadeOut(1000,function(){    //theres also slideDown and slideUp.//
                })
            });
            });


            $(function(){
                $("#3").on('click',function(event) {  /* looks for a click on a button with an id of my-button */
                    alert("yay you completed one");
                    $("#3").fadeOut(1000,function(){    //theres also slideDown and slideUp.//
                    })
                    $("#4").fadeOut(1000,function(){    //theres also slideDown and slideUp.//
                    })
                });
                });


                $(function(){
                    $("#d").on('click',function(event) {  /* looks for a click on a button with an id of my-button */
                        alert("yay you completed one");
                        $("#d").fadeOut(1000,function(){    //theres also slideDown and slideUp.//
                        })
                        $("#daa").fadeOut(1000,function(){    //theres also slideDown and slideUp.//
                        })
                    });
                    });
        








$(function() {
    $('.greeting').animate(
        {backgroundColor: 'red'},
        500,
        function() {
            alert("its red mo");

        }

    );
});






$(function() {

$(document).on("click", "[type=checkbox]", function(event){
$('#checkbox').click(function(event){
    if($(event.target).is(':checked')) {

        $(event.target).fadeOut(100,function(){
        })
}
});

$('#checkbox').siblings();
})
});






function execute(){
    var form;
    var constructor = new Constructor();
    var builder = new BidFormBuilder();
    constructor.setFormBuilder(builder);
    constructor.constructForm();
    constructor.displayForm();
    form = constructor.getForm();
    form.getSubmitButton().onclick = function cl() {
        var phone = form.getPhone().childNodes[1].childNodes[1];
        if (phone.value === '') {
            for (let i = 0; i < cars.length; i++) {
                $(function(){
                    $("#a").on('click',function(event) {  /* looks for a click on a button with an id of my-button */
                        alert("yay you completed one");
                        $("#a").fadeOut(1000,function(){    //theres also slideDown and slideUp.//
                        })
                        $("#b").fadeOut(1000,function(){    //theres also slideDown and slideUp.//
                        })
                    });
                    });
            
                    $(function(){
                        $("#aa").on('click',function(event) {  /* looks for a click on a button with an id of my-button */
                            alert("yay you completed one");
                            $("#aa").fadeOut(1000,function(){    //theres also slideDown and slideUp.//
                            })
                            $("#bb").fadeOut(1000,function(){    //theres also slideDown and slideUp.//
                            })
                        });
                        });
                execute();
              }
            
        }
    };
}