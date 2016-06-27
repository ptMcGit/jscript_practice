// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require twitter/bootstrap
//= require turbolinks
//= require_tree .

var count = 1

var counterDecrement = function() {
    console.log("decrement", count)
    count--
}

var counterIncrement = function() {
    console.log("increment", count)
    count++
}

var counterReset = function() {
    console.log("reset", count)
    count = 0
}

$(document).ready(function() {
    $(".counter-minus").click(counterDecrement)
    $(".counter-plus").click(counterIncrement)
})
