import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"
import config from "data/site/config"

function Seo({ description, title, url, image, type }) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
            lang
          }
        }
      }
    `
  )

  const metaDescription = description || site.siteMetadata.description
  const metaTitle = title || site.siteMetadata.title
  return (
    <Helmet
      htmlAttributes={{
        lang: "en",
      }}
      title={site.siteMetadata.title}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: metaTitle,
        },
        {
          property: `og:image`,
          content: image,
        },
        {
          property: `og:url`,
          content: url,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: type,
        },
        {
          property: `twitter:card`,
          content: "summary_large_image",
        },
        {
          property: `twitter:creator`,
          content: config.social.networks[1].user,
        },
        {
          property: `twitter:title`,
          content: metaTitle,
        },
        {
          property: `twitter:description`,
          content: metaDescription,
        },
        {
          property: `twitter:image`,
          content: image,
        },
      ]}
    />
  )
}

Seo.defaultProps = {
  meta: [],
  description: ``,
  type: "website",
}

Seo.propTypes = {
  description: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string,
  url: PropTypes.string,
  image: PropTypes.string,
  type: PropTypes.string,
}

export default Seo
