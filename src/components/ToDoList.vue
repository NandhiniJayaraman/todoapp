<template>
    <div class="overflow-x-auto">
      <table class="min-w-full bg-white border border-gray-200 shadow-md rounded-lg overflow-hidden">
        <thead class="bg-gray-50">
          <tr>
            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Task Name</th>
            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Priority</th>
            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Task Type</th>
          </tr>
        </thead>
        <tbody class="bg-white divide-y divide-gray-200">
          <tr v-for="task in tasks" :key="task.id" class="hover:bg-gray-100 transition-colors duration-200">
            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{{ task.taskName }}</td>
            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{{ task.priority }}</td>
            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{{ task.taskType }}</td>
          </tr>
        </tbody>
      </table>


      
    </div>
  </template>
  
  <script>
  import { watch } from 'vue';
  
  export default {
    props: {
      tasks: {
        type: Array,
        required: true,
      },
    },
    setup(props) {
      watch(
        () => props.tasks,
        (newTasks, oldTasks) => {
          console.log('New Tasks:', newTasks);
          console.log('Old Tasks:', oldTasks);
        },
        { deep: true }
      );
    },
  };
  </script>
  
  <style scoped>
  /* Additional styles can go here if needed */
  </style>
  