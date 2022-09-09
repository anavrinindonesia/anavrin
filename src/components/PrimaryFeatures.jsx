import { Fragment, useEffect, useId, useRef, useState } from 'react'
import Image from 'next/image'
import { Tab } from '@headlessui/react'
import clsx from 'clsx'
import { AnimatePresence, motion } from 'framer-motion'
import { useDebouncedCallback } from 'use-debounce'

import { AppScreen } from '@/components/AppScreen'
import { CircleBackground } from '@/components/CircleBackground'
import { Container } from '@/components/Container'
import { PhoneFrame } from '@/components/PhoneFrame'
import feature1 from '@/images/content/feature-1.png';
import feature2 from '@/images/content/feature-2.png';
import feature3 from '@/images/content/feature-3.png';
import javaIcon from '@/images/logos/java.png';
import sumateraIcon from '@/images/logos/sumatera.png';
import kalimantanIcon from '@/images/logos/kalimantan.png';
import baliIcon from '@/images/logos/bali.png';
import ntbnttIcon from '@/images/logos/ntbntt.png';
import papuaIcon from '@/images/logos/papua.png';
import convertibleOwnership from '@/images/content/convertible-ownership.png';
import { Buildings, RulerPen, Discover, Flag, Bubble, Flash, Electricity, HomeWifi, Trash, Car } from './StockLogos'

const MotionAppScreenHeader = motion(AppScreen.Header)
const MotionAppScreenBody = motion(AppScreen.Body)

const features = [
  {
    name: 'Smart Investment',
    description:
      'Discover your desired land, flip it, and accumulate wealth',
    icon: feature1,
    screen: SmartInvestmentScreen,
  },
  {
    name: 'Convertible Ownership',
    description:
      'Convert digital shares into physical land ownership',
    icon: feature2,
    screen: ConvertibleOwnershipScreen,
  },
  {
    name: 'Empowered with AI',
    description:
      'Predict best appreciating locations on the go, for better benefits',
    icon: feature3,
    screen: EmpoweredScreen,
  },
]

const headerAnimation = {
  initial: { opacity: 0, transition: { duration: 0.3 } },
  animate: { opacity: 1, transition: { duration: 0.3, delay: 0.3 } },
  exit: { opacity: 0, transition: { duration: 0.3 } },
}

const maxZIndex = 2147483647

const bodyVariantBackwards = {
  opacity: 0.4,
  scale: 0.8,
  zIndex: 0,
  filter: 'blur(4px)',
  zIndex: 0,
  transition: { duration: 0.4 },
}

const bodyVariantForwards = (custom) => ({
  y: '100%',
  zIndex: maxZIndex - custom.changeCount,
  transition: { duration: 0.4 },
})

const bodyAnimation = {
  initial: 'initial',
  animate: 'animate',
  exit: 'exit',
  variants: {
    initial: (custom) =>
      custom.isForwards ? bodyVariantForwards(custom) : bodyVariantBackwards,
    animate: (custom) => ({
      y: '0%',
      opacity: 1,
      scale: 1,
      zIndex: maxZIndex / 2 - custom.changeCount,
      filter: 'blur(0px)',
      transition: { duration: 0.4 },
    }),
    exit: (custom) =>
      custom.isForwards ? bodyVariantBackwards : bodyVariantForwards(custom),
  },
}

