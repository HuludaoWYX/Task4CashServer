$(document).ready( function(){
   init();

    function init(){
        console.log(2);
        $("#top").bind("click", function(){
            createPosting();
        });
        $("#tree").bind("click", function(){
            createPosting();
        });
        $("#bottom").bind("click", function() {
            gotoLocation();
        });
    }

    function createPosting(){
        // check login status
        console.log(1);
        location.href= "../../adult/addTask/addTask.html";
    }
    function gotoLocation(){
        location.href= "../../kid/mainPage/mainPage.html";
    }
});