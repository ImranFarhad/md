"use strict"
$(document).ready(function(){
    $('#open').on('click',function(){
        $('ul').toggleClass('ul show');
        $('#open').toggle();
        $('#close').toggle();
        $('.toggle_span').toggle();
    })
    $('#close').on('click',function(){
        $('#open').toggle();
        $('#close').toggle();
        $('ul').toggleClass('ul show');
        $('.toggle_span').hide();
    })
    $('.toggle_span').on('click',function(){
        $('#open').toggle();
        $('#close').toggle();
        $('ul').toggleClass('ul show');
        $('.toggle_span').hide();
    })

    $('ul li a').on('click',function(){
        $('#open').toggle();
        $('#close').toggle();
        $('ul').toggleClass('ul show');
        $('.toggle_span').hide();
    })


})