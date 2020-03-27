$(document).ready(function() {
  $("form#formGroup").submit(function(event) {
    event.preventDefault();
    var dish = $("input:radio[name=dish]:checked").val();
    var book = $("input:radio[name=book]:checked").val();
    var car = $("input:radio[name=car]:checked").val();
    var power = $("input:radio[name=power]:checked").val();
    var free = $("input:radio[name=free]:checked").val();
    if(dish === undefined || book === undefined || car === undefined || power === undefined || free === undefined) {
      alert('Please answer all of the questions');
    } else if(dish === 'clean' && book === 'long' && car === 'looks' && power === 'fly' && free === 'game') {
      $('#js').hide();
      $('#python').hide();
      $('#csharp').show();
    }
  });
});