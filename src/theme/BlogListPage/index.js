import React from 'react';

import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import BlogPostItem from '@theme/BlogPostItem';
import BlogListPaginator from '@theme/BlogListPaginator';

import './styles.css';

function BlogListPage(props) {
  const {metadata, items} = props;
  const {
    siteConfig: {title: siteTitle},
  } = useDocusaurusContext();
  const isBlogOnlyMode = metadata.permalink === '/';
  const title = isBlogOnlyMode ? siteTitle : 'Blog';

  return (
    <Layout title={title} description="Blog">
      <div className="blog-list container">
        
          <div className="blog-list--items">
            {items.map(({content: BlogPostContent}) => (
              <BlogPostItem
                key={BlogPostContent.metadata.permalink}
                frontMatter={BlogPostContent.frontMatter}
                metadata={BlogPostContent.metadata}
                truncated={BlogPostContent.metadata.truncated}>
                <BlogPostContent />
              </BlogPostItem>
            ))}
            <BlogListPaginator metadata={metadata} />
          </div>
        
      </div>
    </Layout>
  );
}

export default BlogListPage;
