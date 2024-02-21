<script setup>
import Navbar from './components/navbar.vue'
import footer from './components/Footer[1].vue'
</script>

<template>
  <v-app>
    <Navbar></Navbar>
    <main>
      <router-view></router-view>
    </main>
    <footer/>
  </v-app>
</template>
  