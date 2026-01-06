import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import Markdown from 'markdown-to-jsx';
import { AppLayout } from '@/components/layout/AppLayout';
import { posts } from '@/content/posts';
import { ChevronLeft, Share2, Clock, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { motion, useScroll, useSpring } from 'framer-motion';
export function PostPage() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const post = posts.find((p) => p.slug === slug);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });
  if (!post) {
    return (
      <AppLayout>
        <div className="max-w-7xl mx-auto px-4 py-24 text-center">
          <h1 className="text-4xl font-bold mb-4">Trail Lost</h1>
          <p className="text-muted-foreground mb-8">The story you're looking for has moved off the map.</p>
          <Button onClick={() => navigate('/')}>Back to Camp</Button>
        </div>
      </AppLayout>
    );
  }
  return (
    <AppLayout>
      <motion.div 
        className="fixed top-16 left-0 right-0 h-1 bg-amber-600 origin-left z-[60]"
        style={{ scaleX }}
      />
      <article className="pb-24">
        {/* Cover Image Header */}
        <div className="relative h-[60vh] md:h-[80vh] w-full">
          <img
            src={post.coverImage}
            alt={post.title}
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
          <div className="absolute inset-0 flex items-center justify-center text-center p-4">
            <div className="max-w-4xl space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Badge className="bg-amber-600 hover:bg-amber-700 text-white mb-6 uppercase tracking-widest px-4 py-1">
                  {post.category}
                </Badge>
                <h1 className="text-4xl md:text-7xl font-bold text-white leading-tight">
                  {post.title}
                </h1>
              </motion.div>
            </div>
          </div>
          <div className="absolute bottom-8 left-0 right-0 flex justify-center text-white/80 gap-8 text-sm font-medium">
            <div className="flex items-center gap-2"><Calendar className="w-4 h-4" /> {post.pubDate}</div>
            <div className="flex items-center gap-2"><Clock className="w-4 h-4" /> 5 Min Read</div>
          </div>
        </div>
        {/* Content Section */}
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 -mt-20 relative z-10 bg-[#F9F7F2] rounded-t-[3rem] pt-16">
          <div className="flex justify-between items-center mb-12">
            <Link to="/blog" className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-[#1A2421]/60 hover:text-amber-700 transition-colors">
              <ChevronLeft className="w-4 h-4" /> The Archive
            </Link>
            <Button variant="ghost" size="icon" className="rounded-full">
              <Share2 className="w-5 h-5" />
            </Button>
          </div>
          <div className="prose prose-stone lg:prose-xl prose-img:rounded-3xl prose-blockquote:border-amber-600 prose-blockquote:bg-amber-50 prose-blockquote:py-2 prose-blockquote:px-6 prose-a:text-amber-700 dark:prose-invert">
            <Markdown
              options={{
                overrides: {
                  h1: { component: 'h2', props: { className: 'text-3xl font-bold mt-12 mb-6' } },
                  h2: { component: 'h3', props: { className: 'text-2xl font-bold mt-10 mb-4' } },
                  p: { props: { className: 'mb-6 text-[#1A2421]/80 leading-relaxed' } },
                }
              }}
            >
              {post.content}
            </Markdown>
          </div>
          <div className="mt-24 pt-12 border-t border-[#1A2421]/5 text-center">
            <h4 className="text-sm font-bold uppercase tracking-widest text-amber-600 mb-4">The End of the Trail</h4>
            <p className="text-muted-foreground mb-8 italic">"Leave only footprints, take only pictures."</p>
            <div className="flex justify-center gap-4">
              <Button asChild className="rounded-full bg-[#1A2421]">
                <Link to="/">Back Home</Link>
              </Button>
            </div>
          </div>
        </div>
      </article>
    </AppLayout>
  );
}