document.querySelectorAll('.page-heading, .hero, .price-card, .availability').forEach(element => element.classList.add('enter'));
const choice = new URLSearchParams(location.search).get('service');
const select = document.querySelector('#service');
if (select && Array.from(select.options).some(option => option.value === choice)) select.value = choice;
