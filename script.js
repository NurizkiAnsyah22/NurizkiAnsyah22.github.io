// Event pada saat link di klik
$('.page-scroll').on('click', function (e) {
    var tujuan = $(this).attr('href');
    var elementTujuan = $(tujuan);
  
    // Pindahkan scroll
    $('html, body').animate({
      scrollTop: elementTujuan.offset().top - 50
    }, 1300, 'easeInOutCubic');
  
    e.preventDefault();
  });
  
  // Efek ketik pada teks "Nurizkiansyah" dan "Web Developer | Software Engineer"
  $(document).ready(function() {
    var h1Element = $('.jumbotron h1');
    var pElement = $('.jumbotron p');
  
    h1Element.hide();
    pElement.hide();
  
    setTimeout(function() {
      h1Element.show().addClass('typing');
      typeEffect(h1Element, h1Element.text(), 0);
    }, 1000);
  
    setTimeout(function() {
      pElement.show().addClass('typing');
      typeEffect(pElement, pElement.text(), 0);
    }, 1500);
  
    function typeEffect(element, text, index) {
      if (index < text.length) {
        element.text(text.slice(0, index + 1));
        index++;
        setTimeout(function() {
          typeEffect(element, text, index);
        }, 100);
      } else {
        element.removeClass('typing');
      }
    }
  });
  
  //parallax
  //about
  $(window).on('load', function () {
    $('.pkiri').addClass('pmuncul');
    $('.pkanan').addClass('pmuncul');
  });
  
  // Tambahkan efek zoom saat scroll
  $(window).scroll(function() {
    var wScroll = $(this).scrollTop();
  
    $('.jumbotron img').css({
      'transform': 'translate(0px, ' + wScroll/3 + '%)'
    });
  
    $('.jumbotron h1').css({
      'transform': 'translate(0px, ' + wScroll/2 + '%)'
    });
  
    $('.jumbotron p').css({
      'transform': 'translate(0px, ' + wScroll/1.5 + '%)'
    });
  
    //portofolio
    if (wScroll > $('.portofolio').offset().top - 150) {
      $('.portofolio .thumbnail').each(function (i) {
        setTimeout(function () {
          $('.portofolio .thumbnail').eq(i).addClass('muncul');
        }, 250 * (i+1));
      });
    }
  
    // Tambahkan efek zoom saat scroll
    if (wScroll > 0) {
      $('.jumbotron').addClass('zoomed');
    } else {
      $('.jumbotron').removeClass('zoomed');
    }
  });
  
  // Atur ukuran gambar profil saat scroll
  // Atur ukuran gambar profil saat scroll
$(window).scroll(function() {
    var wScroll = $(window).scrollTop();
  
    if (wScroll > 0) {
      var scale = 0.9; // Menentukan skala (0.5 untuk 50% dari ukuran asli)
      var newWidth = $('#profile-img').width() * scale;
      var newHeight = $('#profile-img').height() * scale;
  
      $('#profile-img').css({
        width: newWidth,
        height: newHeight
      });
    } else {
      // Kembalikan ukuran asli saat tidak di-scroll
      $('#profile-img').css({
        width: '',
        height: ''
      });
    }
  });
  
  
  // Atur nilai background-size secara bertahap saat scroll
  var scrollTimeout;
  $(window).scroll(function() {
    clearTimeout(scrollTimeout);
    scrollTimeout = setTimeout(function() {
      var wScroll = $(window).scrollTop();
      var zoomLevel = wScroll / 1000 + 1; // Sesuaikan angka 1000 dengan kecepatan zoom yang diinginkan
  
      $('.jumbotron').css({
        'background-size': zoomLevel * 100 + '% auto'
      });
    }, 20); // Sesuaikan angka 20 dengan kecepatan refresh yang diinginkan
  });
  

  const languageToggle = document.querySelector('.language-toggle');

languageToggle.addEventListener('click', function() {
  this.classList.toggle('active');
});
