import { CheckCircle, Landmark, Balance } from 'lucide-react';

const LitigationPage = () => {
  const scopes = [
    { title: "Commercial & Corporate Litigation", desc: "Contract disputes, shareholder issues, and partnership dissolutions." },
    { title: "Debt Recovery & Insolvency", desc: "Recovery of secured and unsecured debts, winding up proceedings." },
    { title: "Employment & Labour Disputes", desc: "Wrongful termination, union disputes, and industrial court matters." },
    { title: "Real Estate & Property", desc: "Land title disputes, tenancy recovery, and construction claims." }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative h-80 bg-slate-900 flex items-center px-12 overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <img src="/api/placeholder/1200/400" alt="Court background" className="w-full h-full object-cover" />
        </div>
        <div className="relative z-10 text-white max-w-3xl">
          <span className="flex items-center gap-2 text-xs uppercase tracking-widest text-blue-400 mb-4">
            <Balance size={16} /> Practice Area
          </span>
          <h1 className="text-5xl font-bold mb-4">Litigation & Dispute Resolution</h1>
          <p className="text-slate-300 text-lg">Navigating complex disputes with strategic precision and unwavering advocacy in Nigerian courts.</p>
        </div>
      </section>

      {/* Content Grid */}
      <div className="max-w-7xl mx-auto py-16 px-8 grid grid-cols-1 lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2 space-y-12">
          <p className="text-slate-600 leading-relaxed text-lg">
            At <strong>Celestine Omene & Associates</strong>, we understand that disputes can disrupt business operations and personal peace of mind. Our litigation team represents clients across all superior courts of record in Nigeria.
          </p>

          <div>
            <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
              <div className="p-2 bg-blue-100 text-blue-700 rounded-md"><Landmark size={20}/></div>
              Scope of Service
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {scopes.map((item, i) => (
                <div key={i} className="p-6 border border-gray-100 rounded-xl shadow-sm hover:shadow-md transition">
                  <CheckCircle className="text-blue-600 mb-3" size={24} />
                  <h4 className="font-bold mb-2">{item.title}</h4>
                  <p className="text-sm text-slate-500">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-slate-900 text-white p-10 rounded-2xl relative overflow-hidden">
             <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-6">Jurisdictions Covered</h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-slate-300">
                  {['Supreme Court of Nigeria', 'Court of Appeal', 'Federal & State High Courts', 'National Industrial Court'].map(j => (
                    <li key={j} className="flex items-center gap-2">• {j}</li>
                  ))}
                </ul>
             </div>
             <div className="absolute right-0 bottom-0 opacity-10">
                <Landmark size={200} />
             </div>
          </div>
        </div>

        {/* Sidebar */}
        <aside className="space-y-8">
          <div className="bg-gray-50 p-8 rounded-xl border border-gray-200">
            <h4 className="font-bold mb-6 pb-2 border-b">Practice Areas</h4>
            <ul className="space-y-4 text-sm font-medium">
              <li className="text-blue-700 flex justify-between">Litigation & Dispute Resolution <span>›</span></li>
              <li className="text-slate-600 hover:text-blue-700 cursor-pointer">Corporate & Commercial</li>
              <li className="text-slate-600 hover:text-blue-700 cursor-pointer">Real Estate & Property</li>
              <li className="text-slate-600 hover:text-blue-700 cursor-pointer">Energy & Natural Resources</li>
            </ul>
          </div>

          <div className="bg-blue-900 text-white p-8 rounded-xl text-center">
            <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <Phone size={24} />
            </div>
            <h4 className="text-xl font-bold mb-2">Need Legal Advice?</h4>
            <p className="text-blue-200 text-sm mb-6">Our team is ready to review your case and provide guidance.</p>
            <button className="w-full bg-white text-blue-900 py-3 rounded-lg font-bold hover:bg-gray-100 transition">
              Book an Appointment
            </button>
          </div>
        </aside>
      </div>
    </Layout>
  );
};