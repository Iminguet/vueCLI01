<template>
  <h1>My friends</h1>
  <ul>
    <!-- Llamamos al componente con el nombre que elegimos en main.js -->
    <friend-contact></friend-contact>
  </ul>
</template>

<script>
import FriendContact from './components/FriendContact.vue';
export default {
  components: { FriendContact },
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
