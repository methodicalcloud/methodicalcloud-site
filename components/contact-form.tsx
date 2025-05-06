"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function ContactForm() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    interest: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitResult, setSubmitResult] = useState<{ success: boolean; message: string } | null>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
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
        message: "Thank you for your message! We will get back to you shortly.",
      })

      // Reset form
      setFormState({
        name: "",
        email: "",
        subject: "",
        message: "",
        interest: "",
      })
    } catch (error) {
      setSubmitResult({
        success: false,
        message: "There was an error submitting your message. Please try again.",
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
        <Label htmlFor="interest">Area of Interest</Label>
        <Select value={formState.interest} onValueChange={handleInterestChange}>
          <SelectTrigger id="interest" className="bg-navy-900 border-navy-700">
            <SelectValue placeholder="Select an area of interest" />
          </SelectTrigger>
          <SelectContent className="bg-navy-800 border-navy-700">
            <SelectItem value="blog">Blog Content</SelectItem>
            <SelectItem value="podcast">Podcast</SelectItem>
            <SelectItem value="diagrams">Diagrams</SelectItem>
            <SelectItem value="consulting">Consulting</SelectItem>
            <SelectItem value="collaboration">Collaboration</SelectItem>
            <SelectItem value="other">Other</SelectItem>
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
          placeholder="Subject of your message"
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
          placeholder="Your message"
          rows={5}
          required
          className="bg-navy-900 border-navy-700"
        />
      </div>

      <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700" disabled={isSubmitting}>
        {isSubmitting ? "Sending..." : "Send Message"}
      </Button>

      {submitResult && (
        <div
          className={`p-4 rounded-md ${
            submitResult.success
              ? "bg-green-900/30 text-green-400 border border-green-800"
              : "bg-red-900/30 text-red-400 border border-red-800"
          }`}
        >
          {submitResult.message}
        </div>
      )}
    </form>
  )
}
