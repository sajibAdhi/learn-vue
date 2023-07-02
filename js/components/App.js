import Assignments from "./Assignments.js";
import Panel from "./Panel.js";
export default {
    components: {Assignments, Panel},

    template: `
    <div class="grid gap-6">
        <assignments></assignments>
        
        <panel>
            <template v-slot:heading>
            This is the heading of the panel.
            </template>
            
            <template v-slot:default>
                This is the content of the panel.
            </template>
        </panel>
        
        <panel theme="light">
            <template v-slot:heading>
            This is the heading of the panel.
            </template>
            
            <template v-slot:default>
                This is the content of the panel.
            </template>
            
            <template v-slot:footer>
                This is a footer.
            </template>
        </panel>
    </div>
    `,
};