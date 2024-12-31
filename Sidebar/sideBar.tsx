'use client'
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from '@/components/ui/tooltip'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { ModeToggle } from '@/components/globals/theme-toggle'
import Category from '@/components/icons/category'
import Logs from '@/components/icons/clipboard'
import Templates from '@/components/icons/cloud_download'
import Home from '@/components/icons/home'
import Payment from '@/components/icons/payment'
import Settings from '@/components/icons/settings'
import Workflows from '@/components/icons/workflows'
import { Separator } from '@/components/ui/separator'
import clsx from 'clsx'
import { Database, GitBranch, LucideMousePointerClick, User } from 'lucide-react'

const menuOptions = [
    { name: 'Dashboard', Component: Home, href: '/dashboard' },
    { name: 'Workflows', Component: Workflows, href: '/workflows' },
    { name: 'Settings', Component: Settings, href: '/settings' },
    { name: 'Connections', Component: Category, href: '/connections' },
    { name: 'Billing', Component: Payment, href: '/billing' },
    // { name: 'Templates', Component: Templates, href: '/templates' },
    // { name: 'Logs', Component: Logs, href: '/logs' },
]

const MenuOptions = () => {
    const pathName = usePathname()

    return (
        <nav className=" dark:bg-black max-h-screen overflow-scroll justify-between flex items-center flex-col gap-10 py-4 px-2">
            <div className="flex items-center justify-center flex-col gap-5">
                <Link
                    className="flex font-bold flex-row text-[#EEE0FF]"
                    href="/"
                >
                    Alpha
                </Link>
                <TooltipProvider>
                    {menuOptions.map((menuItem) => (
                        <ul key={menuItem.name}>
                            <Tooltip delayDuration={0}>
                                <TooltipTrigger>
                                    <li>
                                        <Link
                                            href={menuItem.href}
                                            className={clsx(
                                                'group h-8 w-8 flex items-center justify-center scale-[1.5] rounded-lg p-[3px]  cursor-pointer',
                                                {
                                                    'dark:bg-[#2F006B] bg-[#EEE0FF] ':
                                                        pathName === menuItem.href,
                                                }
                                            )}
                                        >
                                            <menuItem.Component
                                                selected={pathName === menuItem.href}
                                            />
                                        </Link>
                                    </li>
                                </TooltipTrigger>
                                <TooltipContent
                                    side="right"
                                    className="bg-black/10 backdrop-blur-xl"
                                >
                                    <p>{menuItem.name}</p>
                                </TooltipContent>
                            </Tooltip>
                        </ul>
                    ))}
                </TooltipProvider>
                {/* <Separator /> */}


                <div className='absolute bottom-32'>
                    <div className="flex items-center flex-col gap-9 dark:bg-[#353346]/30 py-4 px-2 rounded-full max-h-[220px] overflow-scroll border-[1px]">
                        <div className="relative dark:bg-[#353346]/70 p-2 rounded-full dark:border-t-[2px] border-[1px] dark:border-t-[#353346]">
                            <LucideMousePointerClick
                                className="dark:text-white"
                                size={18}
                            />
                            <div className="border-l-2 border-muted-foreground/50 h-6 absolute left-1/2 transform translate-x-[-50%] -bottom-[30px]" />
                        </div>
                        <div className="relative dark:bg-[#353346]/70 p-2 rounded-full dark:border-t-[2px] border-[1px] dark:border-t-[#353346]">
                            <GitBranch
                                className="text-muted-foreground"
                                size={18}
                            />
                            <div className="border-l-2 border-muted-foreground/50 h-6 absolute left-1/2 transform translate-x-[-50%] -bottom-[30px]"></div>
                        </div>
                        <div className="relative dark:bg-[#353346]/70 p-2 rounded-full dark:border-t-[2px] border-[1px] dark:border-t-[#353346]">
                            <Database
                                className="text-muted-foreground"
                                size={18}
                            />
                            <div className="border-l-2 border-muted-foreground/50 h-6 absolute left-1/2 transform translate-x-[-50%] -bottom-[30px]"></div>
                        </div>
                        <div className="relative dark:bg-[#353346]/70 p-2 rounded-full dark:border-t-[2px] border-[1px] dark:border-t-[#353346]">
                            <GitBranch
                                className="text-muted-foreground"
                                size={18}
                            />
                        </div>
                    </div>
                    {/* <Separator /> */}

                </div>
            </div>
            <div className="fixed bottom-0 flex flex-col py-2 gap-5 dark:bg-[#353346]/30 p-2 rounded-full border-[1px] my-2">
                <ModeToggle />

                <div className="flex justify-center items-center gap-2 p-2 dark:bg-[#353346]/80  rounded-3xl">
                    <User className="text-muted-foreground" size={18} />
                </div>

            </div>


        </nav>
    )
}

export default MenuOptions
