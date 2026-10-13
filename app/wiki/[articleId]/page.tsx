import type { Metadata } from "next"
import { notFound } from "next/navigation"
import Link from "next/link"
import { getArticle, getAllArticles } from "@/lib/articles-data"
import { siteConfig } from "@/data/portfolio-data"
import { ChevronLeft, Github } from "lucide-react"
import Markdown from "react-markdown"

interface WikiArticlePageProps {
  params: Promise<{
    articleId: string
  }>
}

export async function generateMetadata({ params }: WikiArticlePageProps): Promise<Metadata> {
  const { articleId } = await params
  const article = getArticle(articleId)

  if (!article) {
    return {
      title: "Article Not Found",
    }
  }

  return {
    title: article.title,
    description: article.description,
    openGraph: {
      title: article.title,
      description: article.description,
      type: "article",
      url: `${siteConfig.url}/wiki/${article.id}`,
      images: [
        {
          url: siteConfig.ogImage,
          width: 1200,
          height: 630,
          alt: article.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: article.description,
      images: [siteConfig.ogImage],
      creator: siteConfig.creator,
    },
  }
}

export async function generateStaticParams() {
  const articles = getAllArticles()
  return articles.map((article) => ({
    articleId: article.id,
  }))
}

export default async function WikiArticlePage({ params }: WikiArticlePageProps) {
  const { articleId } = await params
  const article = getArticle(articleId)

  if (!article) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 py-16 px-4 md:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8 flex items-center justify-between">
          <Link href="/" className="flex items-center text-blue-600 hover:text-blue-800 transition-colors">
            <ChevronLeft size={16} className="mr-1" />
            Back to Portfolio
          </Link>
          <a
            href={siteConfig.links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-gray-600 hover:text-gray-800 transition-colors"
          >
            <Github size={16} className="mr-1" />
            GitHub
          </a>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
          <div className="mb-6 pb-6 border-b border-gray-200">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">{article.title}</h1>
            <p className="text-gray-600">{article.description}</p>
            <div className="mt-4 flex flex-wrap gap-4 text-sm text-gray-500">
              <span>Last updated: {article.lastUpdated}</span>
              <span>Author: {article.author}</span>
            </div>
          </div>

          <div className="max-w-none space-y-5 leading-relaxed text-gray-700 [&_a]:text-blue-700 [&_a]:underline">
            <Markdown>{article.content}</Markdown>
          </div>
        </div>

        <div className="mt-8 text-center">
          <Link href="/wiki" className="inline-block rounded-md bg-blue-100 px-4 py-2 text-blue-700 hover:bg-blue-200">
            All notes
          </Link>
        </div>
      </div>
    </div>
  )
}
