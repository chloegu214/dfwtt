"use client"

import { useState } from "react"
import { Disclosure } from "@headlessui/react"
import { MenuIcon, XIcon } from "@heroicons/react/outline"

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <Disclosure as="nav" className="bg-blue-900">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <span className="font-bold text-xl text-yellow-400">My App</span>
                </div>
                <div className="hidden md:block">
                  <div className="ml-10 flex items-baseline space-x-4">
                    <a href="#" className="text-white hover:text-yellow-400 px-3 py-2 rounded-md text-sm font-medium">
                      Home
                    </a>
                    <a href="#" className="text-white hover:text-yellow-400 px-3 py-2 rounded-md text-sm font-medium">
                      About
                    </a>
                    <a href="#" className="text-white hover:text-yellow-400 px-3 py-2 rounded-md text-sm font-medium">
                      Services
                    </a>
                    <a href="#" className="text-white hover:text-yellow-400 px-3 py-2 rounded-md text-sm font-medium">
                      Contact
                    </a>
                  </div>
                </div>
              </div>
              <div className="-mr-2 flex md:hidden">
                {/* Mobile menu button */}
                <Disclosure.Button className="bg-blue-900 inline-flex items-center justify-center p-2 rounded-md text-white hover:text-yellow-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-blue-800 focus:ring-white">
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <Disclosure.Button
                as="a"
                href="#"
                className="text-white hover:text-yellow-400 block px-3 py-2 rounded-md text-base font-medium"
              >
                Home
              </Disclosure.Button>
              <Disclosure.Button
                as="a"
                href="#"
                className="text-white hover:text-yellow-400 block px-3 py-2 rounded-md text-base font-medium"
              >
                About
              </Disclosure.Button>
              <Disclosure.Button
                as="a"
                href="#"
                className="text-white hover:text-yellow-400 block px-3 py-2 rounded-md text-base font-medium"
              >
                Services
              </Disclosure.Button>
              <Disclosure.Button
                as="a"
                href="#"
                className="text-white hover:text-yellow-400 block px-3 py-2 rounded-md text-base font-medium"
              >
                Contact
              </Disclosure.Button>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}

export default Navbar
