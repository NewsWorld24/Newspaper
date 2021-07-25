export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "60fdccfb5d34be163665ec9c",
                  title: "Sanity Studio",
                  name: "newspaper-studio",
                  apiId: "2acf4f60-7dfd-4fa8-8c9b-349e89a3a735",
                },
                {
                  buildHookId: "60fdccfc41069713cbfb556b",
                  title: "Blog Website",
                  name: "newspaper-web",
                  apiId: "982bfbb2-c955-4be6-bdb6-4016046308c6",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/NewsWorld24/Newspaper",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://newspaper-web.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
