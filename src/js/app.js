require('jquery')
require('bootstrap')
require('@fortawesome/fontawesome-free')

// for fixed-top correction
function heightAndMt() {
  let headerHeight = $('.fixed-top').outerHeight()
  $('main').css({
    paddingTop: headerHeight + 'px'
  })
}

// for active the item clicked
$('.nav-link').click(function () {
  $('.nav-link').removeClass('active')
  $(this).toggleClass('active')
})

// $(document).ready(function () {
//   $('.nav-link').click(function () {
//     //removing the previous selected menu state
//     $('.nav-link').find('.active').removeClass('active')
//     //adding the state for this parent menu
//     // $(this).parents('li').addClass('active')
//   })
// })

heightAndMt()
