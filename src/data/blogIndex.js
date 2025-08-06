// Auto-generated blog index - updated by GitHub Actions
export const publishedPosts = [];

export const getLatestPosts = (count = 3) => {
  return publishedPosts.slice(0, count);
};

export const getPostBySlug = (slug) => {
  return publishedPosts.find(post => post.slug === slug);
};

export const getPostsByCategory = (category) => {
  return publishedPosts.filter(post => post.category === category);
};

export const getAllCategories = () => {
  const categories = [...new Set(publishedPosts.map(post => post.category))];
  return categories.sort();
};

export const getPostCount = () => {
  return publishedPosts.length;
};
