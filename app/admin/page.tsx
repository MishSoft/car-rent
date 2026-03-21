"use client";

import { useState } from "react";
import { signOut } from "next-auth/react";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function AdminPage() {
  const [loading, setLoading] = useState(false);
  const [successMsg, setSuccessMsg] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setSuccessMsg("");
    setErrorMsg("");

    const form = e.currentTarget;
    const formData = new FormData(form);
    try {
      const res = await fetch("/api/cars", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Failed to add car");
      
      setSuccessMsg("Car added successfully!");
      form.reset();
    } catch (err: any) {
      setErrorMsg(err.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="container mx-auto p-6">
      <header className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800">Admin Panel</h1>
        <Button variant="outline" className="text-blue-500" onClick={() => signOut({ callbackUrl: "/login" })}>
          Logout
        </Button>
      </header>

      <section className="w-full max-w-3xl mx-auto">
        <Card className="shadow-lg border border-gray-200">
          <CardHeader>
            <CardTitle>Add New Car</CardTitle>
          </CardHeader>
          <CardContent>
            {successMsg && <div className="mb-4 p-3 bg-green-100 text-green-700 rounded-md">{successMsg}</div>}
            {errorMsg && <div className="mb-4 p-3 bg-red-100 text-red-700 rounded-md">{errorMsg}</div>}
            <form onSubmit={handleSubmit} className="space-y-4">
              <Input type="text" name="name" placeholder="Car Name" className="w-full" required />
              <Input type="number" name="pricePerDay" placeholder="Price per day ($)" className="w-full" step="0.01" required />
              <Input type="number" name="fuelCapacity" placeholder="Fuel Capacity (L)" className="w-full" required />
              <Input type="text" name="location" placeholder="Location (e.g. Tbilisi)" className="w-full" required />
              
              <Input type="file" name="image" className="w-full" required accept="image/*" />

              <div className="flex flex-wrap gap-4 mt-2">
                <Select name="type" required>
                  <SelectTrigger className="w-48">
                    <SelectValue placeholder="Car Type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Car Type</SelectLabel>
                      <SelectItem value="SPORT">Sport</SelectItem>
                      <SelectItem value="SUV">SUV</SelectItem>
                      <SelectItem value="HATCHBACK">Hatchback</SelectItem>
                      <SelectItem value="SEDAN">Sedan</SelectItem>
                      <SelectItem value="COUPE">Coupe</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>

                <Select name="transmission" required>
                   <SelectTrigger className="w-48">
                    <SelectValue placeholder="Transmission" />
                  </SelectTrigger>
                  <SelectContent>
                     <SelectGroup>
                      <SelectLabel>Transmission</SelectLabel>
                      <SelectItem value="Manual">Manual</SelectItem>
                      <SelectItem value="Auto">Auto</SelectItem>
                      <SelectItem value="Electric">Electric</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>

                <Select name="passengerLimit" required>
                  <SelectTrigger className="w-48">
                    <SelectValue placeholder="Capacity" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Capacity</SelectLabel>
                      <SelectItem value="2">2 Person</SelectItem>
                      <SelectItem value="4">4 Person</SelectItem>
                      <SelectItem value="6">6 Person</SelectItem>
                      <SelectItem value="7">7 Person</SelectItem>
                      <SelectItem value="8">8 Person</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>

              <Button type="submit" disabled={loading} className="mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white">
                {loading ? "Adding..." : "Add Car"}
              </Button>
            </form>
          </CardContent>
        </Card>
      </section>
    </main>
  );
}
