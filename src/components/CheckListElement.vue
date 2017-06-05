<style rel="stylesheet/scss"
       lang="scss">
  .checkList {
    &--item {

    }
  }

</style>
<template>
  <div class="checkList">
    <!--<div class="fr tdlist-block__close"  @click="removeTask">&times;</div>-->
    <div class="checkList__item">{{ checkListItem.checkListItem }}</div>
    <div class="clr"></div>
  </div>
</template>
<script>

export default {
  name: 'CheckListElement',
  props: {
    task: {
      default() {
        return {};
      },
      type: Object,
    },
    checkListItem: {
      default() {
        return {};
      },
      type: Object,
    },
  },
  data() {
    return {};
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

};
</script>
