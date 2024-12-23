'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export function Cart() {
  const [items, setItems] = useState([
    { id: 1, title: "Khushu o Khudhu", price: 9.99 },
    { id: 2, title: "Build Relation Better with Allah", price: 12.99 },
  ])

  const removeItem = (id: number) => {
    setItems(items.filter(item => item.id !== id))
  }

  const total = items.reduce((sum, item) => sum + item.price, 0)

  return (
    <Card>
      <CardHeader>
        <CardTitle>Your Cart</CardTitle>
      </CardHeader>
      <CardContent>
        {items.length === 0 ? (
          <p>Your cart is empty</p>
        ) : (
          <ul className="space-y-2">
            {items.map(item => (
              <li key={item.id} className="flex justify-between items-center">
                <span>{item.title}</span>
                <div>
                  <span className="mr-2">${item.price.toFixed(2)}</span>
                  <Button variant="ghost" size="sm" onClick={() => removeItem(item.id)}>Remove</Button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </CardContent>
      {items.length > 0 && (
        <CardFooter className="flex justify-between">
          <span className="font-bold">Total: ${total.toFixed(2)}</span>
          <Button>Checkout</Button>
        </CardFooter>
      )}
    </Card>
  )
}

