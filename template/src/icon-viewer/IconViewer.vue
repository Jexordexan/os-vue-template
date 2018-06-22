<template>
  <div class="row">
    <div 
      class="col sidebar">
      <label class="p10 row">
        <input 
          v-model="search" 
          class="text-input grow" 
          type="search" 
          placeholder="Search">
      </label>
      <hr>
      <label class="control">
        <span>20x20</span>
        <input 
          v-model="iconSize" 
          type="radio" 
          value="20">
      </label>
      <label class="control">
        <span>40x40</span>
        <input 
          v-model="iconSize" 
          type="radio" 
          value="40">
      </label>
      <label class="control">
        <span>80x80</span>
        <input 
          v-model="iconSize" 
          type="radio" 
          value="80">
      </label>
      <hr>
      <label class="control">
        <span>Primary:</span>
        <input 
          v-model="primary" 
          type="color">
      </label>
      <label class="control">
        <span>Secondary:</span>
        <input 
          v-model="secondary" 
          type="color">
      </label>
      <label class="control">
        <span>Background:</span>
        <input 
          v-model="background" 
          type="color">
      </label>
      <button 
        class="tool is-button" 
        @click="invertColors">
        <div class="tool-icon">
          <SvgIcon icon="flip-direction" />
        </div>
        <div class="tool-label">
          Reverse colors
        </div>
      </button>
    </div>
    <div 
      :style="{marginRight: showSidebar ? '300px' : '0'}" 
      class="row wrap icon-list">
      <div 
        v-for="icon in filteredIcons" 
        :key="icon" 
        :title="icon" 
        class="icon-wrapper text-center">
        <SvgIcon 
          :icon="icon" 
          :size="iconSize"/>
        <div class="icon-label">\{{ icon }}</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import 'icon-viewer/icon-viewer.less';

import Vue from 'vue';
import Component from 'vue-class-component';
import axios from 'axios';

/**
 * Gives back a list of matches
 * @param {string} str string to match
 * @param {RegExp} regex regular expression to run
 * @param {number!} index optional inex of MatchArray
 * @returns {string[]} list of mathcing strings
 */
function getMatches(str: string, regex: RegExp, index = 1) {
  const matches = [];
  let match;
  while ((match = regex.exec(str))) {
    matches.push(match[index]);
  }
  return matches;
}

@Component({
  props: {
    rawIcons: String
  }
})
export default class IconViewer extends Vue {
  public rawIcons: string;
  public showSidebar: boolean;

  public primary = '#333333';
  public secondary = '#1B5FAA';
  public background = '#FFFFFF';
  public iconSize = 80;
  public search = '';

  public get icons() {
    if (this.rawIcons) {
      const regexp = /id="svg-icon-(\S+?)"/g;
      return getMatches(this.rawIcons, regexp).sort();
    }
    return [];
  }

  public get filteredIcons() {
    return this.icons.filter(
      icon => ~icon.toLocaleLowerCase().indexOf(this.search.toLocaleLowerCase())
    );
  }

  public created() {
    this.$watch('primary', () => {
      document.documentElement.style.setProperty(
        '--color-primary',
        this.primary
      );
    });
    this.$watch('secondary', () => {
      document.documentElement.style.setProperty(
        '--color-secondary',
        this.secondary
      );
    });
    this.$watch('background', () => {
      document.documentElement.style.setProperty(
        '--color-background',
        this.background
      );
    });
  }

  public invertColors() {
    const primary = this.primary;
    const background = this.background;
    var erger = 'http://www.w3.org/2000/svg';

    this.primary = background;
    this.background = primary;
  }
}
</script>
