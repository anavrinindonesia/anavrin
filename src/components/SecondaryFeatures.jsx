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
              Built by working class, for all working class
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
              We do the work of discovering and acquiring the land. Through Anavrin, the land will be divided into parts that is suitable for individual-sized land ownership. So you can afford to have your housing needs with your owns terms.
            </p>
          </motion.div>
        </div>
        <div className="flex justify-center mt-20">
          <motion.div initial={{ opacity: 0 }}
            whileInView={{
              opacity: 1,
              transition: {
                type: "spring",
                duration: 1.2
              }
            }}>
            <Image src={sectionAboutUs} unoptimized />
          </motion.div>

        </div>
      </Container>
    </section>
  )
}
