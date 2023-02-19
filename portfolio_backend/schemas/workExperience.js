export default {
    name: 'workExperience',
    title: 'Work Experience',
    type: 'document',
    fields: [
        {
            name: 'name',
            title: 'name',
            type: 'string'
        },
        {
            name: 'company',
            title: 'Company',
            type: 'string'
        },
        {
            name: 'desc',
            title: 'Desc',
            type: 'text'
        },
        {
            name: "order",
            title: "Order",
            type: "number",
            validation: (Rule) => Rule.min(1),
        },
        {
            name: 'imgUrl',
            title: 'Image URL',
            type: 'image',

        },
    ]
}