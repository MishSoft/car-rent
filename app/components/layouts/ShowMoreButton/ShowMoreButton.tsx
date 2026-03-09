import { Button } from '@/components/ui/button'
import React from 'react'

interface ShowMoreButtonProps {
  setIncrementVisibility: () => void
}

export default function ShowMoreButton({ setIncrementVisibility }: ShowMoreButtonProps) {
  return (
    <Button onClick={setIncrementVisibility} className='bg-(--logo-color) mx-auto cursor-pointer rounded-lg'>
      Show More car
    </Button>
  )
}
