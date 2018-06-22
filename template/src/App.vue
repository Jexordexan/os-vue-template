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
      <h3>Icon Viewer</h3>
      <div class="grow"/>
      <button 
        :class="{'pressed':showSidebar}" 
        class="is-button" 
        @click="showSidebar = !showSidebar">
        <SvgIcon 
          icon="filter-tab-button" 
          size="30"/>
      </button>
    </div>
    <IconViewer 
      :raw-icons="iconHtml" 
      :show-sidebar="showSidebar" />
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
  public showSidebar = true;
  public created() {
    axios
      .get('node_modules/@onshape/onshape-icons/dist/icons-custom.min.svg')
      .then(response => {
        this.iconHtml = response.data;
      });
  }
}
</script>
