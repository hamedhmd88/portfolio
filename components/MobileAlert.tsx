'use client'

import { useState } from 'react'
import { AlertDialog, AlertDialogContent, AlertDialogHeader, AlertDialogTitle, AlertDialogFooter } from '@/components/ui/alert-dialog'
import { Button } from '@/components/ui/button'
import { X } from 'lucide-react'
import { useIsMobile } from '@/hooks/use-mobile'

export default function MobileAlert() {
  const isMobile = useIsMobile()
  const [isOpen, setIsOpen] = useState(isMobile)

  if (!isMobile) return null

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 z-40 backdrop-blur-md bg-black/50" />  // overlay برای blur و تیره کردن background
      )}
      <AlertDialog open={isOpen} onOpenChange={setIsOpen}>
        <AlertDialogContent className="max-w-sm z-50 relative">  
          <AlertDialogHeader className="relative">
            <AlertDialogTitle className="text-center">
              For a better experience, please use larger devices.
            </AlertDialogTitle>
            <Button
              variant="ghost"
              className="absolute top-0 right-0 p-1"
              onClick={() => setIsOpen(false)}
            >
              <X className="h-4 w-4" />
            </Button>
          </AlertDialogHeader>
          <AlertDialogFooter className="justify-center">
            <Button onClick={() => setIsOpen(false)}>Continue Anyway</Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  )
}