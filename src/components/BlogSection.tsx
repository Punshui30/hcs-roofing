import React from 'react';
import { Calendar, Clock, ArrowRight, Phone } from 'lucide-react';
import { useContact } from '../context/ContactContext';

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  publishDate: string;
  readTime: string;
  category: string;
  slug: string;
}

const BlogSection: React.FC = () => {
  const { openModal } = useContact();

  // Sample blog posts - in a real implementation, these would come from a CMS or API
  const featuredPosts: BlogPost[] = [
    {
      id: 1,
      title: "How to Spot Roof Damage After a Maryland Storm",
      excerpt: "Learn the key warning signs of storm damage to your roof and when to call a professional for inspection. Don't wait until small problems become major repairs.",
      publishDate: "2024-12-15",
      readTime: "5 min read",
      category: "Storm Damage",
      slug: "spot-roof-damage-maryland-storm"
    },
    {
      id: 2,
      title: "Should You Repair or Replace Your Roof in Anne Arundel County?",
      excerpt: "Making the right decision between roof repair and replacement can save you thousands. Here's how to evaluate your roof's condition and make the best choice.",
      publishDate: "2024-12-08",
      readTime: "7 min read",
      category: "Roof Replacement",
      slug: "repair-vs-replace-roof-anne-arundel"
    },
    {
      id: 3,
      title: "How Much Does Roof Replacement Cost in Maryland (2025 Guide)",
      excerpt: "Get accurate pricing information for roof replacement in Maryland. Factors that affect cost, material options, and how to get the best value for your investment.",
      publishDate: "2024-12-01",
      readTime: "8 min read",
      category: "Cost Guide",
      slug: "roof-replacement-cost-maryland-2025"
    }
  ];

  const allBlogTitles = [
    "How to Spot Roof Damage After a Maryland Storm",
    "Should You Repair or Replace Your Roof in Anne Arundel County?",
    "How Much Does Roof Replacement Cost in Maryland (2025 Guide)",
    "Top 5 Window Installation Mistakes Homeowners Make",
    "Winter Roofing Checklist for Maryland Homes",
    "7 Signs Your Roof Needs Immediate Attention",
    "Best Roofing Materials for Maryland's Climate",
    "The Truth About \"Lifetime Roof Warranties\"",
    "How Proper Windows Save You Money on Energy Bills",
    "5 Ways to Prepare Your Roof for Hurricane Season in Pasadena, MD",
    "Why Cheap Roof Repairs Often Cost More Long-Term",
    "The Benefits of Professional Window Installation vs DIY",
    "What to Expect During a Roof Replacement Project",
    "How to Choose the Right Roofing Contractor in Maryland",
    "Common Roofing Scams and How to Avoid Them",
    "Understanding Roof Ventilation and Why It Matters",
    "How to Extend the Life of Your Roof by 5+ Years",
    "Asphalt vs. Metal Roofing – Which is Best for Maryland Homes?",
    "What Time of Year Is Best for Roof Replacement?",
    "The Role of Gutters in Protecting Your Roof",
    "How Roof Inspections Prevent Costly Repairs",
    "Why Window Seals Fail and How to Fix Them",
    "The Hidden Dangers of Neglecting Minor Roof Leaks",
    "How to File a Roofing Insurance Claim in Maryland",
    "Most Common Roofing Issues in Older Maryland Homes",
    "Why You Should Never Ignore Missing Shingles",
    "Eco-Friendly Roofing Options for Maryland Homeowners",
    "5 Factors That Affect Roof Replacement Costs in 2025",
    "Benefits of Energy-Efficient Windows in Summer and Winter",
    "How to Tell If Hail Damage Has Affected Your Roof",
    "Why Choosing a Local Roofing Company Matters",
    "How Proper Flashing Protects Your Home from Water Damage",
    "The Difference Between Roof Repair and Roof Restoration",
    "When Is a Roof Inspection Mandatory Before Selling Your Home?",
    "6 Questions to Ask Before Hiring a Window Replacement Company",
    "Common Mistakes When Choosing Roofing Materials",
    "How Poor Roofing Affects Indoor Air Quality",
    "Flat Roofs vs. Pitched Roofs – Pros and Cons in Maryland",
    "How to Spot Water Damage Before It Becomes a Big Problem",
    "Roof Maintenance Tips for Severe Weather Conditions",
    "How Window Orientation Affects Home Comfort",
    "Choosing the Right Skylight for Your Home",
    "The Impact of Roof Color on Energy Efficiency",
    "What Maryland Homeowners Need to Know About Roof Warranties",
    "The Most Durable Roofing Materials for Coastal Areas",
    "The Benefits of Professional Roof Cleaning Services",
    "How to Protect Your Roof from Ice Dams and Snow Damage",
    "5 Ways to Increase Home Value with Roof and Window Upgrades",
    "Why Proper Attic Insulation Supports Your Roof's Health",
    "Roof Safety Tips for DIY Homeowners",
    "The Importance of Annual Roof Inspections in Maryland",
    "Top Roofing and Window Trends Maryland Homeowners Love in 2025"
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Maryland Roofing & Window Insights
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Expert advice, tips, and guides for Maryland homeowners. Stay informed about roofing maintenance, window upgrades, and home protection.
          </p>
        </div>

        {/* Featured Posts */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {featuredPosts.map((post) => (
            <article key={post.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-3">
                  <Calendar className="h-4 w-4 mr-2" />
                  <span>{new Date(post.publishDate).toLocaleDateString()}</span>
                  <span className="mx-2">•</span>
                  <Clock className="h-4 w-4 mr-1" />
                  <span>{post.readTime}</span>
                </div>
                
                <span className="inline-block bg-emerald-100 text-emerald-800 text-xs px-2 py-1 rounded-full mb-3">
                  {post.category}
                </span>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                  {post.title}
                </h3>
                
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center justify-between">
                  <button className="text-emerald-600 font-semibold hover:text-emerald-700 flex items-center">
                    Read More <ArrowRight className="h-4 w-4 ml-1" />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Blog CTA */}
        <div className="bg-slate-800 text-white rounded-lg p-8 text-center">
          <h3 className="text-2xl font-bold mb-4">
            Need Expert Roofing Advice for Your Maryland Home?
          </h3>
          <p className="text-slate-200 mb-6 max-w-2xl mx-auto">
            Don't wait for problems to get worse. Get a free professional inspection and personalized recommendations from Maryland's trusted roofing experts.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={openModal}
              className="bg-emerald-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-emerald-700 transition-colors duration-200"
            >
              Schedule Free Inspection
            </button>
            <a 
              href="tel:+1-410-746-7225"
              className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-slate-800 transition-colors duration-200 flex items-center justify-center"
            >
              <Phone className="h-4 w-4 mr-2" />
              Call (410) 746-7225
            </a>
          </div>
        </div>

        {/* All Blog Topics Preview */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Upcoming Topics & Guides
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {allBlogTitles.slice(3, 15).map((title, index) => (
              <div key={index} className="bg-white p-4 rounded-lg shadow border-l-4 border-emerald-600">
                <h4 className="font-semibold text-gray-900 text-sm">{title}</h4>
                <p className="text-xs text-gray-500 mt-1">Coming soon</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <p className="text-gray-600 mb-4">
              Subscribe to get notified when new guides are published
            </p>
            <button
              onClick={openModal}
              className="bg-emerald-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-emerald-700 transition-colors duration-200"
            >
              Get Updates & Free Inspection
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;