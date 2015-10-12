//user enters city name #city-type
//clicks button #submit-btn
//image of city returned



$(document).ready(function(){
function search () {
event.preventDefault();
var entry = $('#city-type').val();
if ((entry =='Austin')||(entry == 'ATX')){
$("body").css('background', 'url(images/austin.jpg)');
}
if ((entry =='LA')||(entry == 'LAX')||(entry == 'Los Angeles')){
$("body").css('background', 'url(images/la.jpg)');
}
if ((entry =='SF')||(entry == 'San Francisco')||(entry == 'Bay Areas')){
$("body").css('background', 'url(images/sf.jpg)');
}
if ((entry =='NYC')||(entry == 'New York')||(entry == 'New York City')){
$("body").css('background', 'url(images/nyc.jpg)');
}
if ((entry =='SYD')||(entry == 'Sydney')){
$("body").css('background', 'url(images/sydney.jpg)');
}
}

$('form').click(search);

});

//function enter(){
//var entry = $('#city-type').val();
//if ('#city-type' == 'Austin'){
//$("body").css('background', 'url(images/austin.jpg)');

//}

//$('#entry').submit(enter);

//});
//function search(event){
//event.preventDefault();
//if ('#city-type' == 'Austin'){
//  $("body").css('background', 'url(images/austin.jpg)');


//console.log('hi');


//$('#submit-btn').click(search);
//$('#entry').submit(enter);
