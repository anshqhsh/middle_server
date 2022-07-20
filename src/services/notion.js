const dotenv = require('dotenv').config();
const { Client } = require('@notionhq/client');

const notion = new Client({
  auth: process.env.NOTION_TOKEN,
});
const database_id = process.env.NOTION_DATABASE_ID;

module.exports = async function getCalendarList() {
  const { results } = await notion.databases.query({
    database_id: database_id,
  });
  const calendar = results.map(page => {
    return {
      id: page.id,
      title: page.properties.Name.title[0].text.content,
      date: page.properties.Date.date.start,
      tags: page.properties.Tags.rich_text[0].text.content,
      description: page.properties.Description.rich_text[0].text.content,
    };
  });
  console.log(calendar);
};
