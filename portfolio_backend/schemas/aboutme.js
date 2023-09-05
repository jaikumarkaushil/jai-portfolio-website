import { defineType, defineField } from "sanity";
export default {
  name: "aboutme",
  title: "About Me",
  type: "document",
  fields: [
    {
      name: "description",
      title: "Description",
      type: 'text',
      rows: 4
    },
    {
      name: "profileImg",
      title: "Profile Picture",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "resume",
      title: "Resume",
      type: "file",
      options: {
        accept: "application/pdf",
      },
    },
    {
      name: "resume2",
      title: "Resume",
      type: "url",
      validation: Rule => Rule.uri({
        scheme: ['http', 'https', 'mailto', 'tel']
      })
    },
    {
      name: 'question',
      title: 'Question',
      type: 'string',
    },
    {
      name: "quesAnswer",
      title: "Answer - description",
      type: 'text',
      rows: 5
    },
  ],
};
