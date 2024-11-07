import $ from 'jquery'
import _ from 'lodash'


$(document).ready(function () {
	$('body').append('<p>Holberton Dashbourd</p>');
	$('body').append('<p>Dashbourd data for the students</p>')
	$('body').append('<button>Click here to get started</button>')
	$('body').append('<p id="count"></p>');
	$('body').append('<p>Copyright - Holberton School</p>');

	let count = 0;

	function updateCounter() {
      count += 1;
	  $('#count').text(`${count} clicks on the button`);
	}

	const debouncedUpdateCounter = _.debounce(updateCounter, 500);
	
	$('button').on('click', debounceUpdateCounter);
});
