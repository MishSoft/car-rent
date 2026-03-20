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
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function AdminPage() {
  return (
    <main className="container mx-auto p-6">
      {/* Header */}
      <header className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800">Admin Panel</h1>
        <Button variant="outline" className="text-blue-500">
          Logout
        </Button>
      </header>

      {/* Form Section */}
      <section className="w-full max-w-3xl mx-auto">
        <Card className="shadow-lg border border-gray-200">
          <CardHeader>
            <CardTitle>Add New Car</CardTitle>
          </CardHeader>
          <CardContent>
            <form className="space-y-4">
              <Input type="text" placeholder="Car Name" className="w-full" />
              <Input type="number" placeholder="Price per day ($)" className="w-full" />
              <Input type="text" placeholder="Fuel Capacity (L)" className="w-full" />
              <Input type="file" placeholder="Upload Image" className="w-full" />
              <Textarea placeholder="Description" className="w-full" rows={4} />

              <div className="flex flex-wrap gap-4 mt-2">
                <Select >
                  <SelectTrigger>
                    <SelectValue placeholder="Car Type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Car Type</SelectLabel>
                      <SelectItem value="sport">Sport</SelectItem>
                      <SelectItem value="suv">SUV</SelectItem>
                      <SelectItem value="hatchback">Hatchback</SelectItem>
                      <SelectItem value="mvp">MVP</SelectItem>
                      <SelectItem value="sedan">Sedan</SelectItem>
                      <SelectItem value="coupe">Coupe</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>

                <Select >
                  <SelectTrigger>
                    <SelectValue placeholder="Transmission" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Transmission</SelectLabel>
                      <SelectItem value="manual">Manual</SelectItem>
                      <SelectItem value="auto">Auto</SelectItem>
                      <SelectItem value="electric">Electric</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>

                <Select >
                  <SelectTrigger>
                    <SelectValue placeholder="Capacity" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Capacity</SelectLabel>
                      <SelectItem value="2">2 Person</SelectItem>
                      <SelectItem value="4">4 Person</SelectItem>
                      <SelectItem value="6">6 Person</SelectItem>
                      <SelectItem value="8">8 Person</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>

              <Button type="submit" className="mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white">
                Add Car
              </Button>
            </form>
          </CardContent>
        </Card>
      </section>
    </main>
  );
}
