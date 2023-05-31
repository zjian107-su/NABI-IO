<p align="center">
  <a href="https://nabi.io/">
    <img width="200" height="100" src="https://user-images.githubusercontent.com/35544956/83921374-35c9eb80-a74c-11ea-9964-077fdad5827d.png">
  </a>
</p>
<h2 align="center">
  狗狗的世界: Raise Your First Beautiful and Obedient Puppy 
</h2>

<p align="center">
  <a href="https://github.com/zjian107-su/nabi-io/blob/master/nabi-io/LICENSE">
    <img src="https://img.shields.io/github/license/zjian107-su/nabi-io?style=plastic" alt="Nabi.io: Nabi.io is released under the MIT license." />
  </a>
  <a href="https://github.com/zjian107-su/nabi-io">
    <img src="https://img.shields.io/github/stars/zjian107-su/nabi-io?logo=nabi&style=plastic" alt="star the project" />  
  </a>
</p>

## 🍑 Live Website - [Nabi.io](https://nabi.io)

<a>
<p align="center">  <a href="https://nabi.io"> <img src="https://github.com/zjian107-su/NABI-IO/assets/35544956/fd0703cd-3989-4b2c-a652-be5710b0c3e6" alt="Nabi.io screenshot" width="600"> </a></p>

## 📝 **Change Log**

This section aims to keep notes on daily improvements and detail changes.

- 0527: Initiated the web development
  - Started as a simple "Hello World" website and then improved it while learning on "Gatsby Tutorial and Projects Course".
  - added two RCC(react class component) of /home_page and /intro
- 0528: Emoji, Layout, GraphQL, useStaticQuery, StaticQuery, pageQuery, Markdown, MDX
  - Added [emojis](https://medium.com/@seanmcp/%EF%B8%8F-how-to-use-emojis-in-react-d23bbf608bf7) into the structure. The **first** method, using
    `<span role='img' aria-label='sheep'>🐑</span>`. The **second** method is using a component, such as:

    ```javascript
    import React from 'react'
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

  - Improved `<Layout>` by adding a footer and a nav bar
  - Learned that style component's usage is just like GraphQL search. They both use backtick.
  - StaticQuery hook from GraphQL IDE Code Exporter can help extract info by editing codes after `return`. But you can also use `import {useStaticQuery, graphql} from 'gatsby'` - creating the **first object** after fetching info using GraphQL, then create the **second object** passing the object to useStaticQuery(). So later you can use the second object as json format to search info.

- 0529: Improved Markdown syntax for logo creation
- 0531: Performed `npm install --save-dev xxxxx` to fix dev dependency issues
  - Gatsby image operation
- 0601 -> 0605: learned and tested `gatsby -imagesharp`, `gatsby-image` and `gatsby-markdown-transformer` plugins
  - useStaticQuery(Code Explorer: StaticQuery Hook), import `**useStaticQuery**`: the useStaticQuery() function can only fun in the functional component. But you can pass the query that is outside of the function.
  - StaticQuery(Code Explorer: StaticQuery), import **StaticQuery**: you will use `<StaticQuery>` as a component in your codes. It has TWO props, `` query={graphql`BLOCK`} `` and `render={data} => <div><dive>`
  - pageQuery(Code Explorer: Page Query), import only GraphQL. It has to be in a page directory, not anywhere else. You have to pass a prop parameter. But in the console you will see a lot of props but no data, so you need to export dataQuery too.
  - Created a photo gallery page to show Nabi's pictures
  - Created a page that's generated with NodeAPI and a markdown file with its Layout CSS.
- 0606 -> 0607
  - MDX = JSX + Markdown. JSX is not the best for content, Markdown is not the best for operations. Therefore, MDX with theme might be the better option
  - Migrated packages from using npm to yarn. Yarn is lightly faster and I prefer how clean yarn is. [Getting Started with Gatsby Themes and MDX](https://www.gatsbyjs.org/blog/2019-02-26-getting-started-with-gatsby-themes/)
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
  - [x] Created Article pages with Gatsby-node.js and markdown file. Test pass. Commented codes using plugin-remark. GraphQL to asecend posts
  - [x] Styled some pages with CSS-in-JS(Emotion Core)
  - [x] Reorganized unused files
- 0608
  - Successfully filtered images from gallery
  - Tested Contentful headless CMS
- 0609
  - New post: come-when-called
  - Implemented to filter images from gallery
  - Tested Strapi CMS for personal website
- 0617
  - Unfinished new post: potty training and crate training
  - Improved the home page header section and layout css. Learned how to use rem
- 0625
  - Tested CSS modules and Typography.js
- 0629 Added first-ownership post and reorder possts in logic order
- 0702 Finished all the first set of posts
- 0702-0807 Finished the home page redesign, and implemented gallery page from the [Gatsby starter](https://www.gatsbyjs.org/starters/baobabKoodaa/gatsby-starter-photo-book/)
- 0808 Minor changes in the home page; merged duplicated CSS codes
- 0809 Gallery page infinite scroll and pagination fix, and many more photos added

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
