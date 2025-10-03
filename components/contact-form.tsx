'use client'

import type React from 'react'
import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

export default function ContactForm() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    interest: '',
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitResult, setSubmitResult] = useState<{
    success: boolean
    message: string
  } | null>(null)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormState((prev) => ({ ...prev, [name]: value }))
  }

  const handleInterestChange = (value: string) => {
    setFormState((prev) => ({ ...prev, interest: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitResult(null)

    // Simulate API call
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500))

      // Simulate successful submission
      setSubmitResult({
        success: true,
        message:
          "Message received! I'll get back to you about your content feedback or question.",
      })

      // Reset form
      setFormState({
        name: '',
        email: '',
        subject: '',
        message: '',
        interest: '',
      })
    } catch (error) {
      setSubmitResult({
        success: false,
        message:
          'There was an error submitting your message. Please try again or email directly.',
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-2">
        <Label htmlFor="name">Name</Label>
        <Input
          id="name"
          name="name"
          value={formState.name}
          onChange={handleChange}
          placeholder="Your name"
          required
          className="bg-navy-900 border-navy-700"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          name="email"
          type="email"
          value={formState.email}
          onChange={handleChange}
          placeholder="your.email@example.com"
          required
          className="bg-navy-900 border-navy-700"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="interest">What are you interested in?</Label>
        <Select value={formState.interest} onValueChange={handleInterestChange}>
          <SelectTrigger id="interest" className="bg-navy-900 border-navy-700">
            <SelectValue placeholder="Select an area of interest" />
          </SelectTrigger>
          <SelectContent className="bg-navy-800 border-navy-700">
            <SelectItem value="blog">Blog Content Feedback</SelectItem>
            <SelectItem value="product">Product Feedback/Ideas</SelectItem>
            <SelectItem value="content-collab">
              Content Collaboration
            </SelectItem>
            <SelectItem value="question">General Question</SelectItem>
            <SelectItem value="other">Something Else</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <Label htmlFor="subject">Subject</Label>
        <Input
          id="subject"
          name="subject"
          value={formState.subject}
          onChange={handleChange}
          placeholder="What's this about?"
          required
          className="bg-navy-900 border-navy-700"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="message">Message</Label>
        <Textarea
          id="message"
          name="message"
          value={formState.message}
          onChange={handleChange}
          placeholder="Share your feedback, questions, or content ideas..."
          rows={5}
          required
          className="bg-navy-900 border-navy-700"
        />
      </div>

      <Button
        type="submit"
        className="w-full bg-blue-600 hover:bg-blue-700"
        disabled={isSubmitting}
      >
        {isSubmitting ? 'Sending...' : 'Send Message'}
      </Button>

      {submitResult && (
        <div
          className={`p-4 rounded-md ${
            submitResult.success
              ? 'bg-green-900/30 text-green-400 border border-green-800'
              : 'bg-red-900/30 text-red-400 border border-red-800'
          }`}
        >
          {submitResult.message}
        </div>
      )}
    </form>
  )
}
