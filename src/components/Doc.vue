<template>
    <article class="c-doc">
        <h3>{{title}}
          <br>
          <small>{{subtitle}}</small>
        </h3>
        <p class="c-doc-html" v-html="preasHtml"></p>
        <p class="c-doc-direction">{{direction}}</p>
    </article>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    html: {
      type: String,
      required: true,
    },
    direction: {
      type: String,
      required: true,
    },
    subtitle: {
      type: String
    }
  },
  data() {
    return {
      
    };
  },
  computed: {
    preasHtml() {
      return this.html.replace(
        /<(\w+)|<\/(\w+)|\s(\w+)\=([\'\"]{1})([\s\S]+?)\4{1}/g,
      function(macth, tag, tagend, attrName, y, attrValue) {
        let rs = '';
        
        tag && ( rs = `&lt;<span class='code-tag'>${tag}</span>`);
        tagend && ( rs += `&lt;\/<span class='code-tag'>${tagend}</span>`);
        attrName &&( rs += `&nbsp;<span class='code-name'>${attrName}</span>=`,console.log(attrName));
        attrValue &&( rs += `<span class='code-value'>${y}${attrValue}${y}</span>`);
        return rs;
      });
    },
  },
  created() {

  }

};
</script>
