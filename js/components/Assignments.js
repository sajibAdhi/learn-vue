import AssignmentList from "./AssignmentList.js";
import AssignmentCreate from "./AssignmentCreate.js";
export default {
    components: { AssignmentList, AssignmentCreate },

    template: `
        <section class="space-y-6">
           <assignment-list :assignments="filters.inProgress" title="In Progress"></assignment-list>
           <assignment-list :assignments="filters.completed" title="Completed"></assignment-list>
           
           <assignment-create @add="add"></assignment-create>
        </section>
    `,


    data() {
        return {
            assignments: [
                { id: 1, name: "Finish Project", complete: false , tags : ['science', 'math', 'english']},
                { id: 2, name: "Read Chapter 4", complete: false, tags: ['science', 'math'] },
                { id: 3, name: "Clean Room", complete: false, tags: ['science', 'english'] },
                { id: 4, name: "Walk Dog", complete: false, tags: ['math'] },
            ],
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
        add(name){
            this.assignments.push({
                name: name,
                complete: false,
                id: this.assignments.length + 1
            });
        },
    }
}