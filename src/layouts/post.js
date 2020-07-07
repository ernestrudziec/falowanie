import React, { useEffect } from "react"
import styled from "styled-components"
import { MDXRenderer } from "gatsby-plugin-mdx"
import ReactMarkdown from "react-markdown"
import { Helmet } from "react-helmet"

const StyledParagraph = styled.div`
  line-height: 2em;
  white-space: pre-wrap;
  max-width: 600px;

  img {
    max-width: 600px;

    @media screen and (max-width: 700px) {
      width: 100%;
    }
  }
`

const StyledPostWrapper = styled.article`
  padding: 2em;
`

const PostLayout = ({ pathContext }) => {
  const { data, slug } = pathContext
  const { title, paragraph, thumbnail } = data

  let formattedParagraph = paragraph

  return (
    <>
      <Helmet>
        <title>Falowanie - {title}</title>

        <meta property="og:type" content="article" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={paragraph} />
        <meta property="og:image" content={thumbnail.url} />
      </Helmet>
      <StyledPostWrapper>
        <h2>{title}</h2>

        <StyledParagraph>
          <ReactMarkdown source={paragraph} />
        </StyledParagraph>
        <h4>{data.author}</h4>
      </StyledPostWrapper>
    </>
  )
}

export default PostLayout
