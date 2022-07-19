$(".contact-btn").click(function(){
    $(".blur-container").addClass("blur");
    $(".alert-container").removeClass("invisible");
})

$(".alert-btn").click(function(){
    $(".blur-container").removeClass("blur");
    $(".alert-container").addClass("invisible");
})