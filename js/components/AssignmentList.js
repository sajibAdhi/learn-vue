import Assignment from './Assignment.js';

export default {
    components: {Assignment},
    template: `
    <section v-show="assignments.length">
       <h2 class="font-bold mb-2">
           {{title}}
           <span>({{filteredAssignments.length}})</span>
       </h2>
       
       <div class="flex gap-2">
            <button
                @click="currentTag = tag" 
                v-for="tag in tags" 
                class="border rounded px-1 py-px text-sm"
                :class="{'border-blue-600 text-blue-600': currentTag === tag}"
            >{{tag}}</button>
       </div>
    
       <ul class="border border-gray-600 divide-y divide-gray-600 mt-6">
              <assignment   
                v-for="assignment in filteredAssignments" 
                :key="assignment.id"
                :assignment="assignment"
                ></assignment>
       </ul> 
   </section>
    `,

    props: {
        assignments: Array,
        title: String
    },

    data() {
        return {
            currentTag: 'all'
        };
    },

    computed: {
        filteredAssignments() {
            if (this.currentTag === 'all') {
                return this.assignments;
            }

            return this.assignments.filter(a => a.tags.includes(this.currentTag));
        },


        tags() {
            return ['all', ...new Set(this.assignments
                .map(a => a.tags).flat())];
        }
    }
}