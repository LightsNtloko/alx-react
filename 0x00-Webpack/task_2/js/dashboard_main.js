<<<<<<< HEAD
import $ from 'jquery';
import _ from 'lodash';


// Elements in the body
$('body').append('<p>Holberton Dashboard</p>');
$('body').append('<p>Dashboard data for the students</p>');
$('body').append('<button>Click here to get started</button>');
$('body').append('<p id="count"></p>');
$('body').append('<p>Copyright - Holberton School</p>');

// Initiate the counter
let count = 0;

// This is the function that updates the counter
function updateCounter() {
    count += 1;
    $('#count').text('${count} clicks on the button');
}

// Debounce the click event to prevent excessive triggering
$('button').on('click', _.debounce(updateCounter, 300));
=======
import $ from 'jquery'
import _ from 'lodash'
import '../css/main.css';

let count = 0;

function updateCounter() {
  count += 1;
  $('#count').text(`${count} clicks on the button`);
}


$(document).ready(() => {
  $('body').append('<div id="logo"></div>');
  $('body').append('<p>Holberton Dashboard</p>');
  $('body').append('<p>Dashboard data for the students</p>');
  $('body').append('<button>Click here to get started</button>');
  $('body').append('<p id="count"></p>');
  $('body').append('<p>Copyright - Holberton School</p>');

  $('button').on('click', _.debounce(updateCounter, 500));
});
>>>>>>> b6cef58bb059e2066e6d85695aca16a9af879536
