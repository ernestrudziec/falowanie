import React, {useEffect} from "react";
import {graphql} from "gatsby";
import styled from "styled-components";
import slugify from "slugify";
import { Link } from "gatsby";

const Wrapper = styled.div`
display: flex;
justify-content: center;
align-items: flex-start;
flex-wrap: wrap;
width: 95vw;
height: auto;
margin: 3em 0;

a{
display: flex;
justify-content: center;
align-items: center;
}

`;

const Article = styled.div`
width: 320px;
height: 200px;
margin: 2em 1em;
cursor: pointer;

@media screen and (max-width: 500px){
margin: 2em 0;
width: 90%;
display: flex;
justify-content: center;
align-items: flex-start;
flex-direction: column;

}


img{
width: 100%;
height: 100%;
object-fit: cover;
}

h2{
margin-bottom: 1em;
margin-top: 0.2em;
font-size: 1.2em;
padding: 0;

}
`;


const ArticlesPage = ({data}) => {

    const articles = data.allDatoCmsArticle.edges;

    useEffect(() => {
        console.log(articles);
    }, []);

    return (
        <Wrapper>
            {
                articles.map((article) => {

                    const {id, title} = article.node;
                    let url = article.node.thumbnail.url;
                    let link = slugify(article.node.title, {
                        lower: true
                    });

                    return(
                        <Link to={`articles/${link}`}>
                    <Article id={id} key={id}>
                        <img src={url}/>
                        <h2>{title}</h2>
                    </Article>
                        </Link>
                    );
                })
            }
        </Wrapper>
    )


};

export const query = graphql`
query MyQuery {
  allDatoCmsArticle {
    edges {
      node {
        title
        paragraph
        author
        id
        thumbnail {
          url
        }
      }
    }
  }
}

`;

export default ArticlesPage;