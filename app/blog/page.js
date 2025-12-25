const InsightsGrid = () => {
  const posts = [
    { tag: 'Contract Law', date: 'Oct 24, 2023', title: 'Understanding Your Rights in Contractual Agreements' },
    { tag: 'Real Estate', date: 'Sept 15, 2023', title: 'Legal Considerations in Property Transactions in Nigeria' },
    { tag: 'Employment', date: 'Aug 02, 2023', title: 'What Employers and Employees Should Know About Termination' }
  ];

  return (
    <section className="py-20 bg-white px-8 max-w-7xl mx-auto">
      <div className="flex justify-between items-end mb-12">
        <div>
          <span className="text-xs font-bold text-blue-600 tracking-widest uppercase">Knowledge Hub</span>
          <h2 className="text-4xl font-bold mt-2">Insights & Legal Commentary</h2>
        </div>
        <button className="text-blue-700 font-bold border-b-2 border-blue-700 pb-1">View All Articles</button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {posts.map((post, i) => (
          <div key={i} className="group cursor-pointer">
            <div className="h-64 bg-slate-200 rounded-xl mb-6 overflow-hidden">
              <img src={`/api/placeholder/400/300?text=${post.tag}`} alt="Post cover" className="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
            </div>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-xs font-semibold text-slate-500">
                <span className="text-blue-600 uppercase">{post.tag}</span>
                <span>•</span>
                <span>{post.date}</span>
              </div>
              <h3 className="text-xl font-bold group-hover:text-blue-700 transition">{post.title}</h3>
              <p className="text-slate-500 text-sm line-clamp-2">A deep dive into the essential elements of a binding contract under Nigerian law...</p>
              <button className="text-blue-600 text-sm font-bold flex items-center gap-1">Read Commentary <span className="text-lg">→</span></button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}