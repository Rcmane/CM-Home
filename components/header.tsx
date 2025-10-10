"use client"

import { MessageCircleMore, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useState } from "react"
import * as Dialog from "@radix-ui/react-dialog"

export default function Header() {
  const [query, setQuery] = useState("")
  const [isOpen, setIsOpen] = useState(false)
  // const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   setQuery(e.target.value);
  // };
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };
  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault()
    if (query.trim()) {
      setIsOpen(true)
    }
  }
  const DialogDemo = () => {
    return (
      <Dialog.Root open={isOpen} onOpenChange={setIsOpen}>
        <div className="flex-1 max-w-2xl">
          <form className="flex gap-2" onSubmit={handleSubmit}>
            <Input
              type="search"
              placeholder="What you want to know..."
              className="flex-1"
              value={query}
              onChange={handleInputChange}
            />
            <Dialog.Trigger asChild>
              <Button
                type="button"
                className="bg-accent hover:bg-accent/90 flex-shrink-0"
                disabled={!query.trim()}
              >
                <span className="hidden md:inline">Chat</span>
                <MessageCircleMore className="h-4 w-4 md:mr-2" />
              </Button>


            </Dialog.Trigger>
          </form>
        </div>

        <Dialog.Portal>
          <Dialog.Overlay className="fixed inset-0 bg-black/50 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" />
          <Dialog.Content className="fixed left-[50%] top-[50%] z-50 w-full max-w-lg translate-x-[-50%] translate-y-[-50%] bg-white rounded-lg p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%]">
            <Dialog.Title className="text-xl font-semibold mb-4">
              Your Query
            </Dialog.Title>
            <Dialog.Description className="text-gray-600 mb-4">
              Question: {query}
            </Dialog.Description>

            {/* Your content here */}
            <div>
              Answer:
            </div>

            <Dialog.Close asChild>
              <Button className="mt-4">Close</Button>
            </Dialog.Close>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    )
  }
  return (
    <header className="bg-background border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-2 md:px-4 py-3">
        <div className="flex items-center gap-2 md:gap-4">
          {/* Logo */}
          <div className="flex items-center gap-2 flex-shrink-0">
            <h1 className="text-2xl md:text-3xl font-bold text-red-600">Crossmap</h1>
          </div>

          {/* Baidu Logo */}
          {/* <div className="flex-shrink-0">
            <div className="bg-secondary text-secondary-foreground px-3 py-1 rounded font-bold text-sm md:text-base">
              AI
            </div>
          </div> */}

          {/* Search Bar */}
          <div className="flex-1 max-w-2xl">
            {/* <form className="flex gap-2">
              <Input type="search" placeholder="What you want to know..." className="flex-1" onChange={handleInputChange} />
              <Button type="submit" className="bg-accent hover:bg-accent/90 flex-shrink-0" disabled={!query.trim()}>
                <span className="hidden md:inline">Chat</span>
                <Search className="h-4 w-4 md:mr-2" />
                <MessageCircleMore className="h-4 w-4 md:mr-2" />
              </Button>
              <DialogDemo />
            </form> */}
            <DialogDemo />
          </div>

          {/* Right Links */}
          {/* <div className="hidden md:flex items-center gap-3 text-sm flex-shrink-0">
            <a href="#" className="text-accent hover:underline">
              Sign In
            </a>
            <a href="#" className="text-accent hover:underline">
              Sign Up
            </a>
          </div> */}
        </div>
      </div>
    </header>
  )
}
