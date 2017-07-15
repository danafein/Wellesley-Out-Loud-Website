//Function to send e-mail with questions about WOL.
function sendMessage(){
    var name = $('#name').val();
    var email = $('#email').val();
    var message = $('#message').val();

    var url = 'http://cs.wellesley.edu/~dfeinsch/mailto_dfeinsch_at_wellesley_edu.php';
    var what = {from_name: name,
                from_email: email,
                subject: 'WOL Question from ' + name,
                body: message};
    console.log(message);
    $.post(url, what, responder, 'json');

}

//Response handler for the sendMessage function.
function responder(responseObj) {
    if(responseObj.status == "ok" ) {
        $('#results').html('Your message has been sent!');
        $('#results').css('color','#FAEBD7');
    } else {
        $('#results').html('Something went wrong. Try again!');
        $('#results').css('color','#FAEBD7');
    }
}

$('#sendbutton').click(sendMessage);

//Function to put a picture and quote of the featured poet for each day of the week.
function poet_of_day() {
    var dateObj = new Date();
    var day = dateObj.getDay();

    if (day == 0 || day == 6){
        $("#poet").html('<img src="images/janae_johnson.jpeg" alt="Janae Johnson"><br>');
        $("#poet").append('Janae Johnson<br>');
        $("#poet").append('"You come from a long line of healthy hips and glass jaws but I swear they ain’t never gonna see you in pieces. We don’t break that easily."');
    }
    else if (day == 1){
        $("#poet").html('<img src="images/crystal_valentine.jpeg" alt="Crystal Valentine"><br>');
        $("#poet").append('Crystal Valentine<br>');
        $("#poet").append('"I was never prey, but I was always preyed upon."');
    }
    else if (day == 2){
        $("#poet").html('<img src="images/neiel_israel.jpeg" alt="Neiel Israel"><br>');
        $("#poet").append('Neiel Israel<br>');
        $("#poet").append('"When a black man walks, he is always hunted, he is always animal, he is always standing out like a living corpse."');
    }
    else if (day == 3){
        $("#poet").html('<img src="images/neil_hilborn.jpeg" alt="Neil Hilborn"><br>');
        $("#poet").append('Neil Hilborn<br>');
        $("#poet").append('"She told me that she shouldn’t have let me get so attached to her; that this whole thing was a mistake, but,How can it be a mistake when I don’t have to wash my hands after I touch her? Love is not a mistake, and it’s killing me that she can run away from this and I just can’t."');
    }
    else if (day == 4){
        $("#poet").html('<img src="images/marshall_gillson.jpeg" alt="Marshall Gillson"><br>');
        $("#poet").append('Marshall Gillson<br>');
        $("#poet").append('"Their sneers dare us to be black in their presence. Challenge accepted."');
    }
    else {
        $("#poet").html('<img src="images/porsha_o.jpeg" alt="Porsha O"><br>');
        $("#poet").append('Porsha O<br>');
        $("#poet").append('"I will tie the American dream around your neck and laugh while you lynch yourself just for a dime"');
    }
}

poet_of_day();

var dateObj = new Date();
function events_today(){
    var the_month = dateObj.getMonth();
    var the_date = dateObj.getDate();

    if (the_date == 18 && the_month == 8){
        $("#today").show();
        $("#today").append("POC Open Mic tonight at 7PM in the Pub!");
    }
    else if (the_date == 13 && the_month == 10){
        $("#today").show();
        $("#today").append("Mental Health Open Mic tonight at 7PM in the Pub!");
    }

    else{
        $("#today").hide();
    }
}

events_today();
//this function makes only the spam for the current semester visible, and changes the visible spam in January and July//
function semester_event(){
    var the_month = dateObj.getMonth();

    if (the_month >= 7){
        $("#fall_event_spam").show();
        $("#spring_event_spam").hide();

    }
    else if (the_month < 7){
        $("#fall_event_spam").hide();
        $("#spring_event_spam").show();
    }

}

semester_event();
