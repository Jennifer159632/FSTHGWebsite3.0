$(".contact-btn").click(function(){
    $(".blur-container").addClass("blur");
    $(".alert-container").removeClass("invisible");
})

$(".alert-close").click(function(){
    $(".blur-container").removeClass("blur");
    $(".alert-container").addClass("invisible");
})

$(".bug-alert").click(function(){
    $(".blur-container").addClass("blur");
    $(".form-container").removeClass("invisible");
})

$(".form-close").click(function(){
    $(".blur-container").removeClass("blur");
    $(".form-container").addClass("invisible");
})