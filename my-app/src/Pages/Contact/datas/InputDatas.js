var datas = [
  {
    id: "name",
    label: "Imię i Nazwisko",
    value: "",
    validation: {
      rules: { name: [ "required", "regex:/^([a-zA-z]{3,10} [a-zA-z ]{3,})$/" ] },
      messages: { "required.name": 'Wpisz prawidłowe imię i nazwisko!', 'regex.name': 'Wpisz imię i nazwisko' }
    },
    pristine: true,
    hasError: false,
    errorMessage: ''
  },
  {
    id: "title",
    label: "Temat",
    value: "",
    validation: {
      rules: { title: [ "required", "regex:/^([a-zA-z]{3,20})$/" ] },
      messages: { "required.title": 'Wpisz prawidłowy temat!', 'regex.title': 'Wpisz temat' }
    },
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
      messages: { "required.email": 'Wpisz swój adres e-mail!', 'email.email': 'Nieprawidłowa forma e-mail' }
    },
    pristine: true,
    hasError: false,
    errorMessage: ''
  },
  {
    id: "lang",
    label: "Potężny język programowania?",
    value: "",
    validation: {
      rules: { lang: [ "required", "regex:/^javascript$/" ] },
      messages: { "required.lang": 'Wpisz język!', 'regex.lang': 'Podpowiedź: zaczyna się z "java" i kinczy się "script"' }
    },
    pristine: true,
    hasError: false,
    errorMessage: ''
  }
];

module.exports = datas;
