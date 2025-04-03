import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";
import Head from "next/head";

export default function LegendTravelsHome() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      <Head>
        <title>Legend Travels | Luxury Van Transportation</title>
        <meta name="description" content="Legend Travels offers luxury passenger van transportation with legendary service and the most comfortable rides. Reserve your trip today!" />
        <meta name="keywords" content="luxury van travel, passenger van service, comfortable rides, executive van service, private group transportation, Legend Travels" />
        <meta name="author" content="Legend Travels" />
      </Head>

      <section className="bg-gray-100 p-10 text-center">
        <h1 className="text-5xl font-bold mb-4">Ride Legendary with Legend Travels</h1>
        <p className="text-xl mb-6 max-w-2xl mx-auto">
          Luxury passenger van travel designed for comfort, convenience, and legendary service. Experience the difference today.
        </p>
        <Button size="lg" className="text-lg px-6 py-4">Book Your Ride</Button>
      </section>

      <section className="p-10 grid md:grid-cols-3 gap-8">
        <Card>
          <CardContent className="p-6">
            <CheckCircle className="text-green-600 mb-4" size={32} />
            <h2 className="text-2xl font-semibold mb-2">Luxury Fleet</h2>
            <p>Our modern vans offer plush seating, climate control, and sleek interiors to redefine road comfort.</p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <CheckCircle className="text-green-600 mb-4" size={32} />
            <h2 className="text-2xl font-semibold mb-2">Legendary Service</h2>
            <p>From door to door, our professional drivers ensure a smooth and personalized experience every time.</p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <CheckCircle className="text-green-600 mb-4" size={32} />
            <h2 className="text-2xl font-semibold mb-2">Flexible Routes</h2>
            <p>We cater to private group trips, corporate travel, airport transfers, and special events across your city or region.</p>
          </CardContent>
        </Card>
      </section>

      <section className="bg-gray-50 p-10">
        <h2 className="text-3xl font-bold text-center mb-6">Why Choose Legend Travels?</h2>
        <ul className="max-w-4xl mx-auto space-y-4 text-lg">
          <li>✅ Spacious and Luxurious Interiors</li>
          <li>✅ Professional and Courteous Drivers</li>
          <li>✅ Timely Arrivals and Departures</li>
          <li>✅ Affordable Rates for Premium Service</li>
          <li>✅ Customizable Trip Options</li>
        </ul>
      </section>

      <section className="p-10 text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Travel in Comfort?</h2>
        <p className="text-xl mb-6">Contact Legend Travels to schedule your next luxury van ride today.</p>
        <form className="max-w-xl mx-auto space-y-4 text-left">
          <input type="text" placeholder="Full Name" className="w-full p-3 border border-gray-300 rounded-lg" required />
          <input type="email" placeholder="Email Address" className="w-full p-3 border border-gray-300 rounded-lg" required />
          <input type="tel" placeholder="Phone Number" className="w-full p-3 border border-gray-300 rounded-lg" required />
          <input type="text" placeholder="Pickup Location" className="w-full p-3 border border-gray-300 rounded-lg" required />
          <input type="text" placeholder="Dropoff Location" className="w-full p-3 border border-gray-300 rounded-lg" required />
          <input type="date" className="w-full p-3 border border-gray-300 rounded-lg" required />
          <Button type="submit" size="lg" className="w-full text-lg">Submit Booking</Button>
        </form>
      </section>

      <section className="bg-gray-100 p-10">
        <h2 className="text-3xl font-bold text-center mb-6">Travel Tips & Articles</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2">Top 5 Reasons to Choose Luxury Van Travel</h3>
              <p className="text-gray-700">Discover why more people are switching to premium van travel for group trips, business transport, and more.</p>
              <Button variant="link" className="mt-2 p-0">Read More</Button>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2">How to Plan the Perfect Road Trip</h3>
              <p className="text-gray-700">From choosing the right vehicle to mapping out your stops, here's how to make every journey legendary.</p>
              <Button variant="link" className="mt-2 p-0">Read More</Button>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2">Corporate Travel Solutions with Style</h3>
              <p className="text-gray-700">Elevate your business transportation with our professional luxury van services for teams and executives.</p>
              <Button variant="link" className="mt-2 p-0">Read More</Button>
            </CardContent>
          </Card>
        </div>
      </section>

      <footer className="bg-gray-900 text-white p-6 text-center">
        <p>&copy; {new Date().getFullYear()} Legend Travels. All rights reserved.</p>
        <p className="text-sm mt-2">SEO by Legend Travels | Privacy Policy | Terms of Service</p>
      </footer>
    </main>
  );
}
