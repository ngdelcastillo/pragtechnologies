// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// the compiled file.
//
// WARNING: THE FIRST BLANK LINE MARKS THE END OF WHAT'S TO BE PROCESSED, ANY BLANK LINE SHOULD
// GO AFTER THE REQUIRES BELOW.
//
//= require jquery
//= require jquery_ujs
//= require_tree .

var slider = ['Info', 'Profession', 'Education', 'Books'];
function formatText(index, panel){
  return slider[index -1];
}

$(function(){
  $('#slider1').anythingSlider({
    width               : 600,       // if resizeContent is false, this is the default width if panel size is not defined
	height              : 350,       // if resizeContent is false, this is the default height if panel size is not defined
	resizeContents      : false,     // If true, solitary images/objects in the panel will expand to fit the viewport
	autoPlay            : false,     // This turns off the entire slideshow FUNCTIONALY, not just if it starts running or not
	navigationFormatter : formatText // Format navigation labels with text
  });

  $("#slide-jump").click(function(){
    $('#slider1').anythingSlider(3);
    return false;
  });
});
