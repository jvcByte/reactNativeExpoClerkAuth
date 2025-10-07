import Link from 'next/link';
import { Menu, X, Sun, Moon, ExternalLink } from 'lucide-react';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import { ConnectButton } from 'thirdweb/react';
import { thirdwebClient } from '@/lib/thirdweb/client';
import { Button } from '@/components/ui/button';

// Navigation items
type NavItem = {
    name: string;
    href: string;
    external?: boolean;
};

const navigation: NavItem[] = [
    { name: 'Docs', href: '#', external: true },
];

export const Header = () => {

    return (
        <header
            className=""
        >
            <nav className="" aria-label="Global">
                <div className="flex">
                    {/* Logo */}
                    <div className="">
                        <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent dark:from-blue-400 dark:to-purple-400">
                            Thirdweb DApp
                        </span>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="flex items-center space-x-6">
                        <div className="flex space-x-6">
                            {navigation.map((item) => (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    target={item.external ? '_blank' : undefined}
                                    rel={item.external ? 'noopener noreferrer' : undefined}
                                    className={cn(
                                        'text-sm font-medium transition-colors flex items-center',
                                        'text-zinc-700 hover:text-zinc-900 dark:text-zinc-300 dark:hover:text-white',
                                        'group'
                                    )}
                                >
                                    {item.name}
                                    {item.external && (
                                        <ExternalLink className="ml-1 w-3.5 h-3.5 opacity-60 group-hover:opacity-100 transition-opacity" />
                                    )}
                                </Link>
                            ))}
                        </div>

                        <div className="flex items-center space-x-4 ml-2">
                            <div className="">
                                <ConnectButton
                                    client={thirdwebClient}
                                    theme="dark"
                                    connectButton={{
                                        label: 'Connect Wallet',
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
};