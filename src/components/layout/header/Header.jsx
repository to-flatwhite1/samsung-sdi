'use client';

import { Button, Container, Heading } from '@chakra-ui/react';
import { ChevronLeft, Share } from 'lucide-react';
import React, { useState } from 'react';
import Image from 'next/image';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { Dialog, DialogPanel } from '@headlessui/react';
import Link from 'next/link';

const navigation = [
    { name: 'SAMSUNG SDI', href: '/introduce' },
    { name: 'BUSINESS', id: 'business' },
    { name: 'ESG', href: '#', id: 'ESG' },
    { name: 'CAREER', id: 'career' }, // CAREER 항목
    { name: 'IR', href: '#', id: 'stock-card' },
    { name: 'PR', href: '#', id: 'pr' },
];

const Header = ({ type = 'type1', title, sharing, prev }) => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const renderHeader = () => {
        switch (type) {
            case 'type1':
                return (
                    <header className="fixed top-0 left-0 right-0 z-50 bg-white backdrop-blur-md flex items-center h-20">
                        <Container size="full" className="flex justify-between items-center">
                            <div aria-label="Global" className="flex items-center justify-between lg:px-8 w-full">
                                <h1 className="flex lg:flex-1">
                                    <Link href="/" passHref className="-m-1.5 p-1.5">
                                        <span className="sr-only">Your Company</span>
                                        <Image
                                            alt="Your Company Logo"
                                            src="/images/pattern/common/logo_samsungsdi.svg"
                                            width={30}
                                            height={30}
                                            className="h-7 w-auto"
                                        />
                                    </Link>
                                </h1>
                                <div className="flex lg:hidden">
                                    <button
                                        type="button"
                                        onClick={() => setMobileMenuOpen(true)}
                                        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                                    >
                                        <span className="sr-only">Open main menu</span>
                                        <Bars3Icon aria-hidden="true" className="size-6" />
                                    </button>
                                </div>
                                <nav className="hidden lg:flex lg:gap-x-12">
                                    {navigation.map((item) => (
                                        <a
                                            key={item.name}
                                            href={item.href === '#' ? undefined : item.href}
                                            onClick={(e) => {
                                                if (item.id) {
                                                    const element = document.getElementById(item.id);
                                                    if (element) {
                                                        console.log(`Scrolling to ${item.id}`);
                                                        element.scrollIntoView({ behavior: 'smooth', block: 'center' });
                                                    } else {
                                                        console.log(`Element with id "${item.id}" not found`);
                                                    }
                                                }
                                                setMobileMenuOpen(false); // 모바일 메뉴 닫기
                                            }}
                                            className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                                        >
                                            {item.name}
                                        </a>
                                    ))}
                                </nav>
                                <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                                    <a href="#" className="text-sm/6 font-semibold text-gray-900"></a>
                                </div>
                            </div>
                            <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
                                <div className="fixed inset-0 z-50" />
                                <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                                    <div className="flex items-center justify-between">
                                        <a href="#" className="-m-1.5 p-1.5">
                                            <span className="sr-only">Your Company</span>
                                            <Image
                                                alt=""
                                                src="/images/pattern/common/logo_samsungsdi.svg"
                                                width={30}
                                                height={30}
                                                className="h-6 w-auto"
                                            />
                                        </a>
                                        <button
                                            type="button"
                                            onClick={() => setMobileMenuOpen(false)}
                                            className="-m-2.5 rounded-md p-2.5 text-gray-700"
                                        >
                                            <span className="sr-only">Close menu</span>
                                            <XMarkIcon aria-hidden="true" className="size-6" />
                                        </button>
                                    </div>
                                    <div className="mt-6 flow-root">
                                        <div className="-my-6 divide-y divide-gray-500/10">
                                            <div className="space-y-2 py-6">
                                                {navigation.map((item) => (
                                                    <a
                                                        key={item.name}
                                                        href={item.href}
                                                        className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                                                    >
                                                        {item.name}
                                                    </a>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </DialogPanel>
                            </Dialog>
                        </Container>
                    </header>
                );
            default:
                return <Container>default</Container>;
        }
    };

    return <>{renderHeader()}</>;
};

export default Header;
