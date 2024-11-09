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
