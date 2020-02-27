import React from "react"
import PropTypes from "prop-types"
import "./index.css"
import Header from "../../core/ui/header/header"
import { MDXProvider } from "@mdx-js/react"
import { preToCodeBlock } from "mdx-utils"
import { Code } from "../../core/ui/code"

const SecondaryLayout = ({ children }) => {
  return (
    <React.Fragment>
      <Header center={true} />
      <div className="layout-main">
        <MDXProvider
          components={{
            pre: preProps => {
              const props = preToCodeBlock(preProps)
              return <Code {...props} />
            },
          }}
        >
          {children}
        </MDXProvider>
      </div>
    </React.Fragment>
  )
}

SecondaryLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default SecondaryLayout
