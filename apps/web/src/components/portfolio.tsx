'use client'

import { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"
import { Switch } from "@/components/ui/switch"
import { ChevronRight, Github, Linkedin, Mail, Menu, Moon, Search, Sun } from "lucide-react"

export function Portfolio() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const [isDarkMode, setIsDarkMode] = useState(false)

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen)

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode)
    if (isDarkMode) {
      document.documentElement.classList.remove('dark')
    } else {
      document.documentElement.classList.add('dark')
    }
  }

  useEffect(() => {
    // Check for user's preference
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setIsDarkMode(true)
      document.documentElement.classList.add('dark')
    }
  }, [])

  return (
    <div className="flex h-screen bg-background text-foreground dark:bg-gray-900 dark:text-gray-100">
      {/* Sidebar */}
      <aside className={`${isSidebarOpen ? 'block' : 'hidden'} md:block w-64 border-r bg-muted dark:bg-gray-800 dark:border-gray-700`}>
        <ScrollArea className="h-full">
          <div className="p-6">
            <h1 className="text-2xl font-bold mb-4">John Doe</h1>
            <nav className="space-y-2">
              <Button variant="ghost" className="w-full justify-start">
                <ChevronRight className="mr-2 h-4 w-4" />
                About
              </Button>
              <Button variant="ghost" className="w-full justify-start">
                <ChevronRight className="mr-2 h-4 w-4" />
                Projects
              </Button>
              <Button variant="ghost" className="w-full justify-start">
                <ChevronRight className="mr-2 h-4 w-4" />
                Skills
              </Button>
              <Button variant="ghost" className="w-full justify-start">
                <ChevronRight className="mr-2 h-4 w-4" />
                Experience
              </Button>
              <Button variant="ghost" className="w-full justify-start">
                <ChevronRight className="mr-2 h-4 w-4" />
                Education
              </Button>
            </nav>
          </div>
        </ScrollArea>
      </aside>

      {/* Main content */}
      <main className="flex-1 overflow-y-auto">
        {/* Header */}
        <header className="sticky top-0 z-10 bg-background dark:bg-gray-800 border-b dark:border-gray-700 p-4 flex items-center justify-between">
          <Button variant="ghost" size="icon" className="md:hidden" onClick={toggleSidebar}>
            <Menu className="h-6 w-6" />
          </Button>
          <div className="flex-1 px-4">
            <form className="relative">
              <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Search" className="pl-8" />
            </form>
          </div>
          <nav className="flex items-center space-x-4">
            <Button variant="ghost" size="icon">
              <Github className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <Linkedin className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <Mail className="h-5 w-5" />
            </Button>
            <div className="flex items-center space-x-2">
              <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              <Switch
                checked={isDarkMode}
                onCheckedChange={toggleDarkMode}
                aria-label="Toggle dark mode"
              />
            </div>
          </nav>
        </header>

        {/* Content */}
        <div className="max-w-4xl mx-auto p-6 space-y-8">
          <section>
            <h2 className="text-3xl font-bold mb-4">About Me</h2>
            <p className="text-lg text-muted-foreground dark:text-gray-300">
              I'm a passionate software developer with expertise in React, Node.js, and cloud technologies. 
              I love building scalable web applications and exploring new technologies.
            </p>
          </section>

          <Separator className="dark:bg-gray-700" />

          <section>
            <h2 className="text-3xl font-bold mb-4">Projects</h2>
            <div className="grid gap-6 md:grid-cols-2">
              {[1, 2, 3, 4].map((project) => (
                <div key={project} className="border dark:border-gray-700 rounded-lg p-4">
                  <h3 className="text-xl font-semibold mb-2">Project {project}</h3>
                  <p className="text-muted-foreground dark:text-gray-300 mb-4">
                    A brief description of project {project} and its key features.
                  </p>
                  <Button variant="outline">View Details</Button>
                </div>
              ))}
            </div>
          </section>

          <Separator className="dark:bg-gray-700" />

          <section>
            <h2 className="text-3xl font-bold mb-4">Skills</h2>
            <div className="flex flex-wrap gap-2">
              {['React', 'Node.js', 'TypeScript', 'GraphQL', 'AWS', 'Docker', 'CI/CD', 'Agile'].map((skill) => (
                <div key={skill} className="bg-secondary text-secondary-foreground dark:bg-gray-700 dark:text-gray-200 px-3 py-1 rounded-full text-sm">
                  {skill}
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>
    </div>
  )
}