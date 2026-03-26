import { Button } from '@/components/ui/button'
import { TiStarFullOutline, TiStarOutline } from 'react-icons/ti'

export default function Review() {
  return (
    <article className=" flex flex-col gap-5 ">
      <div className="flex  items-center gap-3">
        <h2 className="text-xl font-semibold">Reviews</h2>
        <span className="text-sm py-2 text-white px-3 bg-blue-400 rounded-xl">13</span>
      </div>
      <div className=" flex flex-col gap-5">
        <div className="flex flex-col gap-5">
          <div className="flex  items-center justify-between">
            <div className="flex items-center gap-3">
              <img className="w-12 h-12 object-cover border-2 border-blue-300 rounded-full" src="https://images.ctfassets.net/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg?w=1200&h=992&fl=progressive&q=70&fm=jpg" alt="" />
              <div className="flex flex-col ">
                <h3 className="text-md font-semibold">Alex Stanton</h3>
                <span className="text-sm text-gray-400">CEO at Bukalapak</span>
              </div>
            </div>
            <div className="flex flex-col gap-1 items-end">
              <span className="text-sm text-gray-400">21 July 2022</span>
              <div className="flex items-center gap-2 text-yellow-500">
                <TiStarFullOutline />
                <TiStarFullOutline />
                <TiStarFullOutline />
                <TiStarFullOutline />
                <TiStarOutline className="text-gray-400" />
              </div>
            </div>


          </div>
          <div className="px-15 flex flex-col gap-3 items-start">
            <p className="text-md  line-clamp-2 text-gray-400">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. A iure rem dolore illum ab ducimus debitis deleniti natus dicta deserunt error reiciendis vitae accusamus blanditiis expedita eos, molestiae aspernatur? Nulla?
            </p>
            <Button className="text-blue-500 cursor-pointer">Read More</Button>
          </div>
        </div>
      </div>
    </article>
  )
}
