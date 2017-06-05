import { max } from 'lodash/math';

export default {
  modules: {
    tasks: {
      state: {
        tasks: [],
      },
      getters: {
        getAllTask(state) {
          return state.tasks;
        },
        getAllCheckListItems: (state, getters) => id => (
           getters.getAllTask.find(task => task.id === id).checkList),
      },
      mutations: {
        pushTask(state, task) {
          // eslint-disable-next-line no-param-reassign
          task.id = (max(state.tasks.map(({ id }) => id)) || 0) + 1;
          state.tasks.push(task);
        },
        pushCheckListItem(state, { t, i }) {
          const task = state.tasks.find(entry =>
             (t.id === entry.id));
          // eslint-disable-next-line no-param-reassign
          i.id = (max(task.checkList.map(({ id }) => id)) || 0) + 1;
          task.checkList.push(i);
        },
        popTask(state, task) {
          state.tasks.forEach((entry, index) => {
            if (task.id === entry.id) {
              state.tasks.splice(index, 1);
            }
          });
        },
      },
      actions: {
        addTask({ commit }, task) {
          commit('pushTask', task);
        },
        addCheckListItem({ commit }, { task, item }) {
          console.log('store');
          console.log(item);
          // console.log(task);
          commit('pushCheckListItem', { t: task, i: item });
        },
        removeTask({ commit }, task) {
          commit('popTask', task);
        },
      },
    },
  },
};
