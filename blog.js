$(document).ready(function () {
  // Effet d'écriture
  function typeEffect(element, speed) {
    let text = $(element).text();
    $(element).html('');
    let i = 0;
    let timer = setInterval(() => {
      if (i < text.length) {
        $(element).append(text.charAt(i));
        i++;
      } else {
        clearInterval(timer);
      }
    }, speed);
  }

  typeEffect($('#mainTitle'), 100);

  // Burger Menu
  $('.burger, .overlay').click(function () {
    $('.burger, .overlay, nav, body').toggleClass('show');
  });

  // Scroll fluide vers la section suivante
  $('#arrowDown').click(function () {
    $('html, body').animate({ scrollTop: $('#secondSection').offset().top }, 60);
  });

  // Effet parallaxe sur l'image de fond
  $(document).mousemove(function (e) {
    let traX = ((e.pageX / $(window).width()) * 10) + 40;
    let traY = ((e.pageY / $(window).height()) * 10) + 50;
    $(".title").css("background-position", `${traX}% ${traY}%`);
  });
});
