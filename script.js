// moment function to display current date and time iterations
$(document).ready(function () {
    $('#currentDay').html(moment().format('dddd, MMMM Do YYYY'));

    console.log(moment());

    var time = moment();
    var hour = moment().hours();

        // storage and user value recall function
        function plannerActions() {
            $('.time-block').each(function () {
                var id = $(this).attr('id');
                var userInput = localStorage.getItem(id);
    
                if (userInput != null) {
                    $(this).find('.description').val(userInput);
    
                }  
            });
        }

        plannerActions();
        var saveBtn = $('.saveBtn');
        saveBtn.on('click', function () {
            var id = $(this).parent().attr('id');
            var userInput = $(this).siblings('.description').val();
            localStorage.setItem(id, userInput);
        });