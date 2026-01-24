'use client'
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const NewsFeed = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        // Using rss2json service to convert RSS to JSON
        const rssUrls = [
          'https://feeds.bloomberg.com/markets/news.rss',
          'https://www.cnbc.com/id/100003114/device/rss/rss.html',
          'https://feeds.reuters.com/reuters/businessNews'
        ];

        const promises = rssUrls.map(url =>
          fetch(`https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(url)}`)
            .then(res => res.json())
        );

        const results = await Promise.all(promises);
        const allItems = results.flatMap(result => result.items || []).slice(0, 10); // Get first 10 items

        setNews(allItems);
      } catch (err) {
        setError('Failed to load news');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  if (loading) {
    return (
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-light text-center mb-4 md:mb-6 text-[#003366]">Latest Investing News</h2>
          <div className="text-center">Loading news...</div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-light text-center mb-4 md:mb-6 text-[#003366]">Latest Investing News</h2>
          <div className="text-center text-red-500">{error}</div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-2xl md:text-3xl lg:text-4xl font-light text-center mb-4 md:mb-6 text-[#003366]"
        >
          Latest Investing News
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {news.map((item, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <h3 className="text-lg font-semibold mb-2 text-[#003366] overflow-hidden">
                <a href={item.link} target="_blank" rel="noopener noreferrer" className="hover:text-[#003366]/80">
                  {item.title}
                </a>
              </h3>
              <p className="text-gray-600 text-base md:text-lg mb-3 overflow-hidden font-light" style={{ display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical' }}>
                {item.description}
              </p>
              <div className="text-xs text-gray-500">
                {new Date(item.pubDate).toLocaleDateString()}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsFeed;