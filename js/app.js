particlesJS.load('particles-js', 'particles.json', function() {
});

document.getElementById('artistic').style.display = 'none';

$(document).ready(function(){
    $("#artist").click(function(){ 
        $("#coding").fadeOut(500);
        $("#artistic").fadeIn(500);
        $("body").css('background-color', '#2f3c4c');
    });
    $("#code").click(function(){ 
        $("#artistic").fadeOut(500);
        $("#coding").fadeIn(500);
        $("body").css('background-color', '#011C37');
    });
});

var typewriter = new Typewriter('#main', {
    strings: [
        'Full Stack Web Developer',
        'PHP',
        'CTF Player',
        'JavaScript',
        'NodeJS',
        'CSS3',
        'MongoDB',
        'BASH',
        'jQuery',
        'Docker',
        'HTML5',
        'Linux',
        'Git',
        'Bootstrap',
        'MySQL',
        'Responsive Design',
        'ExpressJS',
        'Python'
    ],
    autoStart: true,  
    loop: true
});