module.exports = ({ env }) => ({
    settings: {
      cors: {
        origin: ['http://localhost:3000', 'http://localhost:1337', 'https://api.kooin.id', 'https://kooin.id'],
        headers: "*",
        methods: "*",
      },
    },
});
