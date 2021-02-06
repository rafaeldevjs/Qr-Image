const qr = require('qr-image');
const json = [
  {
    id: 1,
    student: 'Loiane Groner',
    subject: '01 - JavaScript',
    type: 'Fórum',
    value: 15,
    timestamp: '2020-05-19T18:21:24.958Z',
  },
  {
    id: 2,
    student: 'Loiane Groner',
    subject: '02 - Node',
    type: 'Fórum',
    value: 5,
    timestamp: '2020-05-19T18:21:24.964Z',
  },
  {
    id: 3,
    student: 'Loiane Groner',
    subject: '03 - React',
    type: 'Fórum',
    value: 14,
    timestamp: '2020-05-19T18:21:24.970Z',
  },
  {
    id: 4,
    student: 'Loiane Groner',
    subject: '04 - MongoDB',
    type: 'Fórum',
    value: 2,
    timestamp: '2020-05-19T18:21:24.975Z',
  },
  {
    id: 5,
    student: 'Loiane Groner',
    subject: '01 - JavaScript',
    type: 'Trabalho Prático',
    value: 21,
    timestamp: '2020-05-19T18:21:24.981Z',
  },
];

// const qr_png = qr.image(frase, { type: 'png' });
// qr_png.pipe(require('fs').createWriteStream('teste.png'));

//const svg_string = qr.imageSync('I love QR!', { type: 'png' });

json.forEach(async ({ id, student, subject, type, value, timestamp }, ind) => {
  const frase = `
  "id": ${id},
  "student": ${student},
  "subject": ${subject},
  "type": ${type},
  "value": ${value},
  "timestamp": ${timestamp}
`;
  const qr_png = qr.image(frase, { type: 'png' });
  qr_png.pipe(require('fs').createWriteStream(`${id}.png`));
});
