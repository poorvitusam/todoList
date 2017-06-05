<style rel="stylesheet/scss"
       lang="scss">
  .checkList {
    &__item {
      font-size: 16px; cursor: pointer; display: inline-block;
      &--checked {
        color: #323232; text-decoration: line-through;
      }
    }
  }
</style>
<template>
  <div class="checkList">
    <!--<div class="fr tdlist-block__close"  @click="removeTask">&times;</div>-->
    <div class="checkList__item"
         v-if="checkListItem.unchecked"
         @click="toggleCheck">{{ checkListItem.checkListItem }}
    </div>
    <div class="checkList__item checkList__item--checked"
         v-if="checkListItem.unchecked == false"
         @click="toggleCheck">{{ checkListItem.checkListItem }}
    </div>
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
    toggleCheck() {
      if (this.checkListItem.unchecked) {
        this.checkListItem.unchecked = false;
      } else {
        this.checkListItem.unchecked = true;
      }
    },
  },

};
</script>
