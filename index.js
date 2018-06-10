
$(document).ready(function(){
    $("#myBtn").click(function(){
        $("#myModal").css("display","block");
    });
    $(".close").click(function(){
        $("#myModal").css("display","none");
    });
   $(".modal-content").ready(function(){
    $(".modal").not(".modal-content").click(function(){
        $(".modal").css("display","none");
    });
});
});
