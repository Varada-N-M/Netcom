const AboutUs = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-sm font-semibold text-blue-600 tracking-wide uppercase mb-4">ABOUT US</h2>
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6 leading-tight">
              Elevate Your Experience: <span className="text-blue-600">Discover Why Netcom </span>
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed">
              With 18+ years of expertise and 200+ professionals across 15 branches in South India, we deliver reliable
              IT, Security, and Communication solutions that help businesses modernize and scale.
            </p>
          </div>
        </div>

        {/* Statistics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-blue-100">
            <div className="text-center">
              <div className="text-5xl font-bold text-blue-600 mb-2">18+</div>
              <div className="text-slate-600 font-medium">Years of Expertise</div>
            </div>
          </div>
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-blue-100">
            <div className="text-center">
              <div className="text-5xl font-bold text-blue-600 mb-2">200+</div>
              <div className="text-slate-600 font-medium">Professionals</div>
            </div>
          </div>
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-blue-100">
            <div className="text-center">
              <div className="text-5xl font-bold text-blue-600 mb-2">15</div>
              <div className="text-slate-600 font-medium">Branches</div>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* AI-Powered Intelligence */}
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-blue-100">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-slate-900 mb-3">AI-Powered Intelligence</h3>
                <p className="text-slate-600 leading-relaxed">
                  Seamlessly integrate the latest AI technology solutions, ensuring your news experience is intelligent
                  and personalized.
                </p>
              </div>
            </div>
          </div>

          {/* User-Centric */}
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-blue-100">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-slate-900 mb-3">User-Centric</h3>
                <p className="text-slate-600 leading-relaxed">
                  Delivering tailored news solutions that align perfectly with your interests and reading preferences.
                </p>
              </div>
            </div>
          </div>

          {/* Accessible Platform */}
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-blue-100">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-slate-900 mb-3">Accessible Platform</h3>
                <p className="text-slate-600 leading-relaxed">
                  Our solutions are designed to provide premium news experiences that are accessible to everyone.
                </p>
              </div>
            </div>
          </div>

          {/* Proven Excellence */}
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-blue-100">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                    />
                  </svg>
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-slate-900 mb-3">Proven Excellence</h3>
                <p className="text-slate-600 leading-relaxed">
                  Trusted by diverse users worldwide, earning their confidence through the quality and accuracy of our
                  news delivery.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Insights */}

      </div>
    </section>
  )
}

export { AboutUs }
