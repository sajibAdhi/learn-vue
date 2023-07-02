export default {
    template: `
        <div class="flex gap-2">
            <button
                @click="$emit('update:currentTag', tag.id)" 
                v-for="tag in tags" 
                class="border rounded px-1 py-px text-sm"
                :class="{
                    'border-blue-600 text-blue-600': currentTag === tag.id
                }"
            >{{tag.name}}</button>
        </div>
       `,

    props: {
        initialTags: Array,
        currentTag: Number,
    },

    computed: {
        tags() {
            return [{"id":0, "name":"all"}, ...this.initialTags];
        },
    }
}