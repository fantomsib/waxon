(function(){

if (document.documentElement.clientHeight >= 650) { 
    $(document).ready(function() {
      var wrapper = $('.wrapper');
      var topPosition = 0;
      var maxTopPosition = -($('.section').length - 1) * 100;
      var animation = true;
      var toggles = $('.sidebar__items');
      var toggleActive = toggles.filter('.sidebar__items--active');
      var nextToggle = toggleActive.next();
  
      $('body').addClass('hidden--onepagescroll');
  
      $('body').on('wheel', function(evt) {
        if (evt.originalEvent.deltaY > 0) {
          if (topPosition != maxTopPosition && animation) {
            animation = false;
            topPosition -= 100;
            wrapper.animate({
              'top': topPosition + 'vh'
            }, 700, function() {
              toggleActive.removeClass('sidebar__items--active');
              nextToggle.addClass('sidebar__items--active');
              toggleActive = nextToggle;
              nextToggle = nextToggle.next();
              animation = true;
            });
          }
        } else {
          if (topPosition != 0 && animation) {
            animation = false;
            topPosition += 100;
            wrapper.animate({
              'top': topPosition + 'vh'
            }, 700, function() {
              var prevToggle = toggleActive.prev();
              toggleActive.removeClass('sidebar__items--active');
              prevToggle.addClass('sidebar__items--active');
              nextToggle = toggleActive;
              toggleActive = prevToggle;
              prevToggle = prevToggle.prev();
              animation = true;
            });
          }
        }
      });
  
      toggles.on('click', function(evt) {
        evt.preventDefault();
        var $this = $(this);
        wrapper.animate({
          'top': -($this.index() * 100) + 'vh'
        }, 700, function() {
          topPosition = -($this.index() * 100);
          toggleActive.removeClass('sidebar__items--active');
          $this.addClass('sidebar__items--active');
          toggleActive = $this;
          prevToggle = $this.prev();
          nextToggle = $this.next();
        });
      });
    });

} else {
    $('.toggle').css('display', 'none');
  }
  
  $(function() {
    var wrapper = $('.wrapper');
        var topPosition = 0;
        var maxTopPosition = -($('.section').length - 1) * 100;
        var animation = true;
    $('.wrapper').swipe( {
      swipe:function(event, direction, distance, duration, fingerCount, fingerData) {
        $('body').addClass('hidden--onepagescroll');
  
        if (direction == 'up') {
          if (topPosition != maxTopPosition && animation) {
            animation = false;
            topPosition -= 100;
            wrapper.animate({
              'top': topPosition + 'vh'
            }, 700, function() {
              animation = true;
            });
          }
        } else if (direction = 'down') {
          if (topPosition != 0 && animation) {
            animation = false;
            topPosition += 100;
            wrapper.animate({
              'top': topPosition + 'vh'
            }, 700, function() {
              animation = true;
            });
          }
        }
      }
    });
  
    $('.wrapper').swipe( {fingers:1} );
  });
  
})();