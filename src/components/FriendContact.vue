<template>
  <li>
    <h2>{{ name }}</h2>
    <button @click="toggleDetails">
      {{ detailsAreVisible ? 'Hide' : 'Show' }} Details
    </button>
    <ul v-if="detailsAreVisible">
      <li><strong>id:</strong>{{ friend.id }}</li>
      <li><strong>Phone:</strong>{{ phoneNumber }}</li>
      <li><strong>email:</strong>{{ emailAddress }}</li>
    </ul>
  </li>
</template>

<script>
export default {
  props: ['name', 'phoneNumber', 'emailAddress'],
  data() {
    return {
      detailsAreVisible: false,
      friend: {
        id: 'aureliano',
        name: 'Aureliano Buendia',
        phone: '666666666',
        email: 'abuendia@macondo.com',
      },
    };
  },

  methods: {
    toggleDetails() {
      this.detailsAreVisible = !this.detailsAreVisible;
    },
  },
};
</script>
