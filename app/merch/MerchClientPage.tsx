'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ShoppingBag } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Badge } from '@/components/ui/badge'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { Label } from '@/components/ui/label'

type Size = 'S' | 'M' | 'L' | 'XL' | 'XXL'

interface Product {
  id: string
  name: string
  description: string
  price: string
  image: string
  category: string
  sizes?: Size[]
  isNew?: boolean
  isBestseller?: boolean
}

export default function MerchClientPage() {
  const products: Product[] = [
    {
      id: 'mug-01',
      name: 'Diagram The Damn Thing Mug',
      description: 'Start your day with a reminder of what matters most.',
      price: '$15',
      image: '/images/merch/mugs/diagram-mug.png',
      category: 'mugs',
      isNew: true,
      isBestseller: true,
    },
    {
      id: 'mug-02',
      name: 'Context Switching Mug',
      description:
        'For those who thrive on multitasking and rapid mental shifts. Perfect for your morning coffee between tasks.',
      price: '$15',
      image: '/images/merch/mugs/context-switching-mug.png',
      category: 'mugs',
      isNew: true,
    },
    {
      id: 'mug-03',
      name: 'Automate Like You Give A Damn Mug',
      description:
        'A daily reminder to put intention and care into your automation efforts. Quality matters.',
      price: '$15',
      image: '/images/merch/mugs/automate-like-you-give-a-damn-mug.png',
      category: 'mugs',
    },
    {
      id: 'tshirt-01',
      name: 'Flow Crimes Flowchart T-Shirt',
      description:
        'A humorous take on the automation decision process. Soft cotton blend for all-day comfort.',
      price: '$28',
      image: '/images/merch/tshirts/flow-crimes-flowchart-tshirt.png',
      category: 'tshirts',
      sizes: ['S', 'M', 'L', 'XL', 'XXL'],
      isNew: true,
    },
    {
      id: 'tshirt-02',
      name: 'Flow Crimes Are Real T-Shirt',
      description:
        'Spread awareness about the reality of flow crimes with this conversation-starting tee.',
      price: '$28',
      image: '/images/merch/tshirts/flow-crimes-are-real-tshirt.png',
      category: 'tshirts',
      sizes: ['S', 'M', 'L', 'XL', 'XXL'],
      isBestseller: true,
    },
    {
      id: 'tshirt-03',
      name: "This Is Fine (It's YAML) T-Shirt",
      description:
        'For when your configuration is technically valid but existentially questionable. A dev favorite.',
      price: '$28',
      image: '/images/merch/tshirts/this-is-fine-yaml-tshirt.png',
      category: 'tshirts',
      sizes: ['S', 'M', 'L', 'XL', 'XXL'],
      isNew: true,
    },
    {
      id: 'tshirt-04',
      name: 'Just Diagram It T-Shirt',
      description:
        'The simplest solution to most problems: just diagram it. Spread the visual thinking philosophy.',
      price: '$28',
      image: '/images/merch/tshirts/just-diagram-it-tshirt.png',
      category: 'tshirts',
      sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    },
    {
      id: 'hat-01',
      name: 'Airlock Automation Trucker Hat',
      description:
        'Start conversations about your favorite automation pattern with this stylish trucker hat.',
      price: '$25',
      image: '/images/merch/hats/airlock-automation-hat.png',
      category: 'hats',
      isNew: true,
    },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="py-16 bg-navy-900">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="mb-6">Methodical Merch</h1>
            <p className="text-xl text-gray-300 mb-8">
              Wear your automation philosophy with pride. Our merchandise speaks
              the language of clarity and systems that don't suck.
            </p>
            <div className="inline-flex items-center bg-blue-900/30 text-blue-300 px-4 py-2 rounded-md">
              <ShoppingBag className="w-5 h-5 mr-2" />
              <span>Official Methodical Cloud Merchandise</span>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Product */}
      <section className="py-12 bg-navy-800">
        <div className="container-custom">
          <h2 className="text-2xl font-bold mb-8 text-center">
            Featured Product
          </h2>
          <div className="max-w-md mx-auto">
            <div className="bg-navy-700 rounded-lg border border-navy-600 overflow-hidden flex flex-col h-full transform transition-transform hover:scale-105 duration-300">
              <div className="relative">
                <div className="aspect-square relative overflow-hidden">
                  <Image
                    src="/images/merch/mugs/diagram-mug.png"
                    alt="Diagram The Damn Thing Mug"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="absolute top-2 left-2 flex flex-col gap-2">
                  <Badge className="bg-blue-600 hover:bg-blue-600">New</Badge>
                  <Badge className="bg-amber-600 hover:bg-amber-600">
                    Bestseller
                  </Badge>
                </div>
              </div>
              <div className="p-6 flex-grow flex flex-col">
                <h3 className="font-bold text-xl mb-2">
                  Diagram The Damn Thing Mug
                </h3>
                <p className="text-gray-300 mb-4 flex-grow">
                  Start your day with a reminder of what matters most. The
                  perfect companion for your morning coffee or afternoon tea.
                </p>
                <div className="flex items-center justify-between mt-auto">
                  <span className="font-bold text-xl">$15</span>
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button
                          size="lg"
                          className="bg-blue-600 hover:bg-blue-700"
                        >
                          Add to Cart <ShoppingBag className="ml-2 h-4 w-4" />
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Store launching soon!</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 flex-grow">
        <div className="container-custom">
          <Tabs defaultValue="all" className="w-full">
            <div className="flex justify-center mb-8">
              <TabsList className="bg-navy-800">
                <TabsTrigger value="all">All Products</TabsTrigger>
                <TabsTrigger value="tshirts">T-Shirts</TabsTrigger>
                <TabsTrigger value="hats">Hats</TabsTrigger>
                <TabsTrigger value="mugs">Mugs</TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="all" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {products.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="tshirts" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {products
                  .filter((product) => product.category === 'tshirts')
                  .map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
              </div>
            </TabsContent>

            <TabsContent value="hats" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {products
                  .filter((product) => product.category === 'hats')
                  .map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
              </div>
            </TabsContent>

            <TabsContent value="mugs" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {products
                  .filter((product) => product.category === 'mugs')
                  .map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Coming Soon Section */}
      <section className="py-12 bg-navy-800">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-bold mb-4">
              More Products Coming Soon
            </h2>
            <p className="text-gray-300 mb-6">
              We're working on expanding our merchandise collection with
              t-shirts, hats, sweatshirts, and stickers. Check back soon for
              more automation-themed gear!
            </p>
          </div>
        </div>
      </section>

      {/* Fulfillment Info */}
      <section className="py-12 bg-navy-900">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <div className="bg-navy-800 rounded-lg border border-navy-700 p-8">
              <h2 className="text-2xl font-bold mb-4 text-center">
                How It Works
              </h2>
              <p className="text-gray-300 mb-6 text-center">
                All orders are processed directly through Methodical Cloud but
                fulfilled by our trusted partner, Quirkywerks. When you place an
                order on our site, it's carefully crafted and shipped to you by
                the Quirkywerks team.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-12 h-12 bg-blue-900/30 rounded-full flex items-center justify-center mx-auto mb-3">
                    <ShoppingBag className="w-6 h-6 text-blue-400" />
                  </div>
                  <h3 className="font-bold mb-2">1. Order</h3>
                  <p className="text-sm text-gray-300">
                    Place your order through our website
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-blue-900/30 rounded-full flex items-center justify-center mx-auto mb-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="w-6 h-6 text-blue-400"
                    >
                      <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
                      <circle cx="12" cy="12" r="3" />
                    </svg>
                  </div>
                  <h3 className="font-bold mb-2">2. Processing</h3>
                  <p className="text-sm text-gray-300">
                    QuirkyWerks processes your order
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-blue-900/30 rounded-full flex items-center justify-center mx-auto mb-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="w-6 h-6 text-blue-400"
                    >
                      <rect width="16" height="13" x="4" y="5" rx="2" />
                      <path d="m22 5-10 8L2 5" />
                    </svg>
                  </div>
                  <h3 className="font-bold mb-2">3. Delivery</h3>
                  <p className="text-sm text-gray-300">
                    Your items are shipped directly to you
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Quirkywerks */}
      <section className="py-12 bg-navy-800">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <div className="bg-navy-700 rounded-lg border border-navy-600 p-8">
              <div className="flex flex-col md:flex-row items-center gap-6">
                <div className="w-24 h-24 bg-blue-900/30 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="40"
                    height="40"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-blue-400"
                  >
                    <path d="M14 9a2 2 0 0 1-2 2H6l-4 4V4c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2v5Z" />
                    <path d="M18 9h2a2 2 0 0 1 2 2v11l-4-4h-6a2 2 0 0 1-2-2v-1" />
                  </svg>
                </div>
                <div className="flex-grow text-center md:text-left">
                  <h2 className="text-2xl font-bold mb-2">
                    Meet Our Fulfillment Partner: Quirkywerks
                  </h2>
                  <p className="text-gray-300 mb-4">
                    Quirkywerks is a small, family-owned Etsy shop specializing
                    in custom-made merchandise with a personal touch. Every
                    Methodical Cloud product is carefully crafted by the
                    talented team at Quirkywerks, ensuring high-quality items
                    that perfectly represent our brand's philosophy of clarity
                    and thoughtful design.
                  </p>
                  <a
                    href="https://www.etsy.com/shop/quirkywerks"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    <span>Visit Quirkywerks on Etsy</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="ml-1"
                    >
                      <path d="M7 7h10v10" />
                      <path d="M7 17 17 7" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Custom Order CTA */}
      <section className="py-12">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-bold mb-4">
              Looking for something specific?
            </h2>
            <p className="text-gray-300 mb-6">
              Have an idea for a custom design or bulk order for your team? We'd
              love to hear from you.
            </p>
            <Link
              href="/contact"
              className="btn-primary inline-flex items-center"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

function ProductCard({ product }: { product: Product }) {
  const [selectedSize, setSelectedSize] = useState<Size | null>(
    product.sizes ? product.sizes[2] : null
  ) // Default to L if sizes exist

  return (
    <div className="bg-navy-800 rounded-lg border border-navy-700 overflow-hidden flex flex-col h-full">
      <div className="relative">
        <div className="aspect-square relative overflow-hidden bg-navy-900">
          <Image
            src={product.image || '/images/placeholders/placeholder.svg'}
            alt={product.name}
            fill
            className="object-cover transition-transform hover:scale-105 duration-300"
          />
        </div>
        <div className="absolute top-2 left-2 flex flex-col gap-2">
          {product.isNew && (
            <Badge className="bg-blue-600 hover:bg-blue-600">New</Badge>
          )}
          {product.isBestseller && (
            <Badge className="bg-amber-600 hover:bg-amber-600">
              Bestseller
            </Badge>
          )}
        </div>
      </div>
      <div className="p-4 flex-grow flex flex-col">
        <h3 className="font-bold text-lg mb-1">{product.name}</h3>
        <p className="text-gray-300 text-sm mb-4 flex-grow">
          {product.description}
        </p>

        {product.sizes && (
          <div className="mb-4">
            <div className="text-sm font-medium mb-2">Size:</div>
            <RadioGroup
              value={selectedSize || undefined}
              onValueChange={(value) => setSelectedSize(value as Size)}
              className="flex flex-wrap gap-2"
            >
              {product.sizes.map((size) => (
                <div key={size} className="flex items-center space-x-1">
                  <RadioGroupItem
                    value={size}
                    id={`${product.id}-size-${size}`}
                    className="sr-only"
                  />
                  <Label
                    htmlFor={`${product.id}-size-${size}`}
                    className={`px-2 py-1 rounded-md cursor-pointer text-xs font-medium border ${
                      selectedSize === size
                        ? 'bg-blue-600 text-white border-blue-600'
                        : 'bg-navy-700 text-gray-300 border-navy-600 hover:bg-navy-600'
                    }`}
                  >
                    {size}
                  </Label>
                </div>
              ))}
            </RadioGroup>
          </div>
        )}

        <div className="flex items-center justify-between mt-auto">
          <span className="font-bold text-lg">{product.price}</span>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  className="bg-blue-600 hover:bg-blue-700"
                  disabled={product.sizes && !selectedSize}
                >
                  Add to Cart <ShoppingBag className="ml-2 h-4 w-4" />
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Store launching soon!</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      </div>
    </div>
  )
}
