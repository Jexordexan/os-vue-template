<template>
  <div id="app">
    <div 
      style="display:none" 
      v-html="iconHtml"/>
    <div class="navbar row">
      <img 
        class="site-logo" 
        src="src/assets/onshape-logo-white.svg" 
        alt="">
    </div>
    <!-- Replace IconViewer with your own component! -->
    <IconViewer :raw-icons="iconHtml"/>
  </div>
</template>

<script lang="ts">
import axios from 'axios';
import Vue from 'vue';
import Component from 'vue-class-component';

import IconViewer from 'icon-viewer/IconViewer.vue';

@Component({
  name: 'app',
  components: {
    IconViewer
  }
})
export default class App extends Vue {
  public iconHtml = '';
  public created() {
    axios
      .get('node_modules/@onshape/onshape-icons/dist/icons-custom.min.svg')
      .then(response => {
        this.iconHtml = response.data;
      });
  }
}
</script>
