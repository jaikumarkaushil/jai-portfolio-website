export default {
    name: 'experiences',
    title: 'Experiences',
    type: 'document',
    fields: [
        {
            name: 'year',
            title: 'Year',
            type: 'string'
        },
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
            name: 'logoUrl',
            title: 'Logo URL',
            type: 'image',

        },
        {
            name: 'imgUrl',
            title: 'Image URL',
            type: 'image',
        },
        {
            name: "order",
            title: "Order",
            type: "number",
            validation: (Rule) => Rule.min(1),
        },
        {
            name: 'works',
            title: 'Works',
            type: 'array',
            of: [{ type: 'workExperience' }]
        }
    ]
}