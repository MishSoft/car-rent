import React from 'react'

const navLinks = [
  {
    id: "about",
    links: [
      {
        label: "How it works",
        href: "/how-it-works"
      },
      {
        label: "Featured",
        href: "/featured"
      },
      {
        label: "Partnership",
        href: "/partnership"
      },
      {
        label: "Bussiness Relation",
        href: "/bussines-relation"
      },
    ]
  },
  {
    id: "Community",
    links: [
      {
        label: "Events",
        href: "/events"
      },
      {
        label: "Blog",
        href: "/blog"
      },
      {
        label: "Porcast",
        href: "/podcast"
      },
      {
        label: "Invite a friend",
        href: "/invite-friend"
      },
    ]
  },

  {
    id: "Socials",
    links: [
      {
        label: "Discord",
        href: "/"
      },
      {
        label: "Instagram",
        href: "/"
      },
      {
        label: "Twitter",
        href: "/"
      },
      {
        label: "Facebook",
        href: "/d"
      },
    ]
  }
]

export default function Navigation() {
  return (
    <nav >
      <ul className='grid sm:grid-cols-3  md:place-items-end grid-cols-2 gap-15'>
        {navLinks.map(section => (
          <li key={section.id} className='text-[20px] gap-6 flex flex-col font-semibold'>

            {section.id}

            <ul className='flex flex-col  gap-3'>
              {section.links.map(link => (
                <li className='text-(--card-gray-color) font-normal text-[16px]' key={link.label}>
                  <a href={link.href}>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>

          </li>
        ))}
      </ul>
    </nav>
  )
}
