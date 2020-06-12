import React, {useEffect} from 'react';
import styled from "styled-components";

const StyledParagraph = styled.p`

line-height: 1em;
white-space: pre-wrap;

`;

const StyledPostWrapper = styled.article`
padding: 2em;


`;

const PostLayout = ({pathContext}) => {

    const { data, slug } = pathContext;
    const {title, paragraph } = data;

    let formattedParagraph = paragraph;


    useEffect(() => {



    }, []);

    return (
        <StyledPostWrapper>
            <h2>
                {title}
            </h2>
            <StyledParagraph>
                {paragraph}
            </StyledParagraph>
            <h4>{data.author}</h4>
        </StyledPostWrapper>
    );
};

export default PostLayout;