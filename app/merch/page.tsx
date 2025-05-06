import Image from "next/image"
import { Mail, ExternalLink, ShoppingBag, Truck, Calendar, Lightbulb } from "lucide-react"

export const metadata = {
  title: "Merch | Methodical Cloud",
  description: "Merchandise for the diagram-obsessed. T-shirts, mugs, and more for automation enthusiasts.",
}

export default function MerchPage() {
  // Example merchandise items (coming soon)
  const merchItems = [
    {
      id: 1,
      name: "Flow Crimes Are Real T-Shirt",
      description: "For those who've seen one too many questionable system diagrams.",
      imageSrc: "/placeholder.svg?key=7glg1",
      price: "$25",
      status: "coming-soon",
    },
    {
      id: 2,
      name: "Diagram The Damn Thing Mug",
      description: "Because some mornings require both caffeine and clarity.",
      imageSrc: "/placeholder.svg?key=j9nti",
      price: "$15",
      status: "coming-soon",
    },
    {
      id: 3,
      name: "Ask Me About Airlock Automation Trucker Hat",
      description: "The conversation starter nobody asked for, but everyone needs.",
      imageSrc: "/placeholder.svg?key=wjp3g",
      price: "$20",
      status: "coming-soon",
    },
    {
      id: 4,
      name: "Systems Thinker Sticker Pack",
      description: "Decorate your laptop with evidence of your good judgment.",
      imageSrc: "/placeholder.svg?key=69m1l",
      price: "$10",
      status: "coming-soon",
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
              Whether you're automating airlocks or just need a mug that understands YAML pain, this is for you.
            </p>
            <div className="mt-8 inline-block bg-blue-900/30 text-blue-300 px-4 py-2 rounded-md">
              <span className="flex items-center">
                <Calendar className="w-5 h-5 mr-2" />
                Coming Soon — Join the waitlist below
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products Preview */}
      <section className="py-16">
        <div className="container-custom">
          <h2 className="section-title text-center">What's Coming</h2>
          <p className="section-subtitle text-center">
            A preview of the merchandise we're working on — all designed to bring a bit of Methodical Cloud into your
            physical world
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            {merchItems.map((item) => (
              <div key={item.id} className="card overflow-hidden">
                <div className="relative h-64">
                  <Image src={item.imageSrc || "/placeholder.svg"} alt={item.name} fill className="object-cover" />
                  <div className="absolute top-4 right-4 bg-blue-900/80 text-blue-300 px-3 py-1 rounded text-xs uppercase">
                    Coming Soon
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{item.name}</h3>
                  <p className="text-gray-300 mb-4">{item.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-blue-400 font-bold">{item.price}</span>
                    <button disabled className="bg-navy-700 text-gray-400 px-3 py-1 rounded text-sm cursor-not-allowed">
                      Coming Soon
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Our Merch */}
      <section className="py-16 bg-navy-900">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">About Our Merch</h2>
              <p className="text-gray-300 mb-4">
                The Methodical Cloud merchandise collection is an extension of our brand, offering physical goods that
                reflect our voice, humor, and obsession with automation, clarity, and good systems.
              </p>
              <p className="text-gray-300 mb-4">
                It connects our content-driven platform with a tangible way for fans, peers, and nerds alike to show
                support (and maybe laugh a little).
              </p>
              <p className="text-gray-300 mb-4">
                We're keeping things fun, weird, and unapologetically niche—just like our content.
              </p>
            </div>
            <div className="flex justify-center">
              <Image
                src="/placeholder.svg?key=vd346"
                alt="Methodical Cloud Merchandise"
                width={400}
                height={400}
                className="rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Fulfillment Details */}
      <section className="py-16">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-center">Fulfillment Details</h2>
            <div className="card p-8">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-blue-900/30 rounded-lg flex items-center justify-center mr-4">
                  <Truck className="w-6 h-6 text-blue-400" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">Fulfilled by QuirkyWerks</h3>
                </div>
              </div>
              <p className="text-gray-300 mb-4">
                All products are designed by Methodical Cloud and fulfilled by QuirkyWerks (my wife's creative business
                on Etsy). She's the real MVP here—handmade quality with a bit of chaos baked in.
              </p>
              <p className="text-gray-300 mb-4">
                We're starting small with low-friction fulfillment via Etsy, but have plans to expand as demand grows.
              </p>
              <div className="mt-6">
                <a
                  href="https://www.etsy.com/shop/QuirkyWerks"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-blue-400 hover:text-blue-300"
                >
                  Visit QuirkyWerks on Etsy <ExternalLink className="ml-2 w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What's Next */}
      <section className="py-16 bg-navy-900">
        <div className="container-custom">
          <h2 className="section-title text-center">What's Next</h2>
          <p className="section-subtitle text-center">
            This is just the beginning. Here's what we're planning for the future
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            <div className="card p-6">
              <div className="w-12 h-12 bg-blue-900/30 rounded-lg flex items-center justify-center mb-6">
                <Calendar className="w-6 h-6 text-blue-400" />
              </div>
              <h3 className="text-xl font-bold mb-3">Limited Drops</h3>
              <p className="text-gray-300">
                Special edition merchandise released in limited quantities for the true Methodical Cloud enthusiasts.
              </p>
            </div>

            <div className="card p-6">
              <div className="w-12 h-12 bg-blue-900/30 rounded-lg flex items-center justify-center mb-6">
                <ShoppingBag className="w-6 h-6 text-blue-400" />
              </div>
              <h3 className="text-xl font-bold mb-3">Digital Downloads</h3>
              <p className="text-gray-300">
                Sticker packs, digital wallpapers, and other downloadable goodies to decorate your digital and physical
                spaces.
              </p>
            </div>

            <div className="card p-6">
              <div className="w-12 h-12 bg-blue-900/30 rounded-lg flex items-center justify-center mb-6">
                <Lightbulb className="w-6 h-6 text-blue-400" />
              </div>
              <h3 className="text-xl font-bold mb-3">Guest Collabs</h3>
              <p className="text-gray-300">
                Collaborations with artists and developers in the community to create unique, limited-edition products.
              </p>
            </div>

            <div className="card p-6">
              <div className="w-12 h-12 bg-blue-900/30 rounded-lg flex items-center justify-center mb-6">
                <Truck className="w-6 h-6 text-blue-400" />
              </div>
              <h3 className="text-xl font-bold mb-3">Print-on-Demand</h3>
              <p className="text-gray-300">
                As we scale, we'll partner with print-on-demand services to offer a wider range of products with faster
                fulfillment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
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

      {/* Waitlist Section */}
      <section className="py-16 bg-navy-900">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Join the Waitlist</h2>
            <p className="text-xl text-gray-300 mb-8">
              Be the first to know when our merchandise is available. Sign up for the waitlist and get early access to
              new products.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <input
                type="email"
                placeholder="Your email address"
                className="px-4 py-3 bg-navy-800 border border-navy-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 sm:w-72"
              />
              <button className="btn-primary">Join Waitlist</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
