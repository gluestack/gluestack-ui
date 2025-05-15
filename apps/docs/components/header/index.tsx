import React from 'react';
import Link from 'next/link';
import { FaGithub, FaDiscord, FaSlack } from 'react-icons/fa';
import { BsSun } from 'react-icons/bs';
import { Divider } from '../ui/divider';
import { Text } from '@/components/ui/text';
const Header = () => {
  return (
    <header className="w-full border-b bg-background-0 border-outline-200">
      <div className="mx-auto px-4 py-2 flex items-center justify-between">
        {/* Logo section */}
        <div className="flex items-center space-x-2">
          <Link href="/" className="flex items-center">
            <div className="bg-black p-1 rounded">
              <span className="text-white font-bold text-sm">⟐</span>
            </div>
            <span className="ml-2 font-semibold text-gray-800">gluestack-ui</span>
            <span className="ml-1 bg-gray-100 px-1.5 py-0.5 rounded-lg text-xs text-typography-800 font-semibold font-jakarta">v3</span>
          </Link>
          <Divider
                orientation="vertical"
                className="h-[20px] hidden sm:flex lg:hidden xl:flex"
              />
           <Text className="text-sm text-typography-700 hidden sm:flex lg:hidden xl:flex">
                Formerly NativeBase
              </Text>
        </div>

        {/* Navigation */}
        <div className="flex items-center space-x-6">
          <nav className="hidden md:flex space-x-6">
            <Link href="/docs" className="text-gray-700 hover:text-gray-900">
              Docs
            </Link>
            <div className="relative group">
              <button className="flex items-center text-gray-700 hover:text-gray-900">
                Products
                <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </button>
            </div>
            <Link href="/blogs" className="text-gray-700 hover:text-gray-900">
              Blogs
            </Link>
          </nav>

          {/* Icons */}
          <div className="flex items-center space-x-4">
            <button className="text-gray-700 hover:text-gray-900">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
              </svg>
            </button>
            <a href="https://discord.gg/gluestack" className="text-gray-700 hover:text-gray-900">
              <FaDiscord className="h-5 w-5" />
            </a>
            <a href="https://github.com/gluestack/gluestack-ui" className="text-gray-700 hover:text-gray-900">
              <FaGithub className="h-5 w-5" />
            </a>
            <a href="#" className="text-gray-700 hover:text-gray-900">
              <FaSlack className="h-5 w-5" />
            </a>
            <button className="text-gray-700 hover:text-gray-900">
              <BsSun className="h-5 w-5" />
            </button>
          </div>

          {/* CTA Button */}
          <a 
            href="https://gluestack.io/hire-experts" 
            className="hidden md:inline-block bg-black text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-gray-800 transition-colors"
          >
            Hire React Native Experts
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;