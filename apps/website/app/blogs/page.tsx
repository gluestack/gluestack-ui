'use client';
import React from 'react';
import { Box } from '@/components/ui/box';
import { Heading } from '@/components/ui/heading';
import { BlogListItem } from '@/components/page-components/blogs-page/BlogListItem';
import BlogsPageLayout from '@/components/page-components/blogs-page/BlogsPageLayout';

const blogs = [
  {
    title: 'Build a Simple UI with gluestack-ui and Expo',
    cover:
      'https://gluestack.github.io/public-blog-video-assets/simpleuicover.png',
    slug: 'build-a-simple-ui-with-gluestack-ui-and-expo',
    published_at: {
      start: '2025-03-12T00:00:00Z',
    },
    reading_time: 6,
    author: [
      {
        id: 10,
        avatar_url: 'https://avatars.githubusercontent.com/u/59024657?v=4',
        email: '',
        name: 'Rajat Chaudhary',
        occupation: 'Building gluestack-ui',
      },
    ],
  },
  {
    title:
      'Creating a Color Palette from Scratch: A Practical Guide for Design Systems',
    cover:
      'https://gluestack.github.io/public-blog-video-assets/colorpalette.png',
    slug: 'creating-a-color-palette-from-scratch',
    published_at: {
      start: '2025-01-30T00:00:00Z',
    },
    reading_time: 8,
    author: [
      {
        id: 10,
        avatar_url:
          'https://pbs.twimg.com/profile_images/1755143257229541377/tcB6c2VV_400x400.jpg',
        email: '',
        name: 'Pranav MV',
        occupation: 'Product Designer',
      },
    ],
  },
  {
    title: 'The Year That Was: Lessons Learned and Milestones Achieved',
    cover:
      'https://gluestack.github.io/public-blog-video-assets/yearendcover.png',
    slug: 'the-year-that-was-2024',
    published_at: {
      start: '2024-12-31T00:00:00Z',
    },
    reading_time: 9,
    author: [
      {
        id: 10,
        avatar_url: 'https://avatars.githubusercontent.com/u/99402689?v=4',
        email: '',
        name: 'Sanna Bara',
        occupation: 'Marketing gluestack-ui',
      },
    ],
  },
  {
    title:
      'Troubleshooting Common Issues with NativeWind (and Why You Should Try gluestack-ui)',
    cover:
      'https://gluestack.github.io/public-blog-video-assets/troubleshooting.png',
    slug: 'troubleshooting-common-issues-with-nativewind',
    published_at: {
      start: '2024-12-05T00:00:00Z',
    },
    reading_time: 4,
    author: [
      {
        id: 10,
        avatar_url: 'https://avatars.githubusercontent.com/u/66306233?v=4',
        email: '',
        name: 'Viraj Joshi',
        occupation: 'Co-author of gluestack-ui',
      },
    ],
  },
  {
    title: 'gluestack-ui v2: Stable Release with NativeWind v4.1 Support 🚀',
    cover:
      'https://gluestack.github.io/public-blog-video-assets/stable-release-v2.png',
    slug: 'gluestack-ui-v2-stable-release-with-nativewind-v4-1-support',
    published_at: {
      start: '2024-12-03T00:00:00Z',
    },
    reading_time: 5,
    author: [
      {
        id: 10,
        avatar_url: 'https://avatars.githubusercontent.com/u/66306233?v=4',
        email: '',
        name: 'Viraj Joshi',
        occupation: 'Co-author of gluestack-ui',
      },
    ],
  },
  {
    title: 'Mastering gluestack-ui v2 Animations with NativeWind',
    cover:
      'https://gluestack.github.io/public-blog-video-assets/AnimationBlogCoverImage.png',
    slug: 'mastering-gluestack-ui-v2-animations-with-nativewind',
    published_at: {
      start: '2024-11-22T00:00:00Z',
    },
    reading_time: 12,
    author: [
      {
        id: 2,
        avatar_url: 'https://avatars.githubusercontent.com/u/62778911?v=4',
        email: '',
        name: 'Sravan Kumar Velangi',
        occupation: 'Building gluestack-ui',
      },
    ],
  },
  {
    title: 'Designing with gluestack-ui',
    cover: '/images/blogs/blog-4/cover4.png',
    slug: 'designing-with-gluestack-ui',
    published_at: {
      start: '2024-09-11T00:00:00Z',
    },
    reading_time: 12,
    author: [
      {
        id: 2,
        avatar_url: 'https://avatars.githubusercontent.com/u/82362151?v=4',
        email: '',
        name: 'Tanisha Biswas',
        occupation: 'Product Designer',
      },
    ],
  },
  {
    title: 'gluestack-ui v2.0 Design Kit ',
    cover: '/images/blogs/cover3.png',
    slug: 'gluestack-ui-v2-design-kit',
    published_at: {
      start: '2024-08-14T00:00:00Z',
    },
    reading_time: 5,
    author: [
      {
        id: 2,
        avatar_url: 'https://avatars.githubusercontent.com/u/82362151?v=4',
        email: '',
        name: 'Tanisha Biswas',
        occupation: 'Product Designer',
      },
    ],
  },
  {
    title: 'Why we built gluestack-ui v2',
    cover: '/images/blogs/cover1.png',
    slug: 'why-gluestack-ui-v2',
    published_at: {
      start: '2024-07-23T00:00:00Z',
    },
    reading_time: 5,
    author: [
      {
        id: 1,
        avatar_url: 'https://avatars.githubusercontent.com/u/9393975?v=4',
        email: '',
        name: 'Suraj Ahmed',
        occupation: 'Building gluestack-ui',
      },
    ],
  },
  {
    title: 'gluestack-ui v2 is here!',
    cover: '/images/blogs/cover2.png',
    slug: 'gluestack-ui-v2-is-here',
    published_at: {
      start: '2024-07-23T00:00:00Z',
    },
    reading_time: 6,
    author: [
      {
        id: 1,
        avatar_url: 'https://avatars.githubusercontent.com/u/9393975?v=4',
        email: '',
        name: 'Suraj Ahmed',
        occupation: 'Building gluestack-ui',
      },
    ],
  },
  {
    title: 'gluestack v3 release',
    cover: '/images/blogs/cover2.png',
    slug: 'gluestack-v3-release',
    published_at: {
      start: '2024-07-23T00:00:00Z',
    },
    reading_time: 6,
    author: [
      {
        id: 1,
        avatar_url: 'https://avatars.githubusercontent.com/u/9393975?v=4',
        email: '',
        name: 'Paridhi Tulsian',
        occupation: 'Building gluestack-ui',
      },
    ],
  },
];

const Blogs = () => {
  return (
    <BlogsPageLayout>
      <Heading className="text-4xl lg:text-5xl my-6 pt-4 text-typography-950">
        Latest posts
      </Heading>
      <Box>
        {blogs &&
          blogs.map((blog: any, index: number) => {
            return <BlogListItem key={blog.id} blog={blog} />;
          })}
      </Box>
    </BlogsPageLayout>
  );
};

export default Blogs;
