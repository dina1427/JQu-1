
let boxWidth=$(".sideBar").width();
$(".openNav").click(function(){
    if( $(".sideBar").css('left')=='0px'){
        $(".sideBar").animate({left:-boxWidth},1000);
    }
else{
    $(".sideBar").animate({left:0},1000);
}
})
$(".sideBar a").click(function(){
    
    var sectionId= $(this).attr("href");
    
    var positionOfSection = $(sectionId).offset().top;
    
    $("html , body").animate({scrollTop:positionOfSection},2000);
    
})

$('#sliderDown .toggle').click(function(){
    $('.inner').not($(this).next()).slideUp(500);
    $(this).next().slideToggle(500);
})

window.onload = function() {
   
    countDownToTime("10 september 2023 10:00:00");
  }

  function countDownToTime(countTo) {
  
        let theDay = new Date(countTo);
        theDay= (theDay.getTime()/1000);

    let now = new Date();
    now = (now.getTime()/1000);

    timechange = (theDay- now);
        
   let days = Math.floor( timechange / (24*60*60));
   let hours = Math.floor((timechange - (days * (24*60*60))) / 3600);
   let mins = Math.floor((timechange - (days * (24*60*60)) - (hours * 3600 )) / 60);
   let secs = Math.floor((timechange - (days * (24*60*60)) - (hours * 3600) - (mins * 60)))


    $(".days").html(`${days} D`);
    $(".hours").html(`${hours} h`);
    $(".minutes").html(`${ mins } m`);
    $('.seconds').html(`${ secs} s`)

  
    setInterval(function() {  countDownToTime(countTo); }, 1000);
  }


let letters = 100;
$('textarea').keyup(function() {
  let length = $(this).val().length;
  let remainLetters = letters-length;
  if(remainLetters<=0)
            {
                 $("#chars").text("your available character finished");
                
            }
        else{
        
        $("#chars").text(remainLetters);
        }
});