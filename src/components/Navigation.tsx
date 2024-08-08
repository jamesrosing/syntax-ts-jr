import Link from 'next/link'
import { usePathname } from 'next/navigation'
import clsx from 'clsx'

import { navigation } from '@/lib/navigation'

export function Navigation({
  className,
  onLinkClick,
}: {
  className?: string
  onLinkClick?: React.MouseEventHandler<HTMLAnchorElement>
}) {
  let pathname = usePathname()

  const renderNavItems = (items) => {
    if (!items || !Array.isArray(items)) {
      return null;
    }
    return items.map((item) => (
      <li key={item.name} className="relative">
        <Link
          href="#"
          onClick={onLinkClick}
          className={clsx(
            'block w-full pl-3.5 before:pointer-events-none before:absolute before:-left-1 before:top-1/2 before:h-1.5 before:w-1.5 before:-translate-y-1/2 before:rounded-full',
            item.name === pathname
              ? 'font-semibold text-sky-500 before:bg-sky-500'
              : 'text-slate-500 before:hidden before:bg-slate-300 hover:text-slate-600 hover:before:block dark:text-slate-400 dark:before:bg-slate-700 dark:hover:text-slate-300'
          )}
        >
          {item.name}
        </Link>
        {item.subItems && item.subItems.length > 0 && (
          <ul className="mt-2 space-y-2 pl-4">
            {renderNavItems(item.subItems)}
          </ul>
        )}
      </li>
    ))
  }

  return (
    <nav className={clsx('text-base lg:text-sm', className)}>
      <ul role="list" className="space-y-9">
        {navigation.map((section) => (
          <li key={section.name}>
            <h2 className="font-display font-medium text-slate-900 dark:text-white">
              {section.name}
            </h2>
            <ul
              role="list"
              className="mt-2 space-y-2 border-l-2 border-slate-100 lg:mt-4 lg:space-y-4 lg:border-slate-200 dark:border-slate-800"
            >
              {renderNavItems(section.subItems)}
            </ul>
          </li>
        ))}
      </ul>
    </nav>
  )
}
