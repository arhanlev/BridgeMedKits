import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-secondary text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">BridgeMedKits</h1>
            <p className="text-xl mb-8">A student-led nonprofit delivering custom-built medical kits to underserved clinics worldwide</p>
            <Link href="/about" className="bg-white text-primary px-8 py-3 rounded-full font-semibold hover:bg-opacity-90 transition-all">
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6 text-gray-800">Our Mission</h2>
            <p className="text-lg text-gray-600 mb-8">
              BridgeMed Kits is a student-led nonprofit focused on delivering custom-built medical kits to underserved clinics around the world. 
              By providing essential health supplies and resources, we aim to support healthcare workers and make a global impact on healthcare accessibility.
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">What We Do</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4 text-primary">Medical Supply Distribution</h3>
              <p className="text-gray-600">
                We coordinate the distribution of essential medical supplies to communities in need.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4 text-primary">Community Support</h3>
              <p className="text-gray-600">
                Working closely with local communities to identify and address healthcare needs.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4 text-primary">Emergency Response</h3>
              <p className="text-gray-600">
                Rapid deployment of medical resources during emergencies and crises.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6 text-gray-800">Get Involved</h2>
            <p className="text-lg text-gray-600 mb-8">
              Join us in our mission to provide essential medical supplies to those in need.
            </p>
            <Link href="/contact" className="bg-primary text-white px-8 py-3 rounded-full font-semibold hover:bg-opacity-90 transition-all">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
} 