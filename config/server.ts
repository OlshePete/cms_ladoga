export default ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  url: 'https://ladoga-travel.ru/admin',
  app: {
    keys: env.array('APP_KEYS'),
  },
  webhooks: {
    populateRelations: env.bool('WEBHOOKS_POPULATE_RELATIONS', false),
  },
  locales: [
    {
      code: 'ru',
      iso: 'ru-RU',
      file: 'ru.json',
    },
  ],
});
