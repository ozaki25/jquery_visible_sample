$(function() {
  // variables
  var $title = $('.title');
  var $showButton = $('.show-button');
  var $hideButton = $('.hide-button');

  // listeners
  $showButton.on('click', onClickShow);
  $hideButton.on('click', onClickHide);

  // functions
  function onClickShow(e) {
    e.preventDefault();
    $title.show();
  }

  function onClickHide(e) {
    e.preventDefault();
    $title.hide();
  }
});