function SmartInvestmentScreen({ custom, animated = false }) {
  const lands = [
    {
      image: javaIcon,
      name: 'Java Island',
      percentage: '+2,42'
    },
    {
      image: sumateraIcon,
      name: 'Sumatera',
      percentage: '+2,42'
    },
    {
      image: kalimantanIcon,
      name: 'Kalimantan',
      percentage: '+2,42'
    },
    {
      image: baliIcon,
      name: 'Bali',
      percentage: '+2,42'
    },
    {
      image: ntbnttIcon,
      name: 'NTB. NTT',
      percentage: '+2,42'
    },
    {
      image: papuaIcon,
      name: 'Papua',
      percentage: '+2,42'
    },
  ]

  return (
    <AppScreen className="w-full mobile-container">
      <MotionAppScreenHeader {...(animated ? headerAnimation : {})}>
        <AppScreen.Title>Become a land owner</AppScreen.Title>
        <AppScreen.Subtitle>
          <div className="mt-3 h-10 bg-[#EEEEEE] rounded-lg flex space-x-4 items-center px-4">
            <div>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11.5 21.75C5.85 21.75 1.25 17.15 1.25 11.5C1.25 5.85 5.85 1.25 11.5 1.25C17.15 1.25 21.75 5.85 21.75 11.5C21.75 17.15 17.15 21.75 11.5 21.75ZM11.5 2.75C6.67 2.75 2.75 6.68 2.75 11.5C2.75 16.32 6.67 20.25 11.5 20.25C16.33 20.25 20.25 16.32 20.25 11.5C20.25 6.68 16.33 2.75 11.5 2.75Z" fill="black" />
                <path d="M21.9999 22.7499C21.8099 22.7499 21.6199 22.6799 21.4699 22.5299L19.4699 20.5299C19.1799 20.2399 19.1799 19.7599 19.4699 19.4699C19.7599 19.1799 20.2399 19.1799 20.5299 19.4699L22.5299 21.4699C22.8199 21.7599 22.8199 22.2399 22.5299 22.5299C22.3799 22.6799 22.1899 22.7499 21.9999 22.7499Z" fill="black" />
              </svg>
            </div>
            <div className="text-[#AFAFAF] text-sm">
              Search Square meters
            </div>
          </div>
        </AppScreen.Subtitle>
      </MotionAppScreenHeader>
      <MotionAppScreenBody {...(animated ? { ...bodyAnimation, custom } : {})}>
        <div className="px-4 py-6">
          <div className="flex justify-between items-baseline">
            <span className="text-[#545454] text-base font-medium">Sector</span>
            <span className="text-[#1E54B7] text-xs">View All</span>
          </div>
          <div className="grid grid-cols-3 gap-4 text-center mt-5">
            {lands.map((land, index) => <div key={index} className="border border-[#AFAFAF] rounded-lg px-2 py-4">
              <Image src={land.image} />
              <h3 className="text-xs">{land.name}</h3>
              <p className="text-[8px] text-[#3B939A]">{land.percentage}</p>
            </div>)}
          </div>
        </div>
      </MotionAppScreenBody>
    </AppScreen>
  )
}

function ConvertibleOwnershipScreen({ custom, animated = false }) {
  return (
    <AppScreen className="w-full mobile-container">
      <MotionAppScreenHeader {...(animated ? headerAnimation : {})}>
        <AppScreen.Title>TMA</AppScreen.Title>
        <AppScreen.Subtitle>Tangerang Metropolitan Area</AppScreen.Subtitle>
      </MotionAppScreenHeader>
      <MotionAppScreenBody {...(animated ? { ...bodyAnimation, custom } : {})}>
        <div>
          <Image src={convertibleOwnership} />
        </div>
        <div className="flex space-x-2 px-5 mt-5">
          <div className="h-9 flex justify-center items-center bg-[#EEEEEE] text-sm px-3 w-full">Sell</div>
          <div className="h-9 flex justify-center items-center bg-black text-white text-sm px-3 w-full">Buy</div>
        </div>
      </MotionAppScreenBody>
    </AppScreen>
  )
}

