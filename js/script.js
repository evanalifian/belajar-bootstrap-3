// event pada saat link di klik
$('.page-scroll').on('click', function(e) {

  // ambil isi href
  var tujuan = $(this).attr('href')
  // tangkap element yang bersangkutan
  var elementTujuan = $(tujuan)
  
  // pindahkan scroll
  $('html, body').animate({
    scrollTop: elementTujuan.offset().top - 50
  }, 1250, 'easeInOutExpo')

  e.preventDefault()
})



// parallax effect
// about
$(window).on('load', function() {
  $('.pKiri').addClass('pMuncul')
  $('.pKanan').addClass('pMuncul')
})

$(window).scroll(function() {
  var wScroll = $(this).scrollTop()

  // jumbotron
  $('.jumbotron img').css({
    'transform' : 'translate(0px, '+ wScroll/4 +'%)'
  })

  $('.jumbotron h1').css({
    'transform' : 'translate(0px, '+ wScroll/2 +'%)'
  })

  $('.jumbotron p').css({
    'transform' : 'translate(0px, '+ wScroll/1.2 +'%)'
  })


  // portfolio
  if(wScroll > $('.portfolio').offset().top - 250) {
    $('.portfolio .thumbnail').each(function(i) {
      setTimeout(function() {
        $('.portfolio .thumbnail').eq(i).addClass('muncul')
      }, 300 * (i + 1))
    })
  }
})