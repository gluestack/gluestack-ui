'use client'
import React from 'react'
import GluestackProBadge from './badge'

const GluestackProBanner = () => {
  return (
      <div className="w-full flex justify-center items-center h-14 py-[18px] bg-white border-b border-border/50">
          <p className='bg-clip-text text-transparent bg-gradient-to-r from-[#035B35] to-[#035B3599] text-sm font-roboto'>Ship faster with Ready to use screens</p>
          <GluestackProBadge onClick={() => {window.open('https://pro.gluestack.io/?utm_source=v4.gluestack.io&utm_medium=header&utm_campaign=site-navigation', '_blank')}} className='hover:cursor-pointer'/>
    </div>
  )
}

export default GluestackProBanner