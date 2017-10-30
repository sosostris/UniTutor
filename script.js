// sidenav functions
$(document).ready(function () {
    $('#slideIcon').click(function() {
        $(".main").toggleClass("main-push-right");
        $(".sidenav").toggleClass("sidenav-open");
    });
});

// calendar functions
$(document).ready(function() {
    $(".active").click(function (){
        $(".bookingDetail").slideToggle();
    });
    $(".detailHeader > .material-icons").click(function () {
        $(".bookingDetail").slideUp();
    });
});

// tutoring booking functions
function showFreeTimeSlots() {
    $(".bookingDetail").slideToggle();
}

function bookSession() {
    $('#date30').css('background-color', 'crimson').css('color', 'white');
    $('#alertBookingDialog').hide();
    $('#bookedTimeSlot').hide();
    $('.bookingDetail').slideUp('slow');
}

function deleteBookedSession() {
    $('#date5').css('background-color', '#eee').css('color', '#777');
    $('#deleteDialog').css('display', 'none');
    $('#bookedSession').hide();
}

$(document).ready(function() {
    $(".course").click(function () {
        $(this).toggleClass("courseSelected");
    });
});

function toggleHT2017Courses() {
    $('.HT2017').toggle();
    if ($('.HT2017').css("display") === "none" &&
        $('.VT2017').css("display") === "none" &&
        $('.HT2016').css("display") === "none") {
        $('#courseHint').show();
    } else {
        $('#courseHint').hide();
    }
}

function toggleVT2017Courses() {
    $('.VT2017').toggle();
    if ($('.HT2017').css("display") === "none" &&
        $('.VT2017').css("display") === "none" &&
        $('.HT2016').css("display") === "none") {
        $('#courseHint').show();
    } else {
        $('#courseHint').hide();
    }
}

function toggleHT2016Courses() {
    $('.HT2016').toggle();
    if ($('.HT2017').css("display") === "none" &&
        $('.VT2017').css("display") === "none" &&
        $('.HT2016').css("display") === "none") {
        $('#courseHint').show();
    } else {
        $('#courseHint').hide();
    }
}

function showTutorsFound() {
	$('.tutorsFound').slideDown("slow");
}

function expandText() {
    $('.shortText').hide();
    $('.longText').show();
}

function collapseText() {
    $('.shortText').show();
    $('.longText').hide();
}

function bookSessionBySearch() {
    $('#alertBookingDialog').hide();
    $('#bookedTimeSlot').hide();
    $('.tutorsFound').slideUp('slow');
}

// dashboard
function giveFiveStars() {
    $('#zeroStar').hide();
    $('#fiveStars').show();
}