import AssignmentList from "./AssignmentList.js";
export default {
    components: { AssignmentList },

    template: `
        <section class="space-y-6">
           <assignment-list :assignments="filters.inProgress" title="In Progress"></assignment-list>
           <assignment-list :assignments="filters.completed" title="Completed"></assignment-list>
           
            <form @submit.prevent="add">
            <div class="border border-gray-600 text-black">
               <input v-model="newAssignment" placeholder="New Assignment" class="p-2">
               
               <button type="submit" class="bg-white p-2 border-l">Add</button>
            </div>
            </form>
        </section>
    `,


    data() {
        return {
            assignments: [
                { id: 1, name: "Finish Project", complete: false },
                { id: 2, name: "Read Chapter 4", complete: false },
                { id: 3, name: "Clean Room", complete: false },
                { id: 4, name: "Walk Dog", complete: false },
            ],

            newAssignment: '',
        };
    },

    computed: {
        filters(){
            return {
                inProgress: this.assignments.filter(a => !a.complete),
                completed: this.assignments.filter(a => a.complete)
            };
        }
    },

    methods: {
        add(){
            this.assignments.push({
                name: this.newAssignment,
                complete: false,
                id: this.assignments.length + 1
            });

            this.newAssignment = '';
        },
    }
}