import Image from "next/image"
import { Mail, ShoppingBag, Truck, Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"

export const metadata = {
  title: "Merch | Methodical Cloud",
  description:
    "Official Methodical Cloud merchandise. T-shirts, stickers, hats, and sweatshirts for automation enthusiasts.",
}

export default function MerchPage() {
  // Focused merchandise items
  const merchItems = [
    {
      id: 1,
      name: "Flow Crimes Are Real T-Shirt",
      description: "For those who've seen one too many questionable system diagrams.",
      imageSrc: "/images/merch/flow-crimes-tshirt.png",
      price: "$25",
      status: "available",
      type: "t-shirt",
    },
    {
      id: 2,
      name: "Diagram The Damn Thing Sticker Pack",
      description: "Decorate your laptop with evidence of your good judgment.",
      imageSrc: "/images/merch/diagram-stickers.png",
      price: "$10",
      status: "available",
      type: "sticker",
    },
    {
      id: 3,
      name: "Automation Architect Snapback Hat",
      description: "The conversation starter nobody asked for, but everyone needs.",
      imageSrc: "/images/merch/automation-hat.jpg",
      price: "$22",
      status: "available",
      type: "hat",
    },
    {
      id: 4,
      name: "Systems That Don't Suck Sweatshirt",
      description: "Stay warm while building better systems.",
      imageSrc: "/images/merch/systems-sweatshirt.png",
      price: "$45",
      status: "available",
      type: "sweatshirt",
    },
    {
      id: 5,
      name: "Methodical Cloud Logo T-Shirt",
      description: "Simple, clean, and to the point. Just like good automation.",
      imageSrc: "/images/merch/logo-tshirt.png",
      price: "$25",
      status: "available",
      type: "t-shirt",
    },
    {
      id: 6,
      name: "Clarity > Complexity Sticker",
      description: "A reminder of what matters most in system design.",
      imageSrc: "/images/merch/clarity-sticker.png",
      price: "$4",
      status: "available",
      type: "sticker",
    },
    {
      id: 7,
      name: "Automation Clarity Baseball Hat",
      description: "For those days when you're bringing clarity to chaos.",
      imageSrc: "/images/merch/clarity-hat.png",
      price: "$20",
      status: "available",
      type: "hat",
    },
    {
      id: 8,
      name: "Methodical Cloud Zip Hoodie",
      description: "Premium comfort for those late-night automation sessions.",
      imageSrc: "/images/merch/logo-hoodie.png",
      price: "$50",
      status: "available",
      type: "sweatshirt",
    },
  ]

  return (
    <div>
      {/* Merch Header */}
      <section className="py-16 bg-navy-900">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="mb-4">Merch for the diagram-obsessed.</h1>
            <p className="text-xl text-gray-300">
              Whether you're automating airlocks or just need a shirt that understands your YAML pain, we've got you
              covered.
            </p>
            <div className="mt-8 inline-block bg-blue-900/30 text-blue-300 px-4 py-2 rounded-md">
              <span className="flex items-center">
                <ShoppingBag className="w-5 h-5 mr-2" />
                Official Methodical Cloud Merchandise
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-12 bg-navy-800">
        <div className="container-custom">
          <div className="flex flex-wrap justify-center gap-4">
            <Button variant="outline" className="bg-navy-700 hover:bg-navy-600">
              All Products
            </Button>
            <Button variant="outline" className="bg-navy-700 hover:bg-navy-600">
              T-Shirts
            </Button>
            <Button variant="outline" className="bg-navy-700 hover:bg-navy-600">
              Stickers
            </Button>
            <Button variant="outline" className="bg-navy-700 hover:bg-navy-600">
              Hats
            </Button>
            <Button variant="outline" className="bg-navy-700 hover:bg-navy-600">
              Sweatshirts
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16">
        <div className="container-custom">
          <h2 className="section-title text-center">Methodical Cloud Merchandise</h2>
          <p className="section-subtitle text-center">Wear your automation philosophy with pride</p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            {merchItems.map((item) => (
              <div key={item.id} className="card overflow-hidden">
                <div className="relative h-64">
                  <Image
                    src={item.imageSrc || "/placeholder.svg"}
                    alt={item.name}
                    fill
                    className="object-cover"
                    unoptimized
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{item.name}</h3>
                  <p className="text-gray-300 mb-4">{item.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-blue-400 font-bold">{item.price}</span>
                    <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                      Add to Cart
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-navy-900">
        <div className="container-custom">
          <h2 className="section-title text-center">How It Works</h2>
          <p className="section-subtitle text-center">From order to delivery, here's what to expect</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="card p-6">
              <div className="w-12 h-12 bg-blue-900/30 rounded-lg flex items-center justify-center mb-6">
                <ShoppingBag className="w-6 h-6 text-blue-400" />
              </div>
              <h3 className="text-xl font-bold mb-3">1. Place Your Order</h3>
              <p className="text-gray-300">
                Browse our collection and place your order directly on the Methodical Cloud website. All payments are
                processed securely.
              </p>
            </div>

            <div className="card p-6">
              <div className="w-12 h-12 bg-blue-900/30 rounded-lg flex items-center justify-center mb-6">
                <Calendar className="w-6 h-6 text-blue-400" />
              </div>
              <h3 className="text-xl font-bold mb-3">2. Order Processing</h3>
              <p className="text-gray-300">
                Your order is received and processed by our team. We'll send you a confirmation email with your order
                details.
              </p>
            </div>

            <div className="card p-6">
              <div className="w-12 h-12 bg-blue-900/30 rounded-lg flex items-center justify-center mb-6">
                <Truck className="w-6 h-6 text-blue-400" />
              </div>
              <h3 className="text-xl font-bold mb-3">3. Fulfillment & Shipping</h3>
              <p className="text-gray-300">
                Orders are fulfilled by QuirkyWerks, our trusted fulfillment partner. Your items are carefully packed
                and shipped directly to you.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16">
        <div className="container-custom">
          <h2 className="section-title text-center">Frequently Asked Questions</h2>
          <div className="max-w-3xl mx-auto mt-12">
            <div className="card p-6 mb-6">
              <h3 className="text-xl font-bold mb-2">How long does shipping take?</h3>
              <p className="text-gray-300">
                Most orders ship within 3-5 business days. Delivery times vary based on your location, typically 5-10
                business days after shipping.
              </p>
            </div>
            <div className="card p-6 mb-6">
              <h3 className="text-xl font-bold mb-2">What's your return policy?</h3>
              <p className="text-gray-300">
                If you're not satisfied with your purchase, contact us within 14 days of receiving your order. We'll
                work with you to make it right.
              </p>
            </div>
            <div className="card p-6 mb-6">
              <h3 className="text-xl font-bold mb-2">Who handles the fulfillment?</h3>
              <p className="text-gray-300">
                All orders are fulfilled by QuirkyWerks, our trusted partner. While you place orders on our website, the
                actual fulfillment and shipping are handled by their team.
              </p>
            </div>
            <div className="card p-6">
              <h3 className="text-xl font-bold mb-2">Do you ship internationally?</h3>
              <p className="text-gray-300">
                Yes, we ship to most countries worldwide. International shipping rates and delivery times vary by
                location.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-navy-900">
        <div className="container-custom">
          <div className="bg-navy-800 rounded-xl border border-navy-700 p-8 md:p-12 text-center">
            <h2 className="text-3xl font-bold mb-6">Got an idea for a product?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              We'd love to hear your suggestions for new merchandise. Have an idea for a clever slogan, design, or
              product? Let us know!
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="mailto:contact@methodicalcloud.com" className="btn-primary inline-flex items-center">
                <Mail className="mr-2 w-5 h-5" /> Email Your Idea
              </a>
              <a
                href="https://x.com/methodicalcloud"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary inline-flex items-center"
              >
                Tag @methodicalcloud
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
