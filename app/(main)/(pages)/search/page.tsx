import { Checkbox } from '@/components/ui/checkbox'
import SideBar from '../../components/layout/sidebar/SideBar'
import CarItem from '@/app/components/ui/carItem/CarItem'
import cars from "@/data/CardData.json"




export default function page() {
  return (
    <main className='min-h-screen flex justify-between'>
      <SideBar/>
      <div className='w-full grid my-10 grid-cols-3 gap-5 px-15'>
        {
          cars.cars.map(item => (
            <CarItem key={item.name} car_name={item.name} car_equipment={item.equipment} is_favorite={false} car_fuel={item.fuelCapacity} car_gearbox={item.transmission} car_passenger_quantity={item.passengerCapacity} car_rent_price={item.pricePerDay} car_image={item.imageUrl} />
          ))
        }
      </div>
    </main>
  )
}
