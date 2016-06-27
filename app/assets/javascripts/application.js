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
    counter = localStorage.getItem('counter')
    if (counter == null) {
        counter = 0
    }
    counterLog = JSON.parse( localStorage.getItem('counterLog') )
    counterUpdate()
}

window.onbeforeunload = function() {
    localStorage.setItem('counter', counter)
    localStorage.setItem('counterLog', JSON.stringify(counterLog))
}

var logClear = function() {
    counterLog = []
}

var counter = 0

var counterChooseClass = function() {
   if (counter >= 10) {
       $(".counter").addClass("alert-danger")
    } else {
        $(".counter").removeClass("alert alert-danger")
    }
}

var counterUpdate = function() {
    counterChooseClass()
    $(".counter").text(counter)
 }

var counterDecrement = function() {
    counter--
    counterUpdate()
}

var counterIncrement = function() {
    counter++
    counterUpdate()
}

var counterReset = function() {
    counterLog.unshift("reset from ", counter, " at ", Date())
    counter = 0
    counterUpdate()
}

var counterDefaultValue = function() {
    counter = $(".counter-default").data("counter-default")
    counterUpdate()
}

$(document).ready(function() {
    $(".counter-default").click(counterDefaultValue)
    $(".counter-reset").click(counterReset)
    $(".counter-minus").click(counterDecrement)
    $(".counter-plus").click(counterIncrement)
    $(".log-clear").click(logClear)
})
