<template>
  <h1>My friends</h1>
  <ul>
    <li>{{ name }}</li>
    <li>{{ friends[0].name }}</li>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      name: 'Israel',
      friends: [
        {
          id: 'aureliano',
          name: 'Aureliano Buendia',
          phone: '666666666',
          email: 'abuendia@macondo.com',
        },
        {
          id: 'antofagasto',
          name: 'Antofagasto Panocho',
          phone: '666555444',
          email: 'panochoant@agenciainformacion.com',
        },
      ],
    };
  },
  methods: {},
  computed: {},
};
</script>
