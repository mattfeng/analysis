const pathPrefix = `math`

module.exports = {
  pathPrefix: `/${pathPrefix}`,
  plugins: [
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `abbott`,
        path: `${__dirname}/../abbott`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `harveymudd`,
        path: `${__dirname}/../harveymudd`
      }
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-copy-linked-files`,
            options: {
              destinationDir: pathPrefix,
              ignoreFileExtensions: [`png`, `jpg`, `jpeg`, `bmp`, `tiff`]
            }
          },
          {
            resolve: `gatsby-remark-katex`,
            options: {
              strict: `ignore`
            }
          },
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 600,
              linkImagesToOriginal: false,
              disableBgImageOnAlpha: true,
            }
          },
          {
            resolve: `gatsby-remark-table-of-contents`,
            options: {
              exclude: "Table of Contents",
              tight: false,
              fromHeading: 1,
              toHeading: 6,
              className: "table-of-contents"
            },
          },
          `gatsby-remark-autolink-headers`,
          {
            resolve: `gatsby-remark-highlight-code`,
            options: {
              lineNumbers: true,
            }
          },
        ],
      },
    },
  ],
}
