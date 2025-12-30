export default function BlogsPage() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      <h1 className="text-3xl md:text-4xl font-semibold text-[#1C2A7D] mb-6">
        Blogs & Insights
      </h1>

      <p className="text-gray-600 max-w-3xl mb-10">
        Insights, updates, and expert opinions from our team.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {[1, 2, 3, 4].map((post) => (
          <div
            key={post}
            className="border rounded-lg p-6 hover:shadow-md transition"
          >
            <h3 className="text-xl font-semibold mb-2">
              Sample Blog Title {post}
            </h3>
            <p className="text-sm text-gray-600 mb-4">
              Short description of the blog content goes here. This helps users
              understand what the article is about.
            </p>
            <span className="text-[#1C2A7D] font-medium cursor-pointer">
              Read more →
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
