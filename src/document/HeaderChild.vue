<template>
  <div class="qq">
    <doc-component :html="text" :title="header的结构">
    </doc-component>
  </div>
</template>

<script>
import docComponent from '../components/Doc';
export default {
  data () {
    return {
      text:`<div data-role="layout" data-id="drawer-layout">
              <header data-role="header" id="header-p">
                <div class="header-logo">
                  <div class="logo">
                    <a href="javascript:;" onclick="goindex()">
                      <img src="<%=basePath%>/mobile/images/allplane/logo.png" class="logo-img">
                    </a>
                  </div>
                  <div class="search">
                    <span>	
                      <a class="nav-button" data-align="right" data-role="button" data-icon="search" data-rel="actionsheet" href="#modalview-Ser">
                      </a>
                    </span>
                  </div>
                </div>
              </header>
            </div>`
    }
  },
  components: {
    docComponent
  }
}
</script>

<style lang="stylus" scoped>

</style>
