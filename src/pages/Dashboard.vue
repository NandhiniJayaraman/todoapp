<template>
    <div>
        <div>
            <button @click="viewRules()" type="submit"
                class="w-full bg-blue-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-500 transition duration-200">
                View Task rules
            </button>
        </div>


        <ToDoForm @taskAdd="addTask" />
        <ToDoList :tasks="tasks" />
    </div>
</template>

<script>
import ToDoForm from '@/components/ToDoForm.vue';
import ToDoList from '@/components/ToDoList.vue';



export default {
    components: {
        ToDoList,
        ToDoForm,


    },
    data() {
        return {
            tasks: [],
        };
    },
    methods: {
        addTask(task) {
            console.log('user', task)
            this.tasks.push(task); // Add the new user to the users array
        },
        viewRules() {
            console.log('route success')
            this.$router.push('/rules')
        }
    },

};
</script>

<style scoped>
/* Add styles here if needed */
</style>