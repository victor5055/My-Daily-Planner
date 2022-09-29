// moment function to display current date and time iterations
$(document).ready(function () {
    $('#currentDay').html(moment().format('dddd, MMMM Do YYYY'));

    console.log(moment());

    var time = moment();
    var hour = moment().hours();
