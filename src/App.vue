<template>
  <div id="app">
    <router-view
      keep-alive
      transition
      transition-mode='out-in'
    >
    </router-view>
  </div>
</template>

<style lang="scss">
  @import './styles/style';
</style>
