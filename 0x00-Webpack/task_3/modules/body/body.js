import $ from 'jquery';
import _ from 'lodash';
import '../body/body.css';

let count = 0;

function updateCounter() {
  count += 1;
  $('#count').text('${count} clicks on the button');
}

$('body').append('<p>Holberton Dashboard</p>');
$('body').append('<p>Dashboard data for the students</p>');
$('body').append('<button>Click here to get started</button>');
$('body').append('<p id="count"></p>');

$('button').on('click', _.debounce(updateCounter, 500));