function EmpoweredScreen({ custom, animated = false }) {
  return (
    <AppScreen className="w-full mobile-container">
      <MotionAppScreenHeader {...(animated ? headerAnimation : {})}>
        <AppScreen.Title>Overview</AppScreen.Title>
        <AppScreen.Subtitle>

        </AppScreen.Subtitle>
      </MotionAppScreenHeader>
      <MotionAppScreenBody {...(animated ? { ...bodyAnimation, custom } : {})}>
        <div className="px-4 py-6">
          <div className="font-semibold mb-6">About TMA</div>
          <div className="space-y-4">
            {[
              { icon: Buildings, label: 'Developer', value: 'Panah Cinta Property' },
              { icon: RulerPen, label: 'Land Size', value: '1000/2000 Sq m' },
              { icon: Discover, label: 'Place', value: 'Tangerang Selatan' },
              { icon: Flag, label: 'Bought in', value: 'Jan 2022' },
            ].map((item) => (
              <div
                key={item.label}
                className="flex justify-between"
              >
                <div className="text-sm font-semibold text-gray-900 flex gap-x-2"><item.icon />{item.label}</div>
                <div className="text-sm text-gray-500 text-right">
                  {item.value}
                </div>
              </div>
            ))}
          </div>
          <div className="font-semibold mb-6 mt-6">Facts</div>
          <div className="space-y-4">
            {[
              { icon: Bubble, label: 'Water Coverage', value: '2' },
              { icon: Flash, label: 'Electricity', value: 'PLN Indonesia' },
              { icon: Electricity, label: 'Electric network', value: 'Underground' },
              { icon: HomeWifi, label: 'Internet Fiber', value: '3' },
              { icon: Trash, label: 'Utility Sewer', value: 'Attached' },
              { icon: Car, label: 'Parking Type', value: 'Attached Garage' },
            ].map((item) => (
              <div
                key={item.label}
                className="flex justify-between"
              >
                <div className="text-sm font-semibold text-gray-900 flex gap-x-2"><item.icon />{item.label}</div>
                <div className="text-sm text-gray-500 text-right">
                  {item.value}
                </div>
              </div>
            ))}
          </div>
        </div>
      </MotionAppScreenBody>
    </AppScreen>
  )
}

function usePrevious(value) {
  let ref = useRef()

  useEffect(() => {
    ref.current = value
  }, [value])

  return ref.current
}

function FeaturesDesktop() {
  let [changeCount, setChangeCount] = useState(0)
  let [selectedIndex, setSelectedIndex] = useState(0)
  let prevIndex = usePrevious(selectedIndex)
  let isForwards = prevIndex === undefined ? true : selectedIndex > prevIndex

  let onChange = useDebouncedCallback(
    (selectedIndex) => {
      setSelectedIndex(selectedIndex)
      setChangeCount((changeCount) => changeCount + 1)
    },
    100,
    { leading: true }
  )

  return (
    <Tab.Group
      as="div"
      className="grid grid-cols-12 items-center gap-8 lg:gap-16 xl:gap-24"
      selectedIndex={selectedIndex}
      onChange={onChange}
      vertical
    >
      <Tab.List className="relative z-10 order-last col-span-6 space-y-6">
        {features.map((feature, featureIndex) => (
          <div
            key={feature.name}
            className="relative rounded-2xl transition-colors hover:bg-gray-800/60"
          >
            {featureIndex === selectedIndex && (
              <motion.div
                layoutId="activeBackground"
                className="absolute inset-0 bg-gray-800"
                initial={{ borderRadius: 16 }}
              />
            )}
            <div className="relative z-10 p-8">
              <div className="relative">
                <div className="w-12">
                  <Image src={feature.icon} unoptimized />
                </div>
              </div>
              <h3 className="mt-6 text-lg font-semibold text-white">
                <Tab className="text-left [&:not(:focus-visible)]:focus:outline-none">
                  <span className="absolute inset-0 rounded-2xl" />
                  {feature.name}
                </Tab>
              </h3>
              <p className="mt-2 text-sm text-gray-400">
                {feature.description}
              </p>
            </div>
          </div>
        ))}
      </Tab.List>
      <div className="relative col-span-6">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <CircleBackground color="#13B5C8" className="animate-spin-slower" />
        </div>
        <PhoneFrame className="z-10 mx-auto w-full max-w-[366px]">
          <Tab.Panels as={Fragment}>
            <AnimatePresence
              initial={false}
              custom={{ isForwards, changeCount }}
            >
              {features.map((feature, featureIndex) =>
                selectedIndex === featureIndex ? (
                  <Tab.Panel
                    static
                    key={feature.name + changeCount}
                    className="col-start-1 row-start-1 flex focus:outline-offset-[32px] [&:not(:focus-visible)]:focus:outline-none"
                  >
                    <feature.screen
                      animated
                      custom={{ isForwards, changeCount }}
                    />
                  </Tab.Panel>
                ) : null
              )}
            </AnimatePresence>
          </Tab.Panels>
        </PhoneFrame>
      </div>
    </Tab.Group>
  )
}

