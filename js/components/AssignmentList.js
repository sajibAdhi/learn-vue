import Assignment from './Assignment.js';
import AssignmentTags from './AssignmentTags.js';
import Panel from "./Panel.js";

export default {
    components: {Assignment, AssignmentTags, Panel},

    template: `
    <panel v-show="assignments.length" class="w-70">
        <div class="flex justify-between item-start">
            <h2 class="font-bold mb-2">
                {{title}}
               
                <span>({{filteredAssignments.length}})</span>
            </h2>
            
            <button v-show="canToggle" @click="$emit('toggle')">&times;</button>
        </div>
       
        <assignment-tags 
            v-model:currentTag="currentTag"
            :initial-tags="tags"
        />
    
       <ul class="border border-gray-600 divide-y divide-gray-600 mt-6">
              <assignment   
                v-for="assignment in filteredAssignments" 
                :key="assignment.id"
                :assignment="assignment"
                ></assignment>
       </ul> 
       
       <slot></slot>
    </panel>
    `,

    props: {
        assignments: Array,
        title: String,
        canToggle: {type: Boolean, default: false},
    },

    data() {
        return {
            currentTag: 0,
            tags: [],
        };
    },

    created() {
        fetch('http://localhost:3001/tags')
            .then(response => response.json())
            .then(tags => {
                this.tags = tags;
            });
    },

    computed: {
        filteredAssignments() {
            if (this.currentTag === 0) {
                return this.assignments;
            }

            return this.assignments.filter(a => a.tags.includes(this.currentTag));
        },
    }
}