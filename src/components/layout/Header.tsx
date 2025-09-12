'use client'

import { useEffect, useState } from 'react'
import { Dialog, DialogPanel, PopoverGroup } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'
import Link from 'next/link'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isHighContrast, setIsHighContrast] = useState(false)

  useEffect(() => {
    if (isHighContrast) {
      document.documentElement.classList.add("high-contrast");
    } else {
      document.documentElement.classList.remove("high-contrast");
    }
  }, [isHighContrast]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header className={`sticky top-0 z-50 w-full ${isScrolled && !isHighContrast ? "shadow-md bg-white text-orange-600" : "bg-orange-600 text-white"} transition-all`}>
      <nav aria-label="Global" className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
        <div className="flex lg:flex-1 items-center gap-3">
          <Link href="/" className="flex items-center gap-3 -m-1.5 p-1.5">
            <Image
              alt="teste"
              src="/hamburger.svg"
              className="h-8 w-auto"
              width={70}
              height={70}
            />
            <span className='font-semibold'>Kikão Lanches</span>
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className={`-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 ${isScrolled ? "text-orange-600" : "text-white" }`}
          >
            <span className="sr-only">Abir menu</span>
            <Bars3Icon aria-hidden="true" className="size-6" />
          </button>
        </div>
        <PopoverGroup className="hidden lg:flex lg:gap-x-12">
          <Link href="#" className="text-sm/6 font-semibold">
            Cardápio
          </Link>
          <Link href="#" className="text-sm/6 font-semibold">
            Sobre nós
          </Link>
          <Link href="#" className="text-sm/6 font-semibold">
            Contato
          </Link>
        </PopoverGroup>
        <div className="hidden lg:flex lg:flex-1 gap-3 lg:justify-end items-center">
          <button className={`btn hover:cursor-pointer px-1 py-1 border-2 hover:border-white hover:rounded-full ${isHighContrast ? "border-white rounded-full" : "border-transparent"}`} title={isHighContrast ? "Desativar alto contraste" : "Ativar alto contraste"} onClick={() => setIsHighContrast(!isHighContrast)}>
            {isScrolled && !isHighContrast ? (
              <img src="/icons/contrast-orange.svg" alt="Alto Contraste" width={20} />
            ) : (
              <img src="/icons/contrast-white.svg" alt="Alto Contraste" width={20} />
            )}
          </button>
          <Link href="/admin/login" className="text-sm/6 font-semibold">
            Área administrativa <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>
      </nav>
      <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
        <div className="fixed inset-0 z-50" />
        <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white p-6 sm:max-w-sm sm:ring-1 sm:ring-gray-100/10 dialog">
          <div className="flex items-center justify-between">
            <Link href="#" className="flex items-center gap-3 -m-1.5 p-1.5">
              <Image
                alt="teste" 
                src="/hamburger.svg"
                className="h-8 w-auto"
                width={70}
                height={70}
              />
              <span className="font-semibold">Kikão Lanches</span> 
            </Link>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-gray-400 yellow-icon"
            >
              <span className="sr-only">Fechar menu</span>
              <XMarkIcon aria-hidden="true" className="size-6 text-orange-600 yellow-icon" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-white/10">
              <div className="space-y-2 py-6">
                <Link
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-orange-600 hover:bg-white/5"
                >
                  Cardápio
                </Link>
                <Link
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-orange-600 hover:bg-white/5"
                >
                  Sobre nós
                </Link>
                <Link
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-orange-600 hover:bg-white/5"
                >
                  Contato
                </Link>
              </div>
              <div className="py-6 flex gap-3 items-center">
                <button className={`btn hover:cursor-pointer px-1 py-1 border-2 hover:border-white      hover:rounded-full ${isHighContrast ? "border-white rounded-full" : "border-transparent"}`} title={isHighContrast ? "Desativar alto contraste" : "Ativar alto contraste"} onClick={() => setIsHighContrast(!isHighContrast)}>
                  {!isHighContrast ? (
                    <img src="/icons/contrast-orange.svg" alt="Alto Contraste" width={20} />
                  ) : (
                    <img src="/icons/contrast-white.svg" alt="Alto Contraste" width={20} />
                  )}
                </button>
                <Link
                  href="/admin/login"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-orange-600 hover:bg-white/5"
                >
                  Área administrativa
                </Link>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  )
}