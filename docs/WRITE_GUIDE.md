# WildPath 写作指南 (Authoring Guide)
欢迎来到 WildPath。这是一个专为极简主义和沉浸式阅读设计的户外博客。
## 如何添加新文章
目��所有文章都存储在 `src/content/posts.ts` 文件中。
### 1. 文章结构
每一篇文章都是一个 `Post` 对象：
```typescript
{
  title: "文章标题",
  slug: "url-friendly-slug",
  pubDate: "YYYY-MM-DD",
  category: "Hiking | Gear | Camping",
  coverImage: "Unsplash 链接",
  excerpt: "简短的文章摘要，��于列表页展示",
  content: "Markdown 格式的正文内容"
}
```
### 2. 使用 Markdown
文章正文使用 Markdown 格式。推荐使用以下组件来保持视觉风格：
- **标题**: 使用 `##` 或 `###` 进行分段。
- **引用**: 使用 `> ` 来突出金句或引用。
- **列表**: 使用 `-` 或 `*` 进行项目列举。
- **图片**: Markdown 支持图片，但建议使用高质量的 Unsplash 链接。
### 3. 图片规范
为了保��加载速度和视觉统一：
- **比例**: 封面图建议使用 `21:9` 或 `16:9`。
- **来源**: 优��使用 Unsplash，并添加 `?auto=format&fit=crop&w=2000` 参数以优化。
## 设计哲学
- **留白**: 不要��怕长段落之间的间距。
- **极简**: 减少不必要的 UI 干扰，��读者的注意力集中在文字和摄影上。
- **真实**: 分享真实的体验，无论是壮丽的景色还是艰苦的瞬间。