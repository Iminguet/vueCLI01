<template>
  <div>
    <TheHeader></TheHeader>
  </div>

  <button @click="setSelectedComponent('active-goals')">Active Goals</button>
  <button @click="setSelectedComponent('manage-goals')">Manage Goals</button>
  <!-- <ActiveGoals v-if="selectedComponent === 'active-goals'"></ActiveGoals>
  <ManageGoals v-if="selectedComponent === 'manage-goals'"></ManageGoals> -->

  <keep-alive>
    <component :is="selectedComponent"></component>
  </keep-alive>
</template>

<script>
import TheHeader from './components/TheHeader.vue';
// import BadgeList from './components/BadgeList.vue';
// import UserInfo from './components/UserInfo.vue';
// import CourseGoals from './components/CourseGoals.vue';

import ManageGoals from './components/ManageGoals.vue';
import ActiveGoals from './components/ActiveGoals.vue';

export default {
  // Javascript modern, al proporcionar un valor único al objeto, este interpreta ese valor como clave y como valor.
  components: {
    TheHeader,
    // BadgeList,
    // UserInfo,
    // CourseGoals,
    ManageGoals,
    ActiveGoals,
  },
  data() {
    return {
      selectedComponent: 'active-goals',
      activeUser: {
        name: 'Maximilian Schwarzmüller',
        description: 'Site owner and admin',
        role: 'admin',
      },
    };
  },

  methods: {
    setSelectedComponent(cmp) {
      this.selectedComponent = cmp;
    },
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
