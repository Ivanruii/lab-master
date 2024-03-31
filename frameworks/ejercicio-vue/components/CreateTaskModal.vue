<template>
  <font-awesome-icon
    class="add-icon"
    aria-label="Agregar tarea"
    icon="fa-solid fa-plus"
    :size="`xl`"
    @click="openModal"
  />
  <div v-if="showModal" class="modal">
    <form @submit.prevent="addTask">
      <div class="modal-header">
        <h2>Crear tarea</h2>
        <font-awesome-icon
          class="close-icon"
          aria-label="Cerrar modal"
          icon="fa-solid fa-xmark"
          :size="`xl`"
          @click="closeModal"
        />
      </div>
      <div class="modal-body">
        <input
          v-model="newTask"
          class="input-task"
          type="text"
          placeholder="Escribe aquí..."
          aria-label="Escribe aquí"
        />
        <button type="submit">Crear Tarea</button>
      </div>
    </form>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useStore } from "@/store";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

const store = useStore();
const newTask = ref("");
const showModal = ref(false);

const addTask = () => {
  store.addTask(newTask.value);
  newTask.value = "";
  showModal.value = false;
};

const openModal = () => {
  showModal.value = true;
};

const closeModal = () => {
  showModal.value = false;
};
</script>
<style scoped>
.modal {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  padding: 1em;
  border-radius: 5px;
  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.348);
}

.modal-header {
  display: flex;
  justify-content: space-between;
}

.close-icon {
  transition: 250ms;
}

.close-icon:hover {
  color: red;
}

.modal-body {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.modal-body button {
  border: none;
  background-color: #f4f56e;
}

.add-icon {
  border: 2px solid black;
  aspect-ratio: 1/1;
  width: 16px;
  height: auto;
  border-radius: 50%;
  padding: 0.4em;
}

.input-task {
  border: 2px solid #f5f5f5;
  border-radius: 0.25em;
}
</style>
