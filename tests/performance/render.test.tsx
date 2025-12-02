import { describe, it, expect } from 'vitest'
import { render } from '@testing-library/react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'

describe('Performance', () => {
  it('renders 100 buttons quickly', () => {
    const start = performance.now()
    
    const buttons = Array.from({ length: 100 }, (_, i) => (
      <Button key={i}>Button {i}</Button>
    ))
    
    render(<div>{buttons}</div>)
    
    const end = performance.now()
    const duration = end - start
    
    expect(duration).toBeLessThan(1000)
  })

  it('renders 50 cards quickly', () => {
    const start = performance.now()
    
    const cards = Array.from({ length: 50 }, (_, i) => (
      <Card key={i}>
        <div>Card {i}</div>
      </Card>
    ))
    
    render(<div>{cards}</div>)
    
    const end = performance.now()
    const duration = end - start
    
    expect(duration).toBeLessThan(500)
  })
})
