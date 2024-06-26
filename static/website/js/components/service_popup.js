var popup = document.getElementById('popup');
var closePopupBtn = document.getElementById('closePopupBtn');
var backdrop = document.getElementById('backdrop');
function openPopup(variable) {
    console.log(variable);
    popup.style.display = 'block';
    backdrop.style.display = 'block';
    document.body.classList.add('noscroll');
    document.getElementById('changethis').textContent = variable;
}
closePopupBtn.addEventListener('click', function() {
    popup.style.display = 'none';
    backdrop.style.display = 'none';
    document.body.classList.remove('noscroll');
});

document.addEventListener('DOMContentLoaded', function() {
    var maxDate = new Date();
    flatpickr('#datepicker', {
      enableTime: false,
      minDate: 'today',
      maxDate: maxDate.setDate(maxDate.getDate() + 7),
      defaultDate: 'today',
      dateFormat: "Y-m-d",
      //   defaultDate: new Date(),
    //   dateFormat: "Y-m-d H:i",
    });
  });