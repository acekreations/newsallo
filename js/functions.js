$(document).ready(function(){

  //Cookies.set('preferences', "test array", { expires: 1 });
  //Cookies.remove('preferences');

  $('#channels li').attr("data-checked", "unchecked");
  $('#channels li').prepend('<i class="fa fa-square-o" aria-hidden="true"></i>');


  //CHECK AND LOAD PREFERENCES
  var loadNews = function(){
    var preferences = Cookies.get('preferences');
    if (preferences == null) {
      $("#news-channels").animate({height: '100vh', opacity: '1'});
    }else {
      preferences = preferences.split(",");
      for (var i = 0; i < preferences.length; i++) {
        $('#channels li').each(function(){
          var str = preferences[i];
          var str = str.replace(/\W+/g, "");
          var source = $(this).attr("data-source");
          var source = source.replace(/\W+/g, "");
          if (source == str) {
            $(this).attr("data-checked", "checked");
            $(this).find("i").remove();
            $(this).prepend('<i class="fa fa-check-square-o" aria-hidden="true"></i>');
          }
        });
      }

      $.post("php/functions.php",
      {
          preferences: preferences
      },
      function(data, status){
        $('#main-content').html(data);
      });
    }
  }

  var checked = function($this){
    var checked = $this.attr("data-checked");
    if (checked == "unchecked") {
      $this.find("i").remove();
      $this.attr("data-checked", "checked");
      $this.prepend('<i class="fa fa-check-square-o" aria-hidden="true"></i>');
    }else {
      $this.find("i").remove();
      $this.attr("data-checked", "unchecked");
      $this.prepend('<i class="fa fa-square-o" aria-hidden="true"></i>');
    }
  };

  loadNews();

  //SET PREFERENCES
  $('#channels li').click(function(){
      var $this = $(this);
      var sourceArr = [];
      checked($this);

      $('#channels li').each(function(){
        if ($(this).attr("data-checked") == "checked") {
          var source = $(this).attr("data-source");
          sourceArr.push(source);
        }
      });
      sourceArr.toString();
      Cookies.remove('preferences');
      Cookies.set('preferences', sourceArr, { expires: 999 });
      loadNews();
  });

  //UI functions
  $("#menu-hamburger").click(function(){
    $("#news-channels").animate({height: '100vh', opacity: '1'});
  });
  $("#close-news-channels").click(function(){
    $("#news-channels").animate({height: '0vh', opacity: '0'});
  });

});

$(document).on('mouseenter','.news-overlay', function (event) {
    $( this ).find('.text-overlay').hide();
    $( this ).find('.text-overlay-description').fadeIn();
}).on('mouseleave','.news-overlay',  function(){
    $( this ).find('.text-overlay-description').hide();
    $( this ).find('.text-overlay').fadeIn();
});
