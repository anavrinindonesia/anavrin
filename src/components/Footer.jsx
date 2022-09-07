import Image from 'next/future/image'
import Link from 'next/link'
import { Container } from '@/components/Container'
import facebookLogo from '@/images/logos/facebook.svg'
import instagramLogo from '@/images/logos/instagram.svg'
import linkedinLogo from '@/images/logos/linkedin.png'

export function Footer() {
  return (
    <footer className="border-t border-gray-200">
      <Container>
        <div className="flex flex-col items-center border-t border-gray-200 py-8 md:flex-row-reverse md:justify-between md:py-6">
          <div className="flex w-full justify-center items-center md:w-auto space-x-4 mb-4 lg:mb-0">
            <a href="https://www.instagram.com/anavrindonesia/" target="_blank" rel="noreferrer">
              <Image src={facebookLogo} />
            </a>
            <a href="https://www.instagram.com/anavrindonesia/" target="_blank" rel="noreferrer">
              <Image src={instagramLogo} />
            </a>
            <a href="https://www.linkedin.com/company/anavrindonesia/" target="_blank" rel="noreferrer">
              <Image src={linkedinLogo} />
            </a>
          </div>
          <p className="text-sm text-gray-500 text-center lg:text-left">
            ©{new Date().getFullYear()} Anavrin Technology. All rights reserved. Various trademarks held by their respective owners.
          </p>
        </div>
      </Container>
    </footer>
  )
}
