import "../css/BlogCard.css";

// Declare type of props - see "Typing Component Props" for more examples
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

// Component that renders a single blog card with the data it received as props
export const BlogCard = ({
  topic,
  featuredMedia,
  title,
  articleUrl,
  author,
  authorUrl,
  date,
  category,
}: CardInfo): JSX.Element => (
  <div className="p-card blog-card">
    {/*Account for empty topic*/}
    <h5 className="u-text--muted">{topic ? topic : "OTHER"}</h5>
    <div className="p-card__content blog-card-content">
      <img className="p-card__image" src={featuredMedia} alt=""></img>
      <h3 className="p-heading--4 blog-card-title">
        <a href={articleUrl}>{title}</a>
      </h3>

      <p className="p-heading--6">
        By <a href={authorUrl}>{author}</a> on {date}
      </p>
    </div>
    <div className="p-card__footer blog-card-footer">
      <div className="p-text">
        {/*Unsure what the other categories are; would need to map 
          this out in a separate function outside of this component*/}
        {category === "Articles" ? "Article" : category}
      </div>
    </div>
  </div>
);
