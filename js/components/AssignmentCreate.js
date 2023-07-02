export default {
    template: `
        <form @submit.prevent="submit" >
            <div class="border border-gray-600 text-black flex">
               <input v-model="newAssignment" placeholder="New Assignment" class="p-2">
                   
               <button type="submit" class="bg-white p-2 border-l">Add</button>
            </div>
        </form>
    `,

    data(){
        return {
            newAssignment: '',
        };
    },

    props: {
        assignments: Array,
    },

    methods: {
        submit(){
            this.$emit('add', this.newAssignment);

            this.newAssignment = '';
        },
    }
}