'use client'

import * as Headless from '@headlessui/react'
import clsx from 'clsx'
import { LayoutGroup, motion } from 'framer-motion'
import React, { Fragment, forwardRef, useState, useId } from 'react'
import { TouchTarget } from './button'
import { Link } from './link'
import { navigation } from '@/lib/navigation'

export function Sidebar({ className, ...props }: React.ComponentPropsWithoutRef<'nav'>) {
  return (
    <nav {...props} className={clsx(className, 'flex h-full min-h-0 flex-col')}>
      {navigation.map((section) => (
        <SidebarSection key={section.name} name={section.name} items={section.links} />
      ))}
    </nav>
  )
}

export function SidebarHeader({ className, ...props }: React.ComponentPropsWithoutRef<'div'>) {
  return (
    <div
      {...props}
      className={clsx(
        className,
        'flex flex-col border-b border-zinc-950/5 p-4 dark:border-white/5 [&>[data-slot=section]+[data-slot=section]]:mt-2.5'
      )}
    />
  )
}

export function SidebarBody({ className, ...props }: React.ComponentPropsWithoutRef<'div'>) {
  return (
    <div
      {...props}
      className={clsx(
        className,
        'flex flex-1 flex-col overflow-y-auto p-4 [&>[data-slot=section]+[data-slot=section]]:mt-8'
      )}
    />
  )
}

export function SidebarFooter({ className, ...props }: React.ComponentPropsWithoutRef<'div'>) {
  return (
    <div
      {...props}
      className={clsx(
        className,
        'flex flex-col border-t border-zinc-950/5 p-4 dark:border-white/5 [&>[data-slot=section]+[data-slot=section]]:mt-2.5'
      )}
    />
  )
}

export function SidebarSection({ name, items }) {
  return (
    <div>
      <SidebarHeading>{name}</SidebarHeading>
      {items && items.map((item) => (
        <SidebarItem key={item.name} item={item} defaultOpen={true} />
      ))}
    </div>
  )
}

export function SidebarHeading({ className, ...props }: React.ComponentPropsWithoutRef<'h3'>) {
  return (
    <h3 {...props} className={clsx(className, 'mb-1 px-2 text-xs/6 font-medium text-zinc-500 dark:text-zinc-400')} />
  )
}

export function SidebarItem({ item, defaultOpen }) {
  const { name, href, links } = item;
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div>
      <div className="py-2 px-4">
        <Link href={href || '#'} className="block w-full text-left" onClick={() => setIsOpen(!isOpen)}>
          {name}
          {links && links.length > 0 && (
            <span className="ml-auto">
              {isOpen ? <ChevronDownIcon /> : <ChevronRightIcon />}
            </span>
          )}
        </Link>
      </div>
      {isOpen && links && links.length > 0 && (
        <div className="pl-4">
          {links.map((subItem) => (
            <SidebarItem key={subItem.name} item={subItem} defaultOpen={false} />
          ))}
        </div>
      )}
    </div>
  )
}

function ChevronDownIcon() {
  return (
    <svg className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
      <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
    </svg>
  )
}

function ChevronRightIcon() {
  return (
    <svg className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
      <path fillRule="evenodd" d="M7.293 5.293a1 1 0 011.414 0L12 8.586l3.293-3.293a1 1 0 011.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
    </svg>
  )
}
