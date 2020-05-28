# **NABI.IO**

A Gatsby website that helps people to raise a lovely first pup. #PersonalProject2020

## **COllaborator**

- [Daniel Zezheng Jiang](https://github.com/zjian107-su)
- [Guan Victor Wang](https://github.com/ArchimedesAshes)

## **Change Log**

- 0527: Initiate the web dev. 
  - Starting as "Hello World" and then improving while learning on "Gatsby Tutorial and Projects Course". 
  - added two RCC(react class component) of /home_page and /intro
- 0528: 
  - Adding [emojis](https://medium.com/@seanmcp/%EF%B8%8F-how-to-use-emojis-in-react-d23bbf608bf7) into the structure. The first way, using 
    `<span role="img" aria-label="sheep">🐑</span>`. The second way is using a component, such as:
    ```javascript
    import React from 'react';
    const Emoji = props => (
      <span
        className="emoji"
        role="img"
        aria-label={props.label ? props.label : ""}
        aria-hidden={props.label ? "false" : "true"}
      >
        {props.symbol}
      < /span>
    );
    export default Emoji;
    ```

    You may use the Emoji component as `<Emoji symbol="🐑" label="sheep"/>`
  - Improving `<Layout>` by adding footer and link