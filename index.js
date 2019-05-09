$(function() {
  var $title = $('.title');
  var $showButton = $('.show-button');
  var $hideButton = $('.hide-button');

  $showButton.on('click', onClickShow);
  $hideButton.on('click', onClickHide);

  function onClickShow(e) {
    e.preventDefault();
    $title.show();
  }

  function onClickHide(e) {
    e.preventDefault();
    $title.hide();
  }
});
