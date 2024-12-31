"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function ModeToggle() {
    const { setTheme, theme } = useTheme()

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button
                    variant="outline"
                    size="icon"
                    className={`relative flex justify-center items-center rounded-full p-2 overflow-hidden transition-all transform
                        hover:scale-110 hover:rotate-6
                        focus:outline-none
                        ${theme === 'light' ? 'focus:ring-[var(--primary)] dark:focus:ring-[var(--primary)]' : 'focus:ring-[var(--secondary)] dark:focus:ring-[var(--secondary)]'}
                        ${theme === 'light' ? 'border-[var(--primary)] dark:border-[var(--primary)]' : 'border-[var(--secondary)] dark:border-[var(--secondary)]'}
                    `}
                >
                    {/* Sun Icon */}
                    <Sun
                        className={`absolute h-[1.4rem] w-[1.4rem] transition-all duration-500 ease-in-out transform ${theme === "dark" ? "rotate-90 scale-0 opacity-0" : "rotate-0 scale-100 opacity-100"
                            }`}
                    />
                    {/* Moon Icon */}
                    <Moon
                        className={`absolute h-[1.4rem] w-[1.4rem] transition-all duration-500 ease-in-out transform ${theme === "light" ? "rotate-0 scale-0 opacity-0" : "rotate-0 scale-100 opacity-100"
                            }`}
                    />
                    <span className="sr-only">Toggle theme</span>

                    {/* Circular animation background */}
                    <span className={`absolute inset-0 bg-[var(--primary)] dark:bg-[var(--secondary)] rounded-full opacity-0 scale-0 transition-all duration-500 ease-in-out
                        ${theme === 'light' ? 'animate-expand-light' : 'animate-expand-dark'}`}
                    />
                </Button>
            </DropdownMenuTrigger>

            <DropdownMenuContent
                align="end"
                className="w-36 py-2 shadow-lg rounded-md bg-white dark:bg-[#111111] transition-all"
            >
                <DropdownMenuItem
                    onClick={() => setTheme("light")}
                    className="px-4 py-2 text-sm text-[var(--foreground)] dark:text-[var(--card-foreground)] hover:bg-[var(--secondary)] dark:hover:bg-[var(--secondary)] transition-all duration-300 ease-in-out rounded-md"
                >
                    Light
                </DropdownMenuItem>
                <DropdownMenuItem
                    onClick={() => setTheme("dark")}
                    className="px-4 py-2 text-sm text-[var(--foreground)] dark:text-[var(--card-foreground)] hover:bg-[var(--secondary)] dark:hover:bg-[var(--secondary)] transition-all duration-300 ease-in-out rounded-md"
                >
                    Dark
                </DropdownMenuItem>
                {/* <DropdownMenuItem
                    onClick={() => setTheme("system")}
                    className="px-4 py-2 text-sm text-[var(--foreground)] dark:text-[var(--card-foreground)] hover:bg-[var(--secondary)] dark:hover:bg-[var(--secondary)] transition-all duration-300 ease-in-out rounded-md"
                >
                    System
                </DropdownMenuItem> */}
            </DropdownMenuContent>
        </DropdownMenu>
    )
}
