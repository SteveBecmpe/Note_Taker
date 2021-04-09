
const tableData = require('../data/tableData');
const waitListData = require('../data/waitinglistData');

module.exports = (app) => {
//   app.get('/api/tables', (req, res) => res.json(tableData));// needs to reference db.json

//   app.get('/api/waitlist', (req, res) => res.json(waitListData));// needs to reference db.json


  app.post('/api/tables', (req, res) => {
    if (tableData.length < 5) {
      tableData.push(req.body);
      res.json(true);
    } else {
      waitListData.push(req.body);
      res.json(false);
    }
  });

  app.post('/api/clear', (req, res) => {
    tableData.length = 0;
    waitListData.length = 0;

    res.json({ ok: true });
  });
};
