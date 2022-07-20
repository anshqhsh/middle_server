import express from 'express';

const getCalendarList = require('./services/notion');
const PORT = process.env.PORT || 8080;

const app = express();

/**
 * 노션 캘린더 데이터 가져오기
 */
app.get('/calendars', async (req, res) => {
  const calendars = await getCalendarList();
  res.json(calendars);
});

app.listen(PORT);
