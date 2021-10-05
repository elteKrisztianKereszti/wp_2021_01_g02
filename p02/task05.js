let t5fradio = document.querySelector('input[type="radio"][name="sex"][checked]');

let maidenName = document.querySelector('#maiden_name');
 maidenName.hidden = t5fradio.value !== "female";
