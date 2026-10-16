// Настройка Flatpickr: https://github.com/flatpickr/flatpickr
flatpickr('#date', {
  dateFormat: 'd.m.Y',
  minDate: 'today',
  locale: 'ru'
});

const checkout = document.querySelector('#checkout');
const successModal = new bootstrap.Modal(document.querySelector('#orderSuccess'));

checkout.addEventListener('submit', (event) => {
  event.preventDefault();
  successModal.show();
});
