'use client'

import React from 'react'

export default function About() {
  return (
    <main className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-secondary text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">About Us</h1>
            <p className="text-xl mb-8">Learn about our mission and vision for global healthcare</p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-gray-800">Our Mission</h2>
            <p className="text-lg text-gray-600 mb-12">
              BridgeMed Kits is a student-led nonprofit focused on delivering custom-built medical kits to underserved clinics around the world. 
              By providing essential health supplies and resources, we aim to support healthcare workers and make a global impact on healthcare accessibility.
            </p>

            <h2 className="text-3xl font-bold mb-6 text-gray-800">Long-Term Vision</h2>
            <p className="text-lg text-gray-600 mb-12">
              To create a more equitable healthcare system by providing life-saving medical resources and empowering youth to take meaningful action in global health.
            </p>

            {/* Additional sections can be added here */}
            <div className="grid md:grid-cols-2 gap-8 mt-12">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4 text-primary">Our Impact</h3>
                <p className="text-gray-600">
                  Through our dedicated team of student volunteers, we've been able to reach numerous underserved communities, 
                  providing them with the medical resources they need to serve their patients effectively.
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4 text-primary">Get Involved</h3>
                <p className="text-gray-600">
                  Join our mission to make healthcare more accessible worldwide. Whether you're a student looking to make a difference 
                  or a supporter wanting to contribute, there are many ways to get involved.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
} 