import { defineType, defineField } from "sanity";

export default defineType({
  name: 'video',
  type: 'document',
  title: 'Video',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
    }),
    defineField({
      name: 'year',
      title: 'Year',
      type: 'number',
    }),
    defineField({
      name: 'duration',
      title: 'Duration',
      type: 'string',
    }),
    defineField({
      name: "description",
      type: "string",
      title: "Description",
      validation: (Rule: any) => Rule.max(200)
    }),
    defineField({
      name: 'maturityRating',
      title: 'Maturity Rating',
      type: 'string',
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'array',
      // of: [{ type: 'category' }]
      of: [{ type: "reference", to: [{ type: "category" }] }]
    }),
  ]
})