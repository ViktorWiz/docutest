import React from 'react';

import Layout from '@theme/Layout';
import BlogPostItem from '@theme/BlogPostItem';
import BlogPostPaginator from '@theme/BlogPostPaginator';

function BlogPostPage(props) {
  const {content: BlogPostContents} = props;
  const {frontMatter, metadata} = BlogPostContents;
  return (
    <Layout title={metadata.title} description={metadata.description}>
     <article className={styles.blogPost}>
        <header className={classnames('hero', 'domain-bg', styles.header)}>
          <div className={classnames('container', styles.headerContainer)}>
           
            <h1>{title}</h1>
            <div className={styles.headerTags}>
              <Tags colorProfile="blog" tags={tags} />
            </div>
          </div>
        </header>
        <div className="container container--xs margin-vert--xl">
          <section className="markdown align-text-edges dropcap">
            <MDXProvider components={MDXComponents}><BlogPostContents /></MDXProvider>
          </section>
    
          {(metadata.nextItem || metadata.prevItem) && (
            <div className="margin-vert--xl">
              <BlogPostPaginator
                nextItem={metadata.nextItem}
                prevItem={metadata.prevItem}
              />
            </div>
          )}
        </div>
      </article>
    </Layout>
  );
}

export default BlogPostPage;
