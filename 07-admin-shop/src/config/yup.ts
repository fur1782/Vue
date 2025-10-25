import * as yup from 'yup';

yup.setLocale({
  mixed: {
    default: 'No és vàlid',
    required: 'Aquest camp és obligatori',
    oneOf: 'Ha de ser un dels següents valors: ${values}',
    notOneOf: 'No ha de ser un dels següents valors: ${values}',
    defined: "Ha d'estar definit",
    notNull: 'No pot ser nul',
    notType: 'Ha de ser de tipus ${type}',
  },
  string: {
    length: 'Ha de tenir exactament ${length} caràcters',
    min: 'Ha de tenir almenys ${min} caràcters',
    max: 'Ha de tenir com a màxim ${max} caràcters',
    email: 'Ha de ser un correu electrònic vàlid',
    url: 'Ha de ser una URL vàlida',
    trim: 'No ha de contenir espais al principi o al final',
    lowercase: "Ha d'estar en minúscules",
    uppercase: "Ha d'estar en majúscules",
    matches: 'Ha de coincidir amb el següent patró: "${regex}"',
  },
  number: {
    min: 'Ha de ser major o igual a ${min}',
    max: 'Ha de ser menor o igual a ${max}',
    lessThan: 'Ha de ser menor que ${less}',
    moreThan: 'Ha de ser major que ${more}',
    positive: 'Ha de ser un número positiu',
    negative: 'Ha de ser un número negatiu',
    integer: 'Ha de ser un número enter',
  },
  date: {
    min: 'Ha de ser posterior a ${min}',
    max: 'Ha de ser anterior a ${max}',
  },
  array: {
    min: 'Ha de tenir almenys ${min} elements',
    max: 'Ha de tenir com a màxim ${max} elements',
  },
});
