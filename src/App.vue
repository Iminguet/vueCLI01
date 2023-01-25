<template>
  <div>
    <TheHeader></TheHeader>
    <badge-list></badge-list>
    <user-info
      :full-name="activeUser.name"
      :info-text="activeUser.description"
      :role="activeUser.role"
    ></user-info>
    <!-- Si solo usamos un slot podemos usar esta forma abreviada -->
    <course-goals #default="slotProps">
      <h2>{{ slotProps.item }}</h2>
      <p>{{ slotProps['another-prop'] }}</p>
      <!-- Esta será una forma de hacerlo
      <template #default="slotProps">
        <h2>{{ slotProps.item }}</h2>
      </template> -->
    </course-goals>
  </div>
</template>

<script>
import TheHeader from './components/TheHeader.vue';
import BadgeList from './components/BadgeList.vue';
import UserInfo from './components/UserInfo.vue';
import CourseGoals from './components/CourseGoals.vue';

export default {
  // Javascript modern, al proporcionar un valor único al objeto, este interpreta ese valor como clave y como valor.
  components: {
    TheHeader,
    BadgeList,
    UserInfo,
    CourseGoals,
  },
  data() {
    return {
      activeUser: {
        name: 'Maximilian Schwarzmüller',
        description: 'Site owner and admin',
        role: 'admin',
      },
    };
  },
};
</script>

<style>
html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>
