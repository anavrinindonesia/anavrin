import { Container } from '@/components/Container'
import Image from 'next/image';
import sectionGetStarted from '@/images/content/section-getstarted.png';
import { motion } from 'framer-motion';

export function GetStarted() {
  return (
    <section
      id="get-started"
      aria-label="Become a land owner"
      className="pb-32 lg:pt-40 lg:pb-52"
    >
      <Container>
        <div className="mx-auto max-w-7xl grid grid-cols-2 items-center gap-20">
          <div className="flex justify-center mt-20 lg:col-span-1 col-span-2">
            <motion.div initial={{ opacity: 0 }}
              whileInView={{
                opacity: 1,
                transition: {
                  type: "spring",
                  duration: 1.2
                }
              }}>
              <Image src={sectionGetStarted} unoptimized />
            </motion.div>
          </div>
          <div className="lg:col-span-1 col-span-2">
            <motion.div initial={{ opacity: 0, y: -100 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: {
                  type: "spring",
                  bounce: 0.4,
                  duration: 2
                }
              }}>
              <h2 className="text-3xl font-medium tracking-tight text-gray-900">
                Become a land owner
              </h2>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: -50 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: {
                  type: "spring",
                  bounce: 0.4,
                  duration: 1.2
                }
              }}>
              <p className="mt-2 text-lg text-gray-600">
                Leveraging collective purchasing power for land ownership is what Anavrin aims to deliver through our products. Anavrin helps you to make it possible to own a land and make space for what really matters.
              </p>
            </motion.div>
          </div>
        </div>

      </Container>
    </section >
  )
}
