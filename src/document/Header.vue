<template>
  <div class="main">
    <nav-component>
      <header-child></header-child>
    </nav-component>
  
  </div>
</template>

<script>
import navComponent from '../components/Nav';

import HeaderChild from './HeaderChild';
export default {
  data () {
    return {

    }
  },
  components: {
    navComponent,
    HeaderChild
  }
}
</script>


<style lang="stylus" scoped>

</style>


