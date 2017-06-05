<style rel="stylesheet/scss"
       lang="scss">
  .tdlist {
    display: block;
    margin: 15px 10px;
  }
</style>
<template>
  <div class="tdlist" ref="test">
    <TaskElement v-for="task of tasks" :task="task">
    </TaskElement>
  </div>
</template>
<script>
import { mapGetters } from 'vuex';
import TaskElement from './TaskElement';

export default {
  name: 'TaskList',
  props: {
    tasks: {
      default() {
        return [];
      },
      type: Array,
    },
  },
  data() {
    return {};
  },
  components: {
    TaskElement,
  },
  computed: {
    ...mapGetters({
      tasks: 'getAllTask',
    }),
  },
};
</script>
