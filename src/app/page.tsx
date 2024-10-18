'use client'
import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Shield, Users, Clock, Search, ChevronRight, CheckCircle } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"

export default function Home() {
  const [activeFeature, setActiveFeature] = useState(0)

  const features = [
    { icon: Shield, title: "Enhanced Security", description: "Protect sensitive data with advanced cryptography" },
    { icon: Users, title: "Access Control", description: "Fine-grained permissions for data access" },
    { icon: Search, title: "Transparency", description: "Complete audit trails for all actions" },
    { icon: Clock, title: "Faster Processes", description: "Automate workflows to reduce delays" },
  ]

  const steps = [
    { title: "Register", description: "Create your GovChain account with secure authentication" },
    { title: "Verify", description: "Complete the identity verification process" },
    { title: "Access", description: "Gain access to your government records and services" },
    { title: "Manage", description: "Control your data and interact with various departments" },
  ]
  return (

    <div className="min-h-screen bg-gray-900 text-white">
    <header className="container mx-auto px-4 py-8">
      <nav className="flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <Shield className="w-8 h-8 text-blue-400" />
          <span className="text-2xl font-bold">GovChain</span>
        </div>
        <div className="space-x-4">
          <Button variant="ghost" asChild>
            <Link href="/dashboard">Login</Link>
          </Button>
          <Button asChild>
            <Link href="/dashboard">Register</Link>
          </Button>
        </div>
      </nav>
    </header>

    <main className="container mx-auto px-4 py-16">
      <div className="text-center mb-16">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-5xl font-bold mb-4"
        >
          Welcome to GovChain
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-xl text-gray-400 mb-8"
        >
          A Secure Blockchain Solution for Government Records
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Button size="lg" asChild>
            <Link href="/register">Get Started <ChevronRight className="ml-2 h-4 w-4" /></Link>
          </Button>
        </motion.div>
      </div>

      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Key Features</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card 
                className="bg-gray-800 border-gray-700 cursor-pointer transition-all duration-300 hover:bg-gray-700"
                onClick={() => setActiveFeature(index)}
              >
                <CardHeader>
                  <feature.icon className={`w-8 h-8 ${index === activeFeature ? 'text-blue-400' : 'text-gray-400'} mb-2`} />
                  <CardTitle className="text-white">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-gray-300">
                  {feature.description}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">How It Works</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="bg-gray-800 border-gray-700">
                <CardHeader>
                  <CardTitle className="text-white flex items-center">
                    <span className="text-2xl font-bold mr-2">{index + 1}.</span> {step.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-gray-300">
                  {step.description}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Why Choose GovChain?</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Card className="bg-gray-800 border-gray-700 h-full">
              <CardHeader>
                <CardTitle className="text-white">For Citizens</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-300">
                <ul className="space-y-2">
                  <li className="flex items-center"><CheckCircle className="text-green-400 mr-2" /> Secure access to personal records</li>
                  <li className="flex items-center"><CheckCircle className="text-green-400 mr-2" /> Faster government service processing</li>
                  <li className="flex items-center"><CheckCircle className="text-green-400 mr-2" /> Transparent view of data usage</li>
                  <li className="flex items-center"><CheckCircle className="text-green-400 mr-2" /> Control over personal data sharing</li>
                </ul>
              </CardContent>
            </Card>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Card className="bg-gray-800 border-gray-700 h-full">
              <CardHeader>
                <CardTitle className="text-white">For Government</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-300">
                <ul className="space-y-2">
                  <li className="flex items-center"><CheckCircle className="text-blue-400 mr-2" /> Enhanced data security and integrity</li>
                  <li className="flex items-center"><CheckCircle className="text-blue-400 mr-2" /> Improved inter-department collaboration</li>
                  <li className="flex items-center"><CheckCircle className="text-blue-400 mr-2" /> Automated compliance and auditing</li>
                  <li className="flex items-center"><CheckCircle className="text-blue-400 mr-2" /> Reduced operational costs</li>
                </ul>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>

      <div className="text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
        <p className="text-xl text-gray-400 mb-8">Join GovChain today and experience the future of government record management.</p>
        <Button size="lg" asChild>
          <Link href="/register">Create Your Account <ChevronRight className="ml-2 h-4 w-4" /></Link>
        </Button>
      </div>
    </main>

    <footer className="bg-gray-800 mt-16 py-8">
      <div className="container mx-auto px-4 text-center text-gray-400">
        <p>&copy; 2023 GovChain. All rights reserved.</p>
        <div className="mt-4 space-x-4">
          <Link href="/about" className="hover:text-white">About</Link>
          <Link href="/contact" className="hover:text-white">Contact</Link>
          <Link href="/privacy" className="hover:text-white">Privacy Policy</Link>
          <Link href="/terms" className="hover:text-white">Terms of Service</Link>
        </div>
      </div>
    </footer>
  </div>
  )
}
