<style rel="stylesheet/scss"
       lang="scss">
  .tdlist-block {
    width: 500px; padding: 15px; margin-right: 10px; margin-bottom: 15px;
    border: 1px solid #EEEEEE; border-radius: 3px; min-height: 200px;
    position: relative; float: left;
    &__title {
      font-size: 26px; margin-bottom: 15px;
    }

    &__close {
      font-size: 18px;
      cursor: pointer; position: absolute;
      right:5px;
      top:0px;
    }
  }
  .br {
    &--bottom {
      border-bottom: 1px solid #EEEEEE;
    }
  }
</style>
<template>
  <div class="tdlist-block">
    <div class="fr tdlist-block__close"  @click="removeTask">&times;</div>
    <div class="tdlist-block__title">{{ task.title }}</div>
    <div class="clr"></div>
    <div class="br--bottom"></div>
    <CheckListElement v-for="checkListItem in checkList" :checkListItem="checkListItem"></CheckListElement>
    <CheckListEntry :task="task"></CheckListEntry>
  </div>
</template>
<script>

import { mapGetters } from 'vuex';
import CheckListElement from './CheckListElement';
import CheckListEntry from './CheckListEntry';

export default {
  name: 'TaskElement',
  props: {
    task: {
      default() {
        return {};
      },
      type: Object,
    },
  },
  data() {
    return {};
  },
  created() {
    console.log('created');
  },
  components: {
    CheckListElement,
    CheckListEntry,
  },
  methods: {
    getTask() {
      return {
        id: this.id,
      };
    },
    removeTask() {
      this.$store.dispatch('removeTask', this.task);
//      return () => {
//        this.$store.dispatch('removeTask', id);
//      }
    },
  },
  computed: {
//    current() {
//      this.$store.getters.getAllCheckListItems(this.task.id));
//    },
    ...mapGetters({
      tasks: 'getAllTask',
    }),
    taskList() {
        return this.tasks.find(task => task.id === this.task.id);
    },
    checkList() {
      if(this.taskList === undefined) {
        return [];
      }
      return this.taskList.checkList;
    },
  },
//  mounted() {
//    this.checkList = this.$store.getters.getAllCheckListItems(this.task.id);
//  },
};
</script>
