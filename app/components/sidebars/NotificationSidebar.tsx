"use client";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { IoNotifications } from "react-icons/io5";
import IconButton from "../ui/icon-button/icon-button";
import { icon } from "../layouts/Header/header.style";

const DUMMY_NOTIFICATIONS = [
  {
    id: 1,
    title: "New Car Available!",
    message: "A new Ferrari Sport car has been added to our fleet.",
    time: "2 mins ago",
    isNew: true,
  },
  {
    id: 2,
    title: "Rental Approved",
    message: "Your rental request for Model X has been approved.",
    time: "1 hour ago",
    isNew: false,
  },
  {
    id: 3,
    title: "Don't Miss Out!",
    message: "Get 20% off on SUV rentals this weekend.",
    time: "5 hours ago",
    isNew: false,
  },
];

export default function NotificationSidebar() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <IconButton className={icon} icon={<IoNotifications size={24} />} badge />
      </SheetTrigger>
      <SheetContent side="right" className="w-[300px] sm:w-[400px]">
        <SheetHeader>
          <SheetTitle>Notifications</SheetTitle>
        </SheetHeader>
        <div className="mt-8 space-y-4 overflow-y-auto max-h-[calc(100vh-100px)]">
          {DUMMY_NOTIFICATIONS.map((notif) => (
            <div
              key={notif.id}
              className={`p-4 border rounded-lg transition-colors ${
                notif.isNew ? "bg-blue-50 border-blue-100" : "hover:bg-gray-50"
              }`}
            >
              <div className="flex justify-between items-start mb-1">
                <h4 className={`text-sm font-semibold ${notif.isNew ? "text-blue-700" : "text-gray-900"}`}>
                  {notif.title}
                </h4>
                <span className="text-[10px] text-gray-400">{notif.time}</span>
              </div>
              <p className="text-xs text-gray-600 line-clamp-2">{notif.message}</p>
            </div>
          ))}
        </div>
      </SheetContent>
    </Sheet>
  );
}
