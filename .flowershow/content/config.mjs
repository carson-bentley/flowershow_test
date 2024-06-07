const config = {
    title: "Testing",
    description: "testing",
    showComments: true,
    navLinks: [{href: "/test", name:"test"}, {href:"/", name:"home"}],
    comments: {
        provider: 'giscus',
        pages: ["home"],
        config: {
            repo: process.env.NEXT_PUBLIC_GISCUS_REPO,
            repositoryId: process.env.NEXT_PUBLIC_GISCUS_REPOSITORY_ID,
            category: process.env.NEXT_PUBLIC_GISCUS_CATEGORY,
            categoryId: process.env.NEXT_PUBLIC_GISCUS_CATEGORY_ID,
          },
      },
      comments: {
        provider: 'giscus',
        pages: ["test"],
        config: {
            repo: process.env.NEXT_PUBLIC_GISCUS_REPO,
            repositoryId: process.env.NEXT_PUBLIC_GISCUS_REPOSITORY_ID,
            category: process.env.NEXT_PUBLIC_GISCUS_CATEGORY,
            categoryId: process.env.NEXT_PUBLIC_GISCUS_CATEGORY_ID,
          },
      }
};
export default config;