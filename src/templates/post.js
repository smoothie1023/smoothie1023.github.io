import React from 'react';
import Helmet from 'react-helmet';
import {Link , graphql} from 'gatsby';
import Layout from '../components/layout';
import "../styles/post.css"
import "../styles/share.css"
import kebabCase from "lodash/kebabCase"
import { useLocation } from "@reach/router"
import { siteMetadata } from '../../gatsby-config';
import Share from "../components/share-button"


export default function Template({data}){
    const {markdownRemark: post}=data;
    const location = useLocation();
    //const post = data.markdownRemark;
    console.log("Path:", post)
    const cardPath = `${siteMetadata.siteUrl}+"/"+${post.frontmatter.cardImage.publicURL}`;
    return (
        <Layout title={post.frontmatter.title} desc={post.frontmatter.description}>
            <div className='mainContent'>
                <Helmet>
                    <meta property="og.type" content="article" />
                    <meta property="og:url" content={location.pathname} />
                    <meta property="og:title" content={post.frontmatter.title} />
                    <meta property="og:image" content={cardPath} />
                    <meta property="og:image:width" content="1200" />
                    <meta property="og:image:height" content="630" />
                    <meta property="og:description" content={post.frontmatter.description} />
                    <meta name="twitter:card" content="summary" />
                    <meta name="twitter:site" content="@Smoothie1023" />
                    <meta name="twitter:url" content={location.pathname} />
                    <meta name="twitter:title" content={post.frontmatter.title} />
                    <meta name="twitter:description" content={post.frontmatter.description} />
                    <meta name="twitter:image" content={cardPath} />

                </Helmet>
                <h1>{post.frontmatter.title}</h1>
                <div>
                    {post.frontmatter.tags && post.frontmatter.tags.length > 0 && post.frontmatter.tags.map(tag=>{
                        return(
                            <Link className='tags_post' to={`/tags/${kebabCase(tag)}/`}itemProp="url">
                                    {tag}
                            </Link>
                        )
                    })}
                </div>
                <div dangerouslySetInnerHTML={{__html: post.html}}/>
            </div>
            <div className="share_parent">
                <Share
                    title={post.frontmatter.title}
                    url={location.href}
                    description={post.frontmatter.description}
                />
            </div>
            <div className="returnPostPage_parent">
                <Link className="returnPostPage" to="../../blogs">←記事一覧</Link>
            </div>
        </Layout>
    )
}

export const postQuery = graphql`
    query BlogPostByPath($path: String!){
        markdownRemark(frontmatter:{path:{eq: $path} }){
            html
            frontmatter{
                date(formatString: "MMMM DD,YYYY")
                path
                title
                tags
                description
                cardImage{
                    publicURL
                    absolutePath
                    dir
                    name
                }
            }
        }
    }
`