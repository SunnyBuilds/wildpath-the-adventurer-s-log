import React from 'react';
import { Link } from 'react-router-dom';
import { AppLayout } from '@/components/layout/AppLayout';
import { posts } from '@/content/posts';
import { ArrowRight, Mountain, Trees, Compass } from 'lucide-react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
export function HomePage() {
  const featuredPost = posts[0];
  const latestPosts = posts.slice(1);
  return (
    <AppLayout>
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-20 pb-16 md:pt-32 md:pb-24">
        <div className="absolute inset-0 bg-gradient-to-br from-amber-50 to-emerald-50 opacity-60 -z-10" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <Badge variant="outline" className="px-4 py-1 border-amber-500/30 text-amber-700 bg-amber-500/5">
              Est. 2024 — Field Journal
            </Badge>
            <h1 className="text-5xl md:text-8xl font-display font-bold tracking-tight text-[#1A2421]">
              The Path <span className="text-amber-600 italic">Less</span> Traveled.
            </h1>
            <p className="max-w-2xl mx-auto text-lg md:text-xl text-muted-foreground leading-relaxed">
              Immersive storytelling from the edge of the wild. Minimalist guides, breathtaking photography, and the ethics of exploration.
            </p>
            <div className="flex flex-wrap justify-center gap-4 pt-4">
              <Button asChild size="lg" className="bg-[#1A2421] text-white rounded-full px-8 hover:bg-[#1A2421]/90 transition-all hover:scale-105">
                <Link to="/blog">Explore Archive</Link>
              </Button>
              <Button asChild variant="ghost" size="lg" className="rounded-full gap-2">
                <Link to="/about">Our Philosophy <ArrowRight className="w-4 h-4" /></Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
      {/* Featured Marquee */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <Link to={`/blog/${featuredPost.slug}`} className="group block">
          <div className="relative aspect-[21/9] rounded-3xl overflow-hidden shadow-2xl">
            <img
              src={featuredPost.coverImage}
              alt={featuredPost.title}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            <div className="absolute bottom-0 left-0 p-6 md:p-12 text-white max-w-3xl">
              <Badge className="mb-4 bg-amber-600 hover:bg-amber-600 border-none">Latest Expedition</Badge>
              <h2 className="text-3xl md:text-5xl font-bold mb-4">{featuredPost.title}</h2>
              <p className="text-lg text-gray-200 line-clamp-2 mb-6 opacity-90 group-hover:opacity-100 transition-opacity">
                {featuredPost.excerpt}
              </p>
              <div className="flex items-center gap-4 text-sm font-medium">
                <span>Read Story</span>
                <div className="w-8 h-px bg-white/40" />
                <span>{featuredPost.pubDate}</span>
              </div>
            </div>
          </div>
        </Link>
      </section>
      {/* Grid of Latest Stories */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="flex justify-between items-end mb-12">
          <div className="space-y-2">
            <h3 className="text-sm font-bold uppercase tracking-widest text-amber-600">Archive</h3>
            <h4 className="text-3xl md:text-4xl font-bold">Recent Tales</h4>
          </div>
          <Button variant="link" asChild className="text-amber-700 hidden sm:flex">
            <Link to="/blog">View All Posts <ArrowRight className="ml-2 w-4 h-4" /></Link>
          </Button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {latestPosts.map((post) => (
            <Link key={post.slug} to={`/blog/${post.slug}`} className="group">
              <Card className="border-none bg-transparent shadow-none overflow-hidden">
                <div className="aspect-video rounded-2xl overflow-hidden mb-6 relative">
                  <img
                    src={post.coverImage}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <Badge className="absolute top-4 left-4 bg-white/90 text-[#1A2421] hover:bg-white">{post.category}</Badge>
                </div>
                <CardContent className="p-0">
                  <h5 className="text-2xl font-bold mb-3 group-hover:text-amber-700 transition-colors line-clamp-2">
                    {post.title}
                  </h5>
                  <p className="text-muted-foreground mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-tighter text-[#1A2421]/60">
                    <span>{post.pubDate}</span>
                    <span>•</span>
                    <span>5 Min Read</span>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </section>
      {/* Quick Access Categories */}
      <section className="bg-[#1A2421] text-[#F9F7F2] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h4 className="text-2xl md:text-3xl font-bold mb-12">Find Your Wild</h4>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Link to="/blog?category=Hiking" className="group flex flex-col items-center gap-4">
              <div className="w-16 h-16 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-[#1A2421] transition-all">
                <Mountain className="w-8 h-8" />
              </div>
              <span className="font-bold uppercase tracking-widest text-sm">Mountain</span>
            </Link>
            <Link to="/blog?category=Camping" className="group flex flex-col items-center gap-4">
              <div className="w-16 h-16 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-[#1A2421] transition-all">
                <Trees className="w-8 h-8" />
              </div>
              <span className="font-bold uppercase tracking-widest text-sm">Forest</span>
            </Link>
            <Link to="/blog?category=Gear" className="group flex flex-col items-center gap-4">
              <div className="w-16 h-16 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-[#1A2421] transition-all">
                <Compass className="w-8 h-8" />
              </div>
              <span className="font-bold uppercase tracking-widest text-sm">Equip</span>
            </Link>
          </div>
        </div>
      </section>
    </AppLayout>
  );
}