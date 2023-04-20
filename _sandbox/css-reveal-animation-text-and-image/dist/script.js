const sectionText = document.querySelectorAll('.has-animation')

sectionText.forEach(item => {
  item.classList.add('animate-in')
})

// $(document).ready(function() {
//   $('.has-animation').each(function(index) {
//     $(this).delay($(this).data('delay')).queue(function(){
//       $(this).addClass('animate-in');
//     });
//   });
// });