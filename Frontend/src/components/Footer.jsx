import React from 'react'

const Footer = () => {
  return (
    <>
      {/* Footer */}
  <footer className="fixed bottom-0 left-0 w-full z-50 backdrop-blur-md bg-white/10 border-t border-white/20">
    <div className="flex justify-center space-x-6 py-3 text-sm text-black/65">
      <a href="#" className="hover:underline">Privacy</a>
      <a href="#" className="hover:underline">Policy</a>
      <a href="#" className="hover:underline capitalize">Feedback</a>
      <a href="#" className="hover:underline">Contact</a>
    </div>
  </footer>
    </>
  )
}

export default Footer