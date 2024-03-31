<template>
  <header>
    <h1>ToDo List</h1>
    <CreateTaskModal />
  </header>
</template>

<style scoped>
header {
  position: sticky;
  background-color: white;
  top: 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 1.3em;
  font-size: small;
}

h1 {
  font-weight: lighter;
  font-style: normal;
}
</style>
