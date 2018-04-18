<template>
    <article class="c-doc">
        <h3>{{title}}</h3>
        <p class="c-doc-html" v-text="html"></p>
    </article>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
    },
    html: {

    },
    css: {

    },
  },
  data() {
    return {
      
    };
  },
  computed: {
    preasHtml() {
      return this.html.replice(/<\/?.+>/g, function( a, b, c ){
        console.log(a,b,c);
      });
    },
  },
  created() {
    console.log(111);
  }

};
</script>
