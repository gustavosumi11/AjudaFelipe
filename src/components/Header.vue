<template>
  <b-navbar toggleable class="header">
    <b-navbar-brand href="#" id="logo">Tacurando</b-navbar-brand>

    <b-button href="/login">Login</b-button>

    <b-collapse id="navbar-toggle-collapse" is-nav>
      <b-navbar-nav class="ml-auto"> </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
export default {};
</script>

<style>
#logo {
  padding: 4px;
  color: darkorange;
}
.header {
  background-color: darkblue;
  padding: 6px;
}
</style>
