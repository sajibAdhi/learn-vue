import AssignmentList from "./AssignmentList.js";
export default {
    components: { AssignmentList },

    template: `
        <section class="space-y-6">
           <assignment-list :assignments="filters.inProgress" title="In Progress"></assignment-list>
           <assignment-list :assignments="filters.completed" title="Completed"></assignment-list>
        </section>
    `,


    data() {
        return {
            assignments: [
                { id: 1, name: "Finish Project", complete: false },
                { id: 2, name: "Read Chapter 4", complete: false },
                { id: 3, name: "Clean Room", complete: false },
                { id: 4, name: "Walk Dog", complete: false },
            ]
        };
    },

    computed: {
        filters(){
            return {
                inProgress: this.assignments.filter(a => !a.complete),
                completed: this.assignments.filter(a => a.complete)
            };
        }
    }
}