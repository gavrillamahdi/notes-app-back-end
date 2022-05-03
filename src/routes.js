const { addNoteHandler } = require('./handler');

module.exports = [
  {
    method: 'POST',
    path: '/notes',
    handler: addNoteHandler,
  },
];
