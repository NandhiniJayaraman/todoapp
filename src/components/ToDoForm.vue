<template>
  <div class="max-w-lg mx-auto bg-white shadow-lg rounded-lg p-8 mt-10">
    <h2 class="text-2xl font-semibold text-gray-700 text-center mb-6">Create a Task</h2>

    <form @submit.prevent="addTask" class="space-y-6">
      <!-- Task Name -->
      <div class="flex items-center space-x-4">
        <label for="taskName" class="block text-sm font-medium text-gray-600 w-1/3">Task Name:</label>
        <input
          type="text"
          v-model="formData.taskName"
          id="taskName"
          required
          class="mt-1 block w-2/3 border border-gray-300 rounded-lg shadow-sm p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Enter task name"
        />
      </div>

      <!-- Priority -->
      <div>
        <label class="block text-sm font-medium text-gray-600">Priority:</label>
        <div class="mt-2 space-y-2">
          <div class="flex items-center space-x-2" v-for="(priority, index) in priorities" :key="index">
            <input
              type="radio"
              :value="priority.value"
              v-model="formData.priority"
              class="form-radio h-4 w-4 text-blue-600 focus:ring-blue-500"
              required
            />
            <span class="text-gray-700">{{ priority.label }}</span>
          </div>
        </div>
      </div>

      <!-- Task Type Dropdown -->
      <div>
        <label for="taskType" class="block text-sm font-medium text-gray-600">Type of Task:</label>
        <select
          id="taskType"
          v-model="formData.taskType"
          multiple
          class="mt-1 block w-full border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 p-2"
        >
          <option v-for="(type, index) in taskTypes" :key="index" :value="type.value">
            {{ type.label }}
          </option>
        </select>
        <small class="text-gray-500">Hold down the Ctrl (Windows) or Command (Mac) button to select multiple options.</small>
      </div>

      <!-- Submit Button -->
      <div>
        <button
          type="submit"
          class="w-full bg-blue-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-500 transition duration-200"
        >
          Add Task
        </button>
      </div>
    </form>

 
  </div>
</template>

<script>
export default {
  data() {
    return {
      formData: {
        taskName: '',
        priority: 'low', // Default priority
        taskType: [], // Array for multiple selected task types
      },
      priorities: [
        { value: 'low', label: 'Low' },
        { value: 'medium', label: 'Medium' },
        { value: 'high', label: 'High' },
      ],
      taskTypes: [
        { value: 'development', label: 'Development' },
        { value: 'design', label: 'Design' },
        { value: 'marketing', label: 'Marketing' },
        { value: 'testing', label: 'Testing' },
      ],
    };
  },
  methods: {
    addTask() {
      // Add the current task to the tasks array
  
      this.$emit('taskAdd',{
        taskName: this.formData.taskName,
        priority: this.formData.priority,
        taskType: this.formData.taskType,
      })

    },
  },
};
</script>

<style scoped>
/* Additional scoped styles can be added here if needed */
</style>
