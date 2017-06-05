<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1, h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }

</style>
<template>
  <div class="hello">
    <div class="tdlist">
      <TaskEntry></TaskEntry>
      <div class="br"></div>
      <TaskList></TaskList>
    </div>
  </div>
</template>

<script>

import TaskList from './TaskList';
import TaskEntry from './TaskEntry';

export default {
  name: 'hello',
  data() {
    return {};
  },
  components: {
    TaskEntry,
    TaskList,
  },
};
</script>
