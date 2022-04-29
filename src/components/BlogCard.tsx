import "../css/BlogCard.css";

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
    <h5 className="u-text--muted">{topic}</h5>
    <hr className="divider" />
    <div>
      <div className="p-card__content blog-card-content">
        <img className="p-card__image" src={featuredMedia} alt=""></img>
        <h3 className="p-heading--4">
          <a href={articleUrl}>{title}</a>
        </h3>
        <p className="p-heading--6">
          By <a href={authorUrl}>{author}</a> on {date}
        </p>
      </div>
      <hr className="divider" />
      <div className="p-card__footer">
        <div className="p-text">{category}</div>
      </div>
    </div>
  </div>
);
