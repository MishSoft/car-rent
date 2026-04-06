"use client"
import { Checkbox } from '@/components/ui/checkbox'
import { Slider } from '@/components/ui/slider'
import { useEffect, useState } from 'react'
import SidebarLoading from './loading'

// initial data
const carItems = [
  { category: "Sport", quantity: 10, isCheck: false },
  { category: "Suv", quantity: 12, isCheck: false },
  { category: "MPV", quantity: 16, isCheck: false },
]

const capacityData = [
  { category: "2 Person", quantity: 10, isCheck: false },
  { category: "4 Person", quantity: 14, isCheck: false },
  { category: "6 Person", quantity: 12, isCheck: false },
  { category: "8 Person", quantity: 16, isCheck: false },
]

// interface
interface CarProps {
  category: string
  quantity: number
  isCheck: boolean
}

// generic checkbox component for DRY code
interface FilterCheckboxProps {
  item: CarProps
  onChange: (category: string) => void
}

const FilterCheckbox = ({ item, onChange }: FilterCheckboxProps) => (
  <div className="flex items-center gap-3">
    <Checkbox
      checked={item.isCheck}
      onCheckedChange={() => onChange(item.category)}
    />
    <span className="font-semibold text-(--icon-gray-color)">{item.category}</span>
    <span className="text-(--card-gray-color)">({item.quantity})</span>
  </div>
)

export default function SideBar() {
  const [carData, setCarData] = useState<CarProps[]>(carItems)
  const [capacity, setCapacity] = useState<CarProps[]>(capacityData)
  const [price, setPrice] = useState<number>(100) // max price default
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const handleCheck = (category: string, type: "car" | "capacity") => {
    if (type === "car") {
      setCarData(prev =>
        prev.map(item =>
          item.category === category
            ? { ...item, isCheck: !item.isCheck }
            : item
        )
      )
    } else {
      setCapacity(prev =>
        prev.map(item =>
          item.category === category
            ? { ...item, isCheck: !item.isCheck }
            : item
        )
      )
    }
  }

  if (!mounted) return <SidebarLoading />

  return (
    <aside className=" hidden lg:flex
  lg:max-w-[280px]
  xl:max-w-[320px]
  w-full
  flex-col gap-8
  px-6 py-10
  bg-(--card-white-color)">
      <div className="flex flex-col gap-7">
        <span className="text-xs uppercase tracking-widest font-semibold text-(--card-gray-color)">
          type
        </span>
        <div className="flex flex-col gap-3">
          {carData.map(item => (
            <FilterCheckbox
              key={item.category}
              item={item}
              onChange={category => handleCheck(category, "car")}
            />
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-7">
        <span className="text-xs uppercase tracking-widest font-semibold text-(--card-gray-color)">
          capacity
        </span>
        <div className="flex flex-col gap-3">
          {capacity.map(item => (
            <FilterCheckbox
              key={item.category}
              item={item}
              onChange={category => handleCheck(category, "capacity")}
            />
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-7">
        <span className="text-xs uppercase tracking-widest font-semibold text-(--card-gray-color)">
          price
        </span>
        <div className="flex flex-col gap-3">
          <Slider
            max={100}
            step={1}
            value={[price]}
            onValueChange={value => setPrice(value[0])}
          />
          <span className="font-semibold text-(--icon-gray-color)">
            Max. ${price}.00
          </span>
        </div>
      </div>
    </aside>

  )
}
