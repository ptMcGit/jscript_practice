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

var counterLog = []

window.onload = function() {
    counterLog = JSON.parse( localStorage.getItem('counterLog') )
}

window.onbeforeunload = function() {
    localStorage.setItem('counterLog', JSON.stringify(counterLog))
}

var logClear = function() {
    counterLog = []
}

var logSave = function() {
    localStorage.setItem('counterLog', JSON.stringify(counterLog))
}

var logLoad = function() {
    counterLog = localStorage['counterLog']
}


var counter = 0

var counterChooseClass = function() {
   if (counter >= 10) {
        console.log("counter > 10")
       $(".counter").addClass("alert-danger")
    } else {
        $(".counter").removeClass("alert alert-danger")
    }
}

var counterUpdate = function() {
    counterChooseClass()
    $(".counter").text(counter)
    console.log("update")
 }

var counterDecrement = function() {
    console.log(this)
    console.log("decrement", counter)
    counter--
    counterUpdate()
}

var counterIncrement = function() {
    console.log("increment", counter)
    counter++
    counterUpdate()
}

var counterReset = function() {
    counterLog.push("reset from ", counter, " at ", Date())
    counter = 0
    counterUpdate()
}

$(document).ready(function() {
    counterUpdate()
    $(".counter-reset").click(counterReset)
    $(".counter-minus").click(counterDecrement)
    $(".counter-plus").click(counterIncrement)
    $(".log-clear").click(logClear)
})
