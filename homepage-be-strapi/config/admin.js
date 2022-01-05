module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '0e8d5f1dc42327ec12328d48cb4f9e14'),
  },
});
