import IconButton from "@/app/components/ui/icon-button/icon-button"
import { Button } from "@/components/ui/button"
import cars from "@/data/CardData.json"
import { CiHeart } from "react-icons/ci";

import { TiStarOutline } from "react-icons/ti";
import { TiStarFullOutline } from "react-icons/ti";


interface PageProps {
  params: {
    id:number
  }
}

export default function page({params}: PageProps) {
  const { id } = params
  const car = cars.cars.find(item => item.id === id)

  if(!car) {
    return <h2>Car not found</h2>
  }

  return (
    <main className='w-full flex flex-col py-6 sm:py-8 lg:py-10 gap-5 px-4 sm:px-6 lg:px-10'>
      <div>
        <div className="flex gap-[32px]">
          {/* ეს არის მანქანის ფოტოებისთვის. */}
          <div className="max-w-[492px] flex flex-col gap-2 w-full">
            <div className="w-full bg-blue-400 flex flex-col p-[24px] gap-5 rounded-xl">
              <h2 className="text-2xl max-w-xs font-semibold text-white">Sports car with the best design and acceleration</h2>
              <p className="text-sm max-w-3xs text-gray-600">Safety and comfort while driving a
                futuristic and elegant sports car</p>
              <img className="object-cover mx-auto" src={car.imageUrl} alt="" />
            </div>
            {/* ეს არის მანქანის დამატებითი ფოტოებისთვის. */}
            <div className="flex items-center justify-between">
              <img className="w-32" src={car.imageUrl} alt="" />
              <img className="w-32" src={car.imageUrl} alt="" />
              <img className="w-32" src={car.imageUrl} alt="" />
            </div>
          </div>
          {/* ეს არის მანქანის ფოტოს გვერდითა ნაწილი სადაც არის აღწერა და ფასი. */}
          <div className="max-w-[492px] flex flex-col gap-5 p-[24px] w-full rounded-xl bg-(--card-white-color)">
            {/* ეს არის მანქანის ინფორმაციის ჰედერი */}
            <div className="flex justify-between items-start gap-10">
              <div className="flex flex-col gap-1">
                <h2 className="text-2xl font-semibold">{car.name}</h2>
                <div className="flex flex-1  items-center gap-3">
                  {/* აქ იქნება ვარკსვლავები შეფასებისთვის. */}
                  {/* ******** */}
                  <div className="flex items-center text-yellow-500">
                    <TiStarFullOutline />
                    <TiStarFullOutline />
                    <TiStarFullOutline />
                    <TiStarOutline className="text-gray-400"/>
                    <TiStarOutline className="text-gray-400"/>
                  </div>
                  {/* ეს არის შეფასების განხილვის რაოდენობა */}
                  <span className="text-sm text-gray-400">440+ Reviewers</span>
                </div>
              </div>
              <IconButton icon={<CiHeart />} />
            </div>
            {/* ეს არის მანქანის მოდელის აღწერა. */}
            <p className="text-gray-400">
              NISMO has become the embodiment of Nissan's outstanding performance, inspired by the most unforgiving proving ground, the "race track".
            </p>
            {/* ეს არის მანქანის აღწერა. */}
            <div className="grid grid-cols-2 w-full gap-2">
              <h3 className="text-gray-500 font-semibold flex justify-between pr-2">Type Car: <span className="pl-2 text-gray-700 font-semibold">{car.equipment}</span></h3>
              <h3 className="text-gray-500 font-semibold flex justify-between pr-2">Capacity: <span className="pl-2 text-gray-700 font-semibold">{car.passengerCapacity}</span></h3>
              <h3 className="text-gray-500 font-semibold flex justify-between pr-2">Streering: <span className="pl-2 text-gray-700 font-semibold">{car.transmission}</span></h3>
              <h3 className="text-gray-500 font-semibold flex justify-between pr-2">Gasoline: <span className="pl-2 text-gray-700 font-semibold">{car.fuelCapacity}</span></h3>
            </div>

            {/* ეს არის ფასის და ქირაობის ღილაკისთვის.  */}
            <div className="flex  items-center justify-between">
              {/* ფასისთვის */}
              <div className="flex flex-col">
                <h4 className="text-xl font-semibold">
                  ${car.pricePerDay}/<span className="text-sm text-gray-500">days</span>
                </h4>
                <span className="text-sm text-gray-400">${car.oldPrice}</span>
              </div>
              {/* ქირაობის ღილაკი */}
              <Button className="bg-blue-400 px-[32px] py-[16px]">
                Rent Now
              </Button>
            </div>
          </div>
        </div>
        {/* ეს სექცია არის Review სთვის და კომენტარებისთვის.  */}
        <div></div>
      </div>


      {/* ეს არის Recent & recomendation მანქანებისთვის. */}
      <div>
        <div></div>
        <div></div>
      </div>
    </main>
  )
}
