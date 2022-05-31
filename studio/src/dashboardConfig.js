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
                    "629651cdfb6780137d88c505",
                  title: "Sanity Studio",
                  name: "sanity-gatsby-blog-studio-t72dq8y5",
                  apiId: "63f10a55-2640-4391-b06f-a9315318cef7",
                },
                {
                  buildHookId: "629651cdff417b13d0ecf13d",
                  title: "Blog Website",
                  name: "sanity-gatsby-blog-web-erchew5q",
                  apiId: "173b4f59-f02a-46ab-849a-ea15e5ffadc6",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/ltraccount/sanity-gatsby-blog",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanity-gatsby-blog-web-erchew5q.netlify.app",
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
