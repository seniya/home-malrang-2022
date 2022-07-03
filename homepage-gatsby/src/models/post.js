export default class Post {
  constructor(node) {
    const { id, html, excerpt, frontmatter, fields } = node;
    const { slug } = fields;
    const { emoji, categories, title, subtitle, author, date, comments } = frontmatter;

    this.id = id;
    this.excerpt = excerpt;
    this.emoji = emoji;
    this.html = html;
    this.slug = slug;
    this.title = title;
    this.subtitle = subtitle;
    this.author = author;
    this.date = date;
    this.categories = categories.split(' ');
    this.comments = comments;
  }
}
