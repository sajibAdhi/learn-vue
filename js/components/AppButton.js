export default {
    template: `
        <button 
            :class="{
                'border rounded px-3 py-1 disabed:cursor-not-allowed': true,
                'bg-gray-500 hover:bg-gray-700 text-gray-700': type === 'secondary',
                'bg-blue-500 hover:bg-blue-700 text-white': type === 'primary',
                'bg-red-500 hover:bg-red-700 text-white': type === 'danger',
                'is-loading': processing,
            }" 
            :disabled="processing"
        >
            <slot />    
        </button>
    `,

    props: {
        type: {
            type: String,
            default: 'primary',
        },

        processing: {
            type: Boolean,
            default: false,
        },
    },
}
