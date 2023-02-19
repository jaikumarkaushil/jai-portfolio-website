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
  ],
};
