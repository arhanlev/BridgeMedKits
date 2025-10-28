"use client"

import React from "react"

const GFM_URL =
  "https://www.gofundme.com/f/support-bridgemed-kits-mission-today?attribution_id=sl:c1752735-a687-4f8f-8f08-dd1ad3161eee&lang=en_US&ts=1760756724&utm_campaign=man_sharesheet_dash&utm_content=amp17_ta&utm_medium=customer&utm_source=copy_link"

export default function Donate() {
  const handleClick = (e: React.MouseEvent) => {
    // open in a new tab using window.open to avoid potential issues with anchors
    // being prevented by other client-side logic or popup blockers in some cases
    e.preventDefault()
    window.open(GFM_URL, "_blank", "noopener,noreferrer")
  }

  return (
    <main className="min-h-screen pt-20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center py-20">
          <h1 className="text-4xl font-bold mb-4">Support Our Cause</h1>
          <p className="mb-6">
            Your donation helps us continue our mission. Click the button below to
            contribute via GoFundMe.
          </p>
          <a
            href={GFM_URL}
            onClick={handleClick}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-primary text-white px-6 py-3 rounded hover:opacity-90 transition"
          >
            Donate on GoFundMe
          </a>
        </div>
      </div>
    </main>
  )
}
