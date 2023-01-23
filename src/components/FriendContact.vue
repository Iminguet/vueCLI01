<template>
  <li>
    <h2>
      {{ name }}
      {{ friendIsFavorite ? '(Favorite)' : '' }}
    </h2>
    <button @click="toggleDetails">
      {{ detailsAreVisible ? 'Hide' : 'Show' }} Details
    </button>
    <button @click="toggleFavorite">Toggle Favorite</button>

    <ul v-if="detailsAreVisible">
      <li><strong>Phone:</strong>{{ phoneNumber }}</li>
      <li><strong>email:</strong>{{ emailAddress }}</li>
    </ul>
  </li>
</template>

<script>
export default {
  //   props: ['name', 'phoneNumber', 'emailAddress', 'isFavorite'],
  props: {
    name: {
      type: String,
      required: true,
    },
    phoneNumber: {
      type: String,
      required: true,
    },
    emailAddress: {
      type: String,
      required: true,
    },
    isFavorite: {
      type: Boolean,
      required: false,
      default: false,
      // default: function () {....},
      //   validator: function (value) {
      //     return value === '1' || value === '0';
    },
  },

  data() {
    return {
      detailsAreVisible: false,

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
      this.friendIsFavorite = !this.friendIsFavorite;
    },
  },
};
</script>
