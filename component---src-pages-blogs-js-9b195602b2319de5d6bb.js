"use strict";(self.webpackChunk_=self.webpackChunk_||[]).push([[296],{2793:function(e,t,a){a.r(t),a.d(t,{default:function(){return s}});var l=a(7294),n=a(1977),r=a(1883),m=a(1804),c=a.n(m),o=a(5785);const u=e=>{let{totalCount:t}=e;return l.createElement("ul",null,(a=1,n=Math.ceil(t/5),(0,o.Z)(Array(n-a+1)).map(((e,t)=>a+t))).map(((e,t)=>l.createElement("li",{key:t},l.createElement(r.Link,{to:`/blogs/${1==e?"":e}`},e,"ページ")))));var a,n};function s(e){let{data:t}=e;return l.createElement(n.Z,null,l.createElement("h2",{className:"headline"},"ブログ記事一覧"),l.createElement("div",null,t.allMarkdownRemark.edges.map(((e,t)=>{let{node:a}=e;return l.createElement("div",{id:t},l.createElement("article",null,l.createElement(r.Link,{to:a.frontmatter.path},l.createElement("header",null,l.createElement("h2",null,a.frontmatter.title),l.createElement("div",null,a.frontmatter.tags&&a.frontmatter.tags.length>0&&a.frontmatter.tags.map((e=>l.createElement(r.Link,{className:"tags_tags",to:`/tags/${c()(e)}/`,itemProp:"url"},e))))),l.createElement("footer",null,a.frontmatter.date))))}))),l.createElement(u,{totalCount:t.allMarkdownRemark.totalCount}))}}}]);
//# sourceMappingURL=component---src-pages-blogs-js-9b195602b2319de5d6bb.js.map