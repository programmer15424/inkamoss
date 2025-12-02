import { describe, it, expect } from 'vitest'
import { cn } from '@/lib/utils'

describe('Utils', () => {
  it('cn combines classes correctly', () => {
    expect(cn('class1', 'class2')).toBe('class1 class2')
  })

  it('cn handles conditional classes', () => {
    expect(cn('base', false && 'hidden', true && 'visible')).toBe('base visible')
  })

  it('cn merges tailwind classes', () => {
    const result = cn('px-2 py-1', 'px-4')
    expect(result).toContain('px-4')
  })
})
