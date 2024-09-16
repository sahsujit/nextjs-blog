import { Button } from '@/components/ui/button'
import React from 'react'

const page = () => {
  return (
   <>
    <div className="container mx-auto p-6">
        <h1 className="text-3xl font-bold text-center mb-8">Contact Us</h1>
        <div className="max-w-lg mx-auto bg-white p-8 rounded-lg shadow-lg">
            <form action="#" method="POST">
                <div className="mb-4">
                    <label for="name" className="block text-gray-700 font-bold mb-2">Name</label>
                    <input type="text" id="name" name="name" className="w-full bg-[#111827] px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" required/>
                </div>
                <div className="mb-4">
                    <label for="email" className="block text-gray-700 font-bold mb-2">Email</label>
                    <input type="email" id="email" name="email" className="w-full bg-[#111827] px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" required/>
                </div>
                <div className="mb-4">
                    <label for="subject" className="block text-gray-700 font-bold mb-2">Subject</label>
                    <input type="text" id="subject" name="subject" className="w-full bg-[#111827] px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" required/>
                </div>
                <div className="mb-4">
                    <label for="message" className="block text-gray-700 font-bold mb-2">Message</label>
                    <textarea id="message" name="message" rows="5" className="w-full px-3 bg-[#111827] py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" required></textarea>
                </div>
                <div className="text-center">
                  
                    <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">Send Message</button>
                </div>
            </form>
        </div>
    </div>
   </>
  )
}

export default page