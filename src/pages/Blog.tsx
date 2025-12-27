import { useEffect, useState } from 'react';
import { Calendar, ArrowRight } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';
import Card from '../components/Card';
import { supabase } from '../lib/supabase';
import { BlogPost } from '../types';

export default function Blog() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [featuredPost, setFeaturedPost] = useState<BlogPost | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    const { data, error } = await supabase
      .from('blog_posts')
      .select('*')
      .order('published_at', { ascending: false });

    if (error) {
      console.error('Error fetching posts:', error);
      return;
    }

    if (data) {
      setPosts(data);
      const featured = data.find(post => post.featured);
      if (featured) setFeaturedPost(featured);
    }
  };

  const categories = ['All', 'Leadership', 'Technology'];
  const filteredPosts = selectedCategory === 'All'
    ? posts.filter(post => !post.featured)
    : posts.filter(post => post.category === selectedCategory && !post.featured);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  return (
    <div className="bg-white">
      <section className="min-h-[60vh] flex items-center justify-center px-6 pt-24">
        <div className="max-w-4xl text-center">
          <AnimatedSection>
            <h1 className="text-7xl font-bold mb-6 tracking-tight">Blog</h1>
          </AnimatedSection>
          <AnimatedSection delay={200}>
            <p className="text-2xl text-gray-600">
              Insights on Leadership, Technology, and Innovation
            </p>
          </AnimatedSection>
        </div>
      </section>

      {featuredPost && (
        <section className="py-24 px-6 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <AnimatedSection>
              <h2 className="text-4xl font-bold mb-12 text-center">Featured Article</h2>
            </AnimatedSection>
            <AnimatedSection delay={200}>
              <Card>
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                  <div className="aspect-video bg-gray-300 flex items-center justify-center text-gray-600">
                    Featured Article Image
                  </div>
                  <div>
                    <span className="inline-block px-4 py-1 bg-[#15E0FB] text-black text-sm font-medium mb-4">
                      {featuredPost.category}
                    </span>
                    <h3 className="text-3xl font-bold mb-4">{featuredPost.title}</h3>
                    <div className="flex items-center text-gray-600 text-sm mb-4">
                      <Calendar size={16} className="mr-2" />
                      {formatDate(featuredPost.published_at)}
                    </div>
                    <p className="text-lg text-gray-700 leading-relaxed mb-6">
                      {featuredPost.excerpt}
                    </p>
                    <button className="inline-flex items-center text-[#15E0FB] font-medium hover:underline group">
                      Read More
                      <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                    </button>
                  </div>
                </div>
              </Card>
            </AnimatedSection>
          </div>
        </section>
      )}

      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <h2 className="text-4xl font-bold mb-8 text-center">Explore by Category</h2>
          </AnimatedSection>
          <AnimatedSection delay={200}>
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-3 font-medium transition-all duration-400 ${
                    selectedCategory === category
                      ? 'bg-[#15E0FB] text-black'
                      : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-300'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post, index) => (
              <AnimatedSection key={post.id} delay={index * 100}>
                <Card className="h-full flex flex-col group">
                  <div className="aspect-video bg-gray-300 mb-6 flex items-center justify-center text-gray-600 group-hover:scale-105 transition-transform duration-400">
                    Article Image
                  </div>
                  <span className="inline-block px-3 py-1 bg-gray-100 text-gray-800 text-xs font-medium mb-3 w-fit">
                    {post.category}
                  </span>
                  <h3 className="text-xl font-bold mb-3 group-hover:text-[#15E0FB] transition-colors duration-300">
                    {post.title}
                  </h3>
                  <div className="flex items-center text-gray-600 text-sm mb-3">
                    <Calendar size={14} className="mr-2" />
                    {formatDate(post.published_at)}
                  </div>
                  <p className="text-gray-700 leading-relaxed mb-4 flex-grow">
                    {post.excerpt}
                  </p>
                  <button className="inline-flex items-center text-[#15E0FB] font-medium hover:underline group/btn">
                    Read More
                    <ArrowRight size={18} className="ml-2 group-hover/btn:translate-x-1 transition-transform duration-300" />
                  </button>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-6 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <AnimatedSection>
            <h2 className="text-4xl font-bold mb-8 text-center">Key Themes</h2>
          </AnimatedSection>
          <div className="grid md:grid-cols-3 gap-8">
            <AnimatedSection delay={0}>
              <div className="text-center">
                <h3 className="text-2xl font-bold mb-3">Servant Leadership</h3>
                <p className="text-gray-700">
                  Exploring how leadership focused on serving others creates sustainable organizations
                </p>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={200}>
              <div className="text-center">
                <h3 className="text-2xl font-bold mb-3">Innovation & Tech</h3>
                <p className="text-gray-700">
                  Insights on emerging technologies and digital transformation strategies
                </p>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={400}>
              <div className="text-center">
                <h3 className="text-2xl font-bold mb-3">Entrepreneurship</h3>
                <p className="text-gray-700">
                  Practical wisdom on building sustainable, zero-debt businesses
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <AnimatedSection>
            <h2 className="text-4xl font-bold mb-8 text-center">Technology Insights</h2>
          </AnimatedSection>
          <AnimatedSection delay={200}>
            <Card>
              <p className="text-lg text-gray-700 leading-relaxed text-center">
                Stay updated with the latest insights on AI, machine learning, digital transformation,
                and enterprise technology trends. My articles combine practical experience with strategic
                thinking to help leaders navigate the complex technology landscape.
              </p>
            </Card>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-24 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <AnimatedSection>
            <h2 className="text-4xl font-bold mb-6">Join the Conversation</h2>
          </AnimatedSection>
          <AnimatedSection delay={200}>
            <p className="text-xl text-gray-700 mb-8">
              Subscribe to receive new articles and insights directly in your inbox
            </p>
          </AnimatedSection>
          <AnimatedSection delay={400}>
            <div className="flex gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 px-4 py-3 border-2 border-gray-300 focus:border-[#15E0FB] focus:outline-none transition-all duration-400"
              />
              <button className="px-8 py-3 bg-[#15E0FB] text-black font-medium hover:shadow-[0_0_20px_rgba(21,224,251,0.5)] transition-all duration-400">
                Subscribe
              </button>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
