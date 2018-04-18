<template>
    <article class="c-doc">
        <h3>{{title}}</h3>
        <p class="c-doc-html" v-text="preasHtml"></p>
    </article>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
    },
    html: {
      type: String,
    },
  },
  data() {
    return {
      
    };
  },
  computed: {
    preasHtml() {
      return this.html.replace(/<\/?(\w+)/g, function() {
        const arg = [].slice.call(arguments);
        arg.forEach(element => {
          
        });
      });
    },
  },
  created() {

  }

};
</script>
