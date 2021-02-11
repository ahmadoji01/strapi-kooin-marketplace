module.exports = ({ env }) => ({
    settings: {
      cors: {
        origin: ['http://localhost:3000', 'http://localhost:1337', 'http://149.28.154.95:1337', 'https://mysite.com', 'https://www.mysite.com', 'https://kooin.id', 'http://45.76.159.144:3000/'],
        headers: "*",
      },
    },
});
