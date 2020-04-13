import React from 'react';
import classnames from 'classnames';
import {MDXProvider} from '@mdx-js/react';

import Link from '@docusaurus/Link';
import MDXComponents from '@theme/MDXComponents';

import './styles.css';

const MONTHS = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

function BlogPostItem(props) {
  const {
    children,
    frontMatter,
    metadata,
    truncated,
    isBlogPostPage = false,
  } = props;
  const {date, permalink, tags} = metadata;
  const {author, title} = frontMatter;

  const authorURL = frontMatter.author_url || frontMatter.authorURL;
  const authorTitle = frontMatter.author_title || frontMatter.authorTitle;
  const authorImageURL =
    frontMatter.author_image_url || frontMatter.authorImageURL;

    return (
      <Link to={permalink + '/'} className={classnames('blog-post-item', 'domain-bg', 'domain-bg--hover')}>
        <article>
          <h2>{title}</h2>
          <div className="blog-post-item--subtitle">{description}</div>
          
          <Tags colorProfile="blog" tags={tags} />
        </article>
      </Link>
    );

}

export default BlogPostItem;
