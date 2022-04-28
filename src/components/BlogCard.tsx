import React from "react";

// Declaring type of props - see "Typing Component Props" for more examples
export type CardInfo = {
  id: string;
  topic: string;
  featuredMedia: string;
  title: string;
  articleUrl: string;
  author: string;
  authorUrl: string;
  date: string;
  category: string;
};

// you can choose annotate the return type so an error is raised if you accidentally return some other type
export const BlogCard = ({
  id,
  topic,
  featuredMedia,
  title,
  articleUrl,
  author,
  authorUrl,
  date,
  category,
}: CardInfo): JSX.Element => (
  <div>
    <div>{id}</div>
    <div>{topic}</div>
    <div>{featuredMedia}</div>
    <div>{title}</div>
    <div>{articleUrl}</div>
    <div>{author}</div>
    <div>{authorUrl}</div>
    <div>{date}</div>
    <div>{category}</div>
  </div>
);
