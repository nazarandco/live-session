const baseUrl = 'https://60c9e9df772a760017204c05.mockapi.io/api/v1/form';
const button = document.querySelector('.submit-button');
const form = document.querySelector('.login-form');
const inputEmail = document.querySelector('#email');
const inputName = document.querySelector('#name');
const inputPasword = document.querySelector('#password');
const error = document.querySelector('.error-text');
// console.dir(button);
// button activated
// input: event
// output: undefined
const onValidateForm = () => {
  console.log('123');
  if (form.reportValidity()) {
    button.disabled = false;
  }
};
onValidateForm();
form.addEventListener('input', onValidateForm);
// get data for server
// input:event
// output: undeffined
const getFormData = event => {
  console.log('456');
  event.preventDefault();
  const formData = [...new FormData(form)].reduce(
    (acc, [field, value]) => ({
      ...acc,
      [field]: value,
    }),
    {},
  );
  // const formData = `{${inputEmail.name}:${inputEmail.value}, ${inputName.name}:${inputName.value}, ${inputPasword.name}:${inputPasword.value}}`;
  // const formData = Object.fromEntries(new FormData(inputs));
  console.dir(formData);
  fetch(baseUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
    body: JSON.stringify(formData),
  })
  //input(then): callback
  //output(then): promise
    //input(callback): response obj
    //output(callback): any
    .then(response => {
        return response.json()
    })
    .then(result => {
      alert(JSON.stringify(result));
      inputEmail.value = '';
      inputName.value = '';
      inputPasword.value = '';
    })
    .catch(() => {
      error.textContent = 'Failed to create user';
      // Promise.reject(new Error('Failed to create user'));
    });
};
form.addEventListener('submit', getFormData);
// input: event
// output: undefined