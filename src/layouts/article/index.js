import React from "react"
import PropTypes from "prop-types"
import "./index.css"
import Header from "../../core/ui/header/header"
import { MDXProvider } from "@mdx-js/react"

const ArticleLayout = ({ children }) => {
  return (
    <React.Fragment>
      <Header center={true} />
      <div className={"pt-12 post-layout"}>
        <MDXProvider
          components={{
            a: ({ children, href }) => {
              return (
                <a href={href} className={"text-primary hover:underline"}>
                  {children}
                </a>
              )
            },
          }}
        >
          {children}
        </MDXProvider>
      </div>
    </React.Fragment>
  )
}

ArticleLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default ArticleLayout
