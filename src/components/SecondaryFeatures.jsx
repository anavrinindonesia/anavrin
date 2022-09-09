import { Container } from '@/components/Container'
import Image from 'next/image';
import sectionAboutUs from '@/images/content/section-aboutus.png';
import { AnimatePresence, motion } from 'framer-motion';


export function SecondaryFeatures() {
  return (
    <section
      id="about-us"
      aria-label="Features for building a portfolio"
      className="py-20 sm:py-32"
    >
      <Container>
        <div className="mx-auto max-w-7xl sm:text-center">
          <h2 className="text-3xl font-medium tracking-tight text-gray-900">
            Built by working class, for all working class
          </h2>
          <p className="mt-2 text-lg text-gray-600">
            We do the work of discovering and acquiring the land, and through our platform, we split it into parts that are suitable for individual-sized land ownership so you can afford to have your housing needs on your terms.
          </p>
        </div>
        <div className="flex justify-center mt-20">
          <Image src={sectionAboutUs} unoptimized />
        </div>
      </Container>
    </section>
  )
}
