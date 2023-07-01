export default {
    template: `
        <button class="bg-gray-200 hover:bg-gray-400 border rounded px-3 py-1 disabed:cursor-not-allowed" :disabled="processing">
            <slot />    
        </button>
    `,
    data() { return { processing: true } },
}
