var datas = [
  {
    id: "name",
    label: "Name and Surname",
    value: "",
    validation: {
      rules: { name: [ "required", "regex:/^([a-zA-z]{3,10} [a-zA-z ]{3,})$/" ] },
      messages: { "required.name": 'Required field must not be left blank', 'regex.name': 'Required field must not be left blank' }
    },
    name: "name",
    pristine: true,
    hasError: false,
    errorMessage: ''
  },
  {
    id: "email",
    label: "E-mail",
    value: "",
    validation: {
      rules: { email: [ "required", "email" ] },
      messages: { "required.email": 'Required field must not be left blank', 'email.email': 'Incorrect email address' }
    },
    name: "email",
    pristine: true,
    hasError: false,
    errorMessage: ''
  },
  {
    id: "title",
    label: "Matter",
    value: "",
    validation: {
      rules: { title: [ "required", "regex:/^([a-zA-z]{3,200})$/" ] },
      messages: { "required.title": 'Required field must not be left blank', 'regex.title': 'Required field must not be left blank' }
    },
    name: "message",
    pristine: true,
    hasError: false,
    errorMessage: ''
  },
  {
    id: "lang",
    label: "Powerful programming language?",
    value: "",
    validation: {
      rules: { lang: [ "required", "regex:/^javascript$/" ] },
      messages: { "required.lang": 'Required field must not be left blank', 'regex.lang': 'Hint: starts with "java" and ends with "script"' }
    },
    pristine: true,
    hasError: false,
    errorMessage: ''
  }
];

module.exports = datas;
