<style rel="stylesheet/scss"
       lang="scss">
  .checkList-entry {
    display: flex;
    position: absolute;
    bottom: 0;
    align-items: center;
    left: 15px;
    right: 15px;

    &__input {
      display: block;
      float: left;
    }

    &__submit {
      display: block;
      margin-right: 0;
    }
  }

  .br {
    &--bottom {
      border: 1px solid #EEEEEE;
    }
  }
</style>
<template>
  <div class="checkList-entry">
    <div class="br--bottom"></div>
    <md-input-container class="checkList-entry__input">
      <label>Enter Check List Item</label>
      <md-textarea v-model="checkListItem"></md-textarea>
    </md-input-container>
    <div @click="addTask">
      <md-button class="md-raised md-primary checkList-entry__submit">
        Add
      </md-button>
    </div>
    <div></div>
  </div>
</template>
<script>
export default {
  name: 'CheckListEntry',
  data() {
    return {
      checkListItem: '',
    };
  },
  props: {
    task: {
      default() {
        return {};
      },
      type: Object,
    },
  },
  methods: {
    getCheckListItem() {
      return {
        checkListItem: this.checkListItem,
      };
    },
    addTask() {
//      console.log('item: ', this.getCheckListItem());
//      console.log('task: ', this.task);
//      console.log(this.task);
      this.$store.dispatch('addCheckListItem', { task: this.task, item: this.getCheckListItem() }).then(() => {
        this.checkListItem = '';
      });
    },
  },
};
</script>
