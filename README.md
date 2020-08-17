<p align="center">
  <a href="https://nabi.io/">
    <img width="200" height="100" src="https://user-images.githubusercontent.com/35544956/83921374-35c9eb80-a74c-11ea-9964-077fdad5827d.png">
  </a>
</p>
<h2 align="center">
  狗狗的世界: Raise Your First Beautiful and Obdient Puppy 
</h2>

<p align="center">
  <a href="https://github.com/zjian107-su/nabi-io/blob/master/nabi-io/LICENSE">
    <img src="https://img.shields.io/github/license/zjian107-su/nabi-io?style=plastic" alt="Nabi.io: Nabi.io is released under the MIT license." />
  </a>
  <a href="https://github.com/zjian107-su/nabi-io">
    <img src="https://img.shields.io/github/stars/zjian107-su/nabi-io?logo=nabi&style=plastic" alt="star the project" />  
  </a>
</p>

This page is used to update my changes for this project. [Read more details about Nabi.io instead of Daniel's Code Notes](./nabi-io/README.md)

## **Cpllaborator**

- [Daniel Zezheng Jiang](https://github.com/zjian107-su)

## 📝 **Change Log**

This section aims to keep notes on daily improvements and detail changes.

- 0527: Initiate the web dev.
  - Starting as "Hello World" and then improving while learning on "Gatsby Tutorial and Projects Course".
  - added two RCC(react class component) of /home_page and /intro
- 0528: Emoji, Layout, grpahQL, userStaticQuery

  - Adding [emojis](https://medium.com/@seanmcp/%EF%B8%8F-how-to-use-emojis-in-react-d23bbf608bf7) into the structure. The **first** method, using
    `<span role="img" aria-label="sheep">🐑</span>`. The **second** method is using a component, such as:

    ```javascript
    import React from "react"
    const Emoji = props => (
      <span
        className="emoji"
        role="img"
        aria-label={props.label ? props.label : ""}
        aria-hidden={props.label ? "false" : "true"}
      >
        {props.symbol}
      </span>
    )
    export default Emoji
    ```

    You may use the Emoji component as `<Emoji symbol="🐑" label="sheep"/>`

  - Improving `<Layout>` by adding footer and navbar
  - Learned that style component's usage is just like graphql search. They both use backtsick.
  - StaticQuery hook from Graphiql IDE Code Exporter can help extract info by editing codes after `return`. But you can also using `import {useStaticQuery, graphql} from 'gatsby'` - creating the **first object** after fetching info using graphql, then create the **second object** passing the object to useStaticQuery(). So later you can use the second object as json format to search info.

- 0529: Markdown syntax improve, logo creation
- 0531: `npm install --save-dev xxxxx` for fixing dev dependencies issues
  - gatsby image operation
- 0601 -> 0605: learn and test gatsby -imagesharp, gatsby-image and gatsby-markdown-transformer plugins.
  - useStaticQuery(Code Explorer: StaticQuery Hook), import **useStaticQuery**: the useStaticQuery() function can only fun in the functional component. But you can pass the query that is outside of the function.
  - StaticQuery(Code Explorer: StaticQuery), import **StaticQuery**: you will use `<StaticQuery>` as a component in your codes. It has TWO props, `` query={graphql`BLOCK`} `` and `render={data} => <div><dive>`
  - pageQuery(Code Explorerm: Page Query), import only graphql. It has to be in a page directory, not anywhere else. You have to pass a prop parameter. But in the console you will see a lot of props but no data, so you need to export dataQuery too.
  - Created a photo gallery page to show Nabi's pictures
  - Created a page that's generated with NodeAPI and a markdownfile with its Layout CSS.
- 0606 -> 0607
  - MDX = JSX + Markdown. JSX is not the best for content, Markdown is not the best for operatins. So MDX with theme, might be the better option
  - Changed all npms to yarn. Yarn vs NPM5. Very smiliar compare to "yarn vs npm3". But yarn is lightly faster and I prefer how clean yarn is. [Getting Started with Gatsby Themes and MDX](https://www.gatsbyjs.org/blog/2019-02-26-getting-started-with-gatsby-themes/)
- 0608
  - to see pages that are created by plugin or codes
    ```
    {
      allSitePage {
        edges {
          node {
            path
            component
            pluginCreator {
              name
              pluginFilepath
            }
          }
        }
      }q
    }
    ```
  - [x] Create Article pages with Gatsby-node.js and markdown file. Test pass. Commented codes using plugin-remark. GraphQL to asecend posts
  - [x] Style some pages with CSS-in-JS(Emotion Core)
  - [x] Reorganized unused files
- 0608
  - successfully filtered images from gallery
  - tested Contentful headless CMS
- 0609
  - new post: come-when-called
  - implemented to filter images from gallery
  - tested Strapi CMS for personal website
- 0617
  - unfinsished new post: potty training and crate traning
  - improving the home page header section and layout css. Learnin how to use rem
- 0625
  Test CSS modules and Typography.js
- 0629 Added first-ownership post and reorder possts in logic order
- 0702 Finsihed all the first set of posts
- 0702-0807 Finished the home page redesign, and implemented gallery page from the [Gatsby starter](https://www.gatsbyjs.org/starters/baobabKoodaa/gatsby-starter-photo-book/)
- 0808 Minor change in the home page, merge duplicated CSS codes
- 0809 Gallery page infinite scorll and pagination fix, and many more photos added

## Useful Links or Commands for Dev

- [Set up your Node.js development environment with WSL 2](https://docs.microsoft.com/en-us/windows/nodejs/setup-on-wsl2)
- `$ sudo lsof -t -i tcp:8000 | xargs kill -9`

## Post List

1. Daniel's Intro - 0301
2. First Ownership - 0308
3. Living with Kids - 0315
4. House Training - 0322
5. Separation Anxiety - 0329
6. Potty Training - 0405
7. Sleep and Nap - 0412
8. Come When Called - 0419
9. Socialization - 0426
10. Biting - 0503
11. Fear Period - 0510
