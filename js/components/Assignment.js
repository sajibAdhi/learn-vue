export default {
    template: `
    <li>
               <label class="p-2 flex justify-between item-center">
                   {{ assignment.name }}
                   <input type="checkbox" v-model="assignment.complete" class="ml-3">
               </label>
           </li>
    `,

    props: {
        assignment: Object
    }
}