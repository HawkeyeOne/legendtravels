import Head from 'next/head'
import Image from 'next/image'
import { useEffect } from 'react'

export default function Home() {
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fadeIn')
        }
      })
    }, { threshold: 0.1 })

    document.querySelectorAll('.fade-in').forEach(el => observer.observe(el))
  }, [])

  return (
    <>
      <Head>
        <title>Legend Travels - Travel with Confidence</title>
        <meta name="description" content="Luxury 15-passenger van travel service based in Houston. Airport rides, family trips, and more!" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className="min-h-screen bg-white text-gray-900 p-8">
        <section className="text-center space-y-6 fade-in">
          <Image src="/logo.png" alt="Legend Travels Logo" width={200} height={200} />
          <h1 className="text-4xl font-bold">Travel with Confidence</h1>
          <p className="text-lg">Comfortable, clean, and safe transportation for your group.</p>
        </section>

        <section className="my-16 fade-in">
          <h2 className="text-2xl font-semibold mb-4">Our Services</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Airport Transfers</li>
            <li>Church Trips</li>
            <li>Family Vacations</li>
          </ul>
        </section>

        <section className="my-16 fade-in">
          <h2 className="text-2xl font-semibold mb-4 text-center">Book Your Ride</h2>
          <div id="outdoorsy-book-now-container" data-owner="4424081" data-newfilters="true" data-color="000000"></div>
        </section>

        <section className="my-16 fade-in">
          <h2 className="text-2xl font-semibold mb-4">Book Now</h2>
          <form action="https://formspree.io/f/your-form-id" method="POST" className="space-y-4">
            <input type="text" name="name" placeholder="Your Name" required className="border p-2 w-full" />
            <input type="email" name="email" placeholder="Your Email" required className="border p-2 w-full" />
            <textarea name="message" placeholder="Trip details..." required className="border p-2 w-full h-32"></textarea>
            <button type="submit" className="bg-black text-white py-2 px-4 rounded">Send Request</button>
          </form>
        </section>

        <script
          dangerouslySetInnerHTML={{
            __html: \`
              var Outdoorsy = Outdoorsy || {};
              Outdoorsy.color = "1b4a8f";
              (function() {
                var script = document.createElement("script");
                script.src = "https://d3cuf6g1arkgx6.cloudfront.net/sdk/wheelbase.min.js";
                script.async = true;
                var entry = document.getElementsByTagName("script")[0];
                entry.parentNode.insertBefore(script, entry);
              })();
            \`,
          }}
        />
      </main>
    </>
  )
}