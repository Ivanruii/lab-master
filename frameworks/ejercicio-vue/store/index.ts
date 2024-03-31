interface Todo {
  task: string;
  completed: boolean;
}

export const useStore = defineStore({
  id: "main",
  state: () => ({
    todos: [] as Todo[],
  }),
  actions: {
    addTask(task: string) {
      this.todos.push({ task, completed: false });
    },
    toggleTask(index: number) {
      this.todos[index].completed = !this.todos[index].completed;
    },
    deleteTask(index: number) {
      this.todos.splice(index, 1);
    },
  },
  persist: true,
});
