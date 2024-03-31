<template>
  <div class="container">
    <div>
      <PageHeader />
      <ul class="todo-list">
        <li v-for="(todo, index) in todos" :key="index" class="todo-item">
          <textarea
            v-model="todo.task"
            class="textarea-edit"
            :disabled="todo.completed"
            aria-label="Editar tarea"
            rows="auto"
            @change="editTask(index, todo.task)"
          />
          <div class="item-actions">
            <font-awesome-icon
              class="trash-icon"
              icon="fa-solid fa-trash"
              :disabled="todo.completed"
              aria-label="Eliminar tarea"
              :size="`xl`"
              @click="deleteTask(index)"
            />
            <font-awesome-icon
              class="trash-check"
              :icon="
                todo.completed
                  ? 'fa-solid fa-check-square'
                  : 'fa-regular fa-square'
              "
              :aria-label="`Marcar tarea ${index + 1} como ${todo.completed ? 'incompleta' : 'completa'}`"
              :size="`xl`"
              @click="toggleTask(index)"
            />
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { useStore } from "~/store";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

const store = useStore();

const toggleTask = (index) => {
  store.toggleTask(index);
};

const deleteTask = (index) => {
  store.deleteTask(index);
};

const editTask = (index, newTask) => {
  store.editTask(index, newTask);
};

const todos = store.$state.todos;
</script>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;
}

.container > div {
  width: 28em;
  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.348);
  background-color: white;
  max-height: 32em;
  overflow-y: scroll;
  border-radius: 8px;
}

.todo-list {
  list-style-type: none;
  padding: 0;
  margin: 0;
}

.todo-item {
  border-top: 2px solid #f5f5f5;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1em 1.8em;
}

.textarea-edit {
  font-size: large;
  transition: 150ms;
}

.textarea-edit:disabled {
  text-decoration: line-through;
  color: #a6a6a6;
  font-style: italic;
}

.item-actions {
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: center;
}

.trash-icon {
  color: #a6a6a6;
}

.trash-icon,
.trash-check {
  color: #575757;
  transition: 250ms;
}

.trash-icon:hover {
  color: red;
}

.trash-check:hover {
  color: rgb(0, 255, 42);
}

.checkbox {
  margin-right: 0.5em;
}

@media (max-width: 480px) {
  .container > div {
    width: 100vw;
  }
}
</style>
