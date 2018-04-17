<template>
    <div>
        <navComponent>
            <docComponent></docComponent>
        </navComponent>
    </div>
</template>
<script>

import navComponent from '../components/Nav';
import docComponent from '../components/Doc';

export default {
  data() {
    return {

    };
  },
  components: {
    navComponent,
    docComponent,
  },
};
</script>