function FeaturesMobile() {
  let [activeIndex, setActiveIndex] = useState(0)
  let slideContainerRef = useRef()
  let slideRefs = useRef([])

  useEffect(() => {
    let observer = new window.IntersectionObserver(
      (entries) => {
        for (let entry of entries) {
          if (entry.isIntersecting) {
            setActiveIndex(slideRefs.current.indexOf(entry.target))
            break
          }
        }
      },
      {
        root: slideContainerRef.current,
        threshold: 0.6,
      }
    )

    for (let slide of slideRefs.current) {
      if (slide) {
        observer.observe(slide)
      }
    }

    return () => {
      observer.disconnect()
    }
  }, [slideContainerRef, slideRefs]);

  return (
    <>
      <div
        ref={slideContainerRef}
        className="-mb-4 flex snap-x snap-mandatory -space-x-4 overflow-x-auto overscroll-x-contain scroll-smooth pb-4 [scrollbar-width:none] sm:-space-x-6 [&::-webkit-scrollbar]:hidden"
      >
        {features.map((feature, featureIndex) => (
          <div
            key={featureIndex}
            ref={(ref) => (slideRefs.current[featureIndex] = ref)}
            className="w-full flex-none snap-center px-8 sm:px-6"
          >
            <div className="relative transform overflow-hidden rounded-2xl bg-gray-800 py-6">
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                <CircleBackground
                  color="#13B5C8"
                  className={featureIndex % 2 === 1 ? 'rotate-180' : undefined}
                />
              </div>
              <PhoneFrame className="relative mx-auto w-full max-w-[366px]">
                <feature.screen />
              </PhoneFrame>
              <div className="absolute inset-x-0 bottom-0 bg-gray-800/95 px-6 py-4 backdrop-blur sm:p-10 text-center">
                <h3 className="text-sm font-semibold text-white sm:text-lg">
                  {feature.name}
                </h3>
                <p className="text-sm text-gray-400">
                  {feature.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-6 flex justify-center gap-3">
        {features.map((_, featureIndex) => (
          <button
            type="button"
            key={featureIndex}
            className={clsx(
              'relative h-0.5 w-4 rounded-full',
              featureIndex === activeIndex ? 'bg-gray-300' : 'bg-gray-500'
            )}
            aria-label={`Go to slide ${featureIndex + 1}`}
            onClick={() => {
              slideRefs.current[featureIndex].scrollIntoView({
                block: 'nearest',
                inline: 'nearest',
              })
            }}
          >
            <span className="absolute -inset-x-1.5 -inset-y-3" />
          </button>
        ))}
      </div>
    </>
  )
}

export function PrimaryFeatures() {
  return (
    <section
      id="solution"
      aria-label="Features for investing all your money"
      className="bg-gray-900 py-20 sm:py-32"
    >
      <Container>
        <div className="mx-auto max-w-2xl">
          <h2 className="text-3xl text-center font-medium tracking-tight text-white">
            Find your ideal piece of land that suits your needs and purchasing ability
          </h2>
        </div>
      </Container>
      <div className="mt-16 md:hidden">
        <FeaturesMobile />
      </div>
      <Container className="hidden md:mt-20 md:block">
        <FeaturesDesktop />
      </Container>
    </section>
  )
}
