// Auto-generated blog index
export const publishedPosts = [
  {
    "title": "Week 31 Blog Post - Maryland Roofing Topic",
    "slug": "week-31-maryland-roofing-topic",
    "category": "General",
    "publishDate": "2025-08-04",
    "excerpt": "Professional roofing insights for Maryland homeowners - Week 31 of our comprehensive guide series.",
    "keywords": [
      "Maryland roofing",
      "home improvement",
      "roofing tips"
    ]
  }
];

export const getLatestPosts = (count = 3) => {
  return publishedPosts.slice(0, count);
};

export const getPostBySlug = (slug) => {
  return publishedPosts.find(post => post.slug === slug);
};

export const getPostsByCategory = (category) => {
  return publishedPosts.filter(post => post.category === category);
};
