<template>
  <li>
    <h2>
      {{ name }}
      {{ friendIsFavorite === '1' ? '(Favorite)' : '(I hate it !!)' }}
    </h2>
    <button @click="toggleDetails">
      {{ detailsAreVisible ? 'Hide' : 'Show' }} Details
    </button>
    <button @click="toggleFavorite">Toggle Favorite</button>

    <ul v-if="detailsAreVisible">
      <li><strong>id:</strong>{{ friend.id }}</li>
      <li><strong>Phone:</strong>{{ phoneNumber }}</li>
      <li><strong>email:</strong>{{ emailAddress }}</li>
    </ul>
  </li>
</template>

<script>
export default {
  props: ['name', 'phoneNumber', 'emailAddress', 'isFavorite'],
  data() {
    return {
      detailsAreVisible: false,
      friend: {
        id: 'aureliano',
        name: 'Aureliano Buendia',
        phone: '666666666',
        email: 'abuendia@macondo.com',
      },

      // Paramodificar un prop, primero lo convertimos en una data property. Y a esa dataproperty le damos lo que cojemos de la plantilla principal.
      // Tomamos el PROP como valor inicial y luego cambiar la propiedad exclusiva del componente.
      friendIsFavorite: this.isFavorite,
    };
  },

  methods: {
    toggleDetails() {
      this.detailsAreVisible = !this.detailsAreVisible;
    },

    toggleFavorite() {
      if (this.friendIsFavorite === '1') {
        this.friendIsFavorite = '0';
      } else {
        this.friendIsFavorite = '1';
      }
    },
  },
};
</script>
