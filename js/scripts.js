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
    } else if(free === 'surf' || dish !== 'dirty' && book !== 'short' && car === 'drive' && power === 'speed') {
      $('#formGroup').toggle();
      $('#js').fadeToggle();
      $('#python').hide();
      $('#csharp').hide();
    } else if(free === 'alexa' || dish === 'dirty' && book === 'short' && car !== 'looks' && power !== 'fly') {
      $('#formGroup').toggle();
      $('#js').hide();
      $('#python').fadeToggle();
      $('#csharp').hide();
    } else if(free === 'game' || dish === 'clean' && book === 'long' && car !== 'drive' && power !== 'speed') {
      $('#formGroup').toggle();
      $('#js').hide();
      $('#python').hide();
      $('#csharp').fadeToggle();
    } 
  });
});