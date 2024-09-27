<template>

    <div class="min-h-screen bg-gray-100 flex flex-col">
        <!-- Navbar -->
        <div class="navbar-heading w-full h-16 flex justify-between items-center px-8 bg-blue-500 text-white">

            <!-- Left Section: Heading -->
            <div class="heading">
                <h1 class="text-xl font-bold">To Do App</h1>
            </div>

            <!-- Right Section: Buttons -->
            <div class="navbar-side flex gap-4">
                <n-layout-sider content-style="padding: 24px;" @click="toDoForm">Create ToDo </n-layout-sider>
                <n-layout-content content-style="padding: 24px;" @click="toDoList">ToDoList</n-layout-content>
                <n-layout-content content-style="padding: 24px;" @click="toDoRules">Rules & Regulations</n-layout-content>
            </div>
        </div>

        <!-- Body Content -->
        <div class="flex-1 p-8">


            <router-view></router-view>



            <section v-show="inprogressAssignments.length">

                <h2 class="font-bold mb-8">Task - In progress</h2>

                <ul class="m-4 p-4">

                    <li   v-for=" task in inprogressAssignments " :key="task.id" >

                        <label>{{ task.taskName }}</label>

                        <input type="checkbox" v-model="task.completed" >
                    </li>
                </ul>
            </section>




            <section v-show="completedAssignments.length">

                <h2 class="font-bold mb-8">Task - Completed</h2>

                <ul class="m-4 p-4">
                    <li  v-for=" task in completedAssignments " :key="task.id">

                        <label>{{ task.taskName }}</label>

                        <input type="checkbox" v-model="task.completed" >

                    </li>
                </ul>
            </section>


            

            <section>

                <p>{{ tasks }}</p>
                
            </section>


            
        </div>
    </div>
    


</template>

<script>

export default {
    name: 'ToDoApp',

    data(){
        return{
            tasks:[
                {id:1,taskName:"task-1",completed:false},
                {id:2,taskName:"task-2",completed:false},
                {id:3,taskName:"task-3",completed:false},
                {id:3,taskName:"task-4",completed:false}
            ]
        }

    },

    computed:{
        inprogressAssignments(){
          return  this.tasks.filter(a=> ! a.completed)
        },

        completedAssignments(){
          return  this.tasks.filter(a=>a.completed)
        }
    },


    methods: {
        toDoForm() {
            this.$router.push('/form')
        },
        toDoList() {
            this.$router.push('/list')
        },
        toDoRules() {
            this.$router.push('/rules')
        }

    }
}

</script>

<style scoped>
.n-layout-sider {
    background: rgba(128, 128, 128, 0.3);
}
</style>
