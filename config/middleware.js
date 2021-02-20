module.exports = ({ env }) => ({
    settings: {
      cors: {
        origin: ['http://localhost:3000', 'http://localhost:1337', 'https://mysite.com', 'http://localhost:8000', 'https://www.mysite.com'],
        headers: "*",
      },
    },
});