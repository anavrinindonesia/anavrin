import { useState } from 'react'
import { RadioGroup } from '@headlessui/react'
import clsx from 'clsx'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { Logomark } from '@/components/Logo'
import {
  CloseCircle,
  TickCircle,
} from '@/components/StockLogos'

const plans = [
  {
    name: 'Starter',
    featured: false,
    price: { Monthly: '$0', Annually: '$0' },
    description:
      'You’re new to investing but want to do it right. Get started for free.',
    button: {
      label: 'Get started for free',
      href: '/register',
    },
    features: [
      'Commission-free trading',
      'Multi-layered encryption',
      'One tip every day',
      'Invest up to $1,500 each month',
    ],
    logomarkClassName: 'fill-gray-300',
  },
  {
    name: 'Investor',
    featured: false,
    price: { Monthly: '$7', Annually: '$70' },
    description:
      'You’ve been investing for a while. Invest more and grow your wealth faster.',
    button: {
      label: 'Subscribe',
      href: '/register',
    },
    features: [
      'Commission-free trading',
      'Multi-layered encryption',
      'One tip every hour',
      'Invest up to $15,000 each month',
      'Basic transaction anonymization',
    ],
    logomarkClassName: 'fill-gray-500',
  },
  {
    name: 'VIP',
    featured: true,
    price: { Monthly: '$199', Annually: '$1,990' },
    description:
      'You’ve got a huge amount of assets but it’s not enough. To the moon.',
    button: {
      label: 'Subscribe',
      href: '/register',
    },
    features: [
      'Commission-free trading',
      'Multi-layered encryption',
      'Real-time tip notifications',
      'No investment limits',
      'Advanced transaction anonymization',
      'Automated tax-loss harvesting',
    ],
    logomarkClassName: 'fill-cyan-500',
  },
]

function CheckIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        d="M9.307 12.248a.75.75 0 1 0-1.114 1.004l1.114-1.004ZM11 15.25l-.557.502a.75.75 0 0 0 1.15-.043L11 15.25Zm4.844-5.041a.75.75 0 0 0-1.188-.918l1.188.918Zm-7.651 3.043 2.25 2.5 1.114-1.004-2.25-2.5-1.114 1.004Zm3.4 2.457 4.25-5.5-1.187-.918-4.25 5.5 1.188.918Z"
        fill="currentColor"
      />
      <circle
        cx="12"
        cy="12"
        r="8.25"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function Plan({
  name,
  price,
  description,
  button,
  features,
  featured = false,
  activePeriod,
  logomarkClassName,
}) {
  return (
    <section
      className={clsx(
        'flex flex-col overflow-hidden rounded-3xl p-6 shadow-lg shadow-gray-900/5',
        featured ? 'order-first bg-gray-900 lg:order-none' : 'bg-white'
      )}
    >
      <h3
        className={clsx(
          'flex items-center text-sm font-semibold',
          featured ? 'text-white' : 'text-gray-900'
        )}
      >
        <Logomark className={clsx('h-6 w-6 flex-none', logomarkClassName)} />
        <span className="ml-4">{name}</span>
      </h3>
      <p
        className={clsx(
          'relative mt-5 flex text-3xl tracking-tight',
          featured ? 'text-white' : 'text-gray-900'
        )}
      >
        {price.Monthly === price.Annually ? (
          price.Monthly
        ) : (
          <>
            <span
              aria-hidden={activePeriod === 'Annually'}
              className={clsx(
                'transition duration-300',
                activePeriod === 'Annually' &&
                'pointer-events-none translate-x-6 select-none opacity-0'
              )}
            >
              {price.Monthly}
            </span>
            <span
              aria-hidden={activePeriod === 'Monthly'}
              className={clsx(
                'absolute left-0 top-0 transition duration-300',
                activePeriod === 'Monthly' &&
                'pointer-events-none -translate-x-6 select-none opacity-0'
              )}
            >
              {price.Annually}
            </span>
          </>
        )}
      </p>
      <p
        className={clsx(
          'mt-3 text-sm',
          featured ? 'text-gray-300' : 'text-gray-700'
        )}
      >
        {description}
      </p>
      <div className="order-last mt-6">
        <ul
          role="list"
          className={clsx(
            '-my-2 divide-y text-sm',
            featured
              ? 'divide-gray-800 text-gray-300'
              : 'divide-gray-200 text-gray-700'
          )}
        >
          {features.map((feature) => (
            <li key={feature} className="flex py-2">
              <CheckIcon
                className={clsx(
                  'h-6 w-6 flex-none',
                  featured ? 'text-white' : 'text-cyan-500'
                )}
              />
              <span className="ml-4">{feature}</span>
            </li>
          ))}
        </ul>
      </div>
      <Button
        href={button.href}
        color={featured ? 'cyan' : 'gray'}
        className="mt-6"
        aria-label={`Get started with the ${name} plan for ${price}`}
      >
        {button.label}
      </Button>
    </section>
  )
}

export function Pricing() {
  let [activePeriod, setActivePeriod] = useState('Monthly')
  const comparisons = [
    {
      description: 'Low Cost Entry Fee',
      yourself: false,
      developers: false,
      anavrin: 'Yes, In fact you can start buying as low as $5'
    },
    {
      description: 'Organic Pricing',
      yourself: true,
      developers: false,
      anavrin: 'We are incentivized to sell at the best price possible'
    },
    {
      description: 'Easily Transactable',
      yourself: false,
      developers: false,
      anavrin: 'Auction based transaction is one of our core value'
    },
    {
      description: 'Buy-Back Guarantee',
      yourself: false,
      developers: false,
      anavrin: 'We will give buy back guarantee based on our terms and condition'
    },
    {
      description: 'Value-Driven Community',
      yourself: false,
      developers: true,
      anavrin: 'Your land value will reflect your overall community'
    },
    {
      description: 'Mortgage Ready',
      yourself: false,
      developers: true,
      anavrin: 'We guarantee all of our property is mortgage ready'
    },
    {
      description: 'Standardized Development Quality',
      yourself: false,
      developers: true,
      anavrin: 'Development Quality will be standardize across property'
    },
  ]

  return (
    <section
      id="pricing"
      aria-labelledby="pricing-title"
      className="border-t border-gray-200 bg-gray-100 py-20 sm:py-32"
    >
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <h2
            id="pricing-title"
            className="text-3xl font-medium tracking-tight text-gray-900"
          >
            Introducing a new way to land ownership
          </h2>
        </div>

        <div className="mt-8 flex justify-center">
          <table className="divide-y divide-gray-300">
            <thead>
              <tr>
                <th
                  scope="col"
                  className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6 md:pl-0"
                >
                </th>
                <th scope="col" className="py-3.5 px-3 text-center text-sm font-semibold text-gray-900">
                  Buy it yourself
                </th>
                <th scope="col" className="py-3.5 px-3 text-center text-sm font-semibold text-gray-900">
                  Through Developers
                </th>
                <th scope="col" className="py-3.5 px-3 text-center text-sm font-semibold text-gray-900">
                  Anavrin
                </th>
              </tr>
            </thead>
            <tbody className="overflow-x-auto">
              {comparisons.map((comparison) => (
                <tr key={comparison.description}>
                  <td className="whitespace-nowrap py-4 px-3 text-sm text-gray-500 font-bold">{comparison.description}</td>
                  <td valign="middle" align="center" className="whitespace-nowrap py-4 pl-4 text-sm text-gray-500">
                    {comparison.yourself ? <TickCircle /> : <CloseCircle />}
                  </td>
                  <td valign="middle" align="center" className="whitespace-nowrap py-4 px-3 text-sm text-gray-500">{comparison.developers ? <TickCircle /> : <CloseCircle />}</td>
                  <td className="whitespace-nowrap py-4 px-3 text-sm text-gray-500 bg-[#BBE0E3]/20 flex items-center space-x-2"><TickCircle color="#3B939A" /><span>{comparison.anavrin}</span></td>

                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Container>
    </section>
  )
}
