$(document).ready( function(){
    init();

    function init() {

        $(".headerTree, .headerText").hover(function () {
            $(".headerTree.light")[0].style.display = "none";
            $(".headerText.red")[0].style.display = "block";
            $(".headerTree.red")[0].style.display = "block";
            $(".headerText.light")[0].style.display = "none";
        }, function () {
            $(".headerTree.light")[0].style.display = "block";
            $(".headerText.red")[0].style.display = "none";
            $(".headerTree.red")[0].style.display = "none";
            $(".headerText.light")[0].style.display = "block";
        });
    }


});

function search(){
    var inputs= validateLocation();// validate inputs
    location.href= "../../kid/mainPage/mainPage.html" + "?"+ inputs.address + '&' + inputs.zip;

}
function validateLocation(){
    return {
        address: $("#address")[0].value,
        zip: $("#zip")[0].value
    }
}
