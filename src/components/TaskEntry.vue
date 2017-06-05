<style rel="stylesheet/scss"
       lang="scss">
  .list-entry {
    display: block;

    &__msg {
      display: block;
    }

    &__submit {
      display: block;
    }
  }
</style>
<template>
  <div class="list-entry">
    <md-input-container>
      <label>Enter Task</label>
      <md-textarea v-model="title"></md-textarea>
    </md-input-container>
    <div @click="addTask">
      <md-button class="md-raised md-primary">
        Add
      </md-button>
    </div>
    <div></div>
  </div>
</template>
<script>

export default {
  name: 'TaskEntry',
  data() {
    return {
      title: '',
      checkList: [],
    };
  },
  methods: {
    getTask() {
      return {
        title: this.title,
        checkList: [],
      };
    },
    addTask() {
      this.$store.dispatch('addTask', this.getTask()).then(() => {
        this.title = '';
      });
    },
  },
};
</script>
