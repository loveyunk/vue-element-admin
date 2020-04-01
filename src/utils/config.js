export default {
  layouts: [
    {
      name: 'public',
      include: [/login/, /404/]
    },
    {
      name: 'primary',
      include: [/.*/]
    }
  ]
};
