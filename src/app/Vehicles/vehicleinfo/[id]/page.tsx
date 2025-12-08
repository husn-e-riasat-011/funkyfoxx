"use client";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import axios from "axios";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
interface Vehicle {
  vehicleName: String;
  make: String;
  model: String;
  year: String;
  numberPlate: String;
  color: String;
  fuelType: String;
  doors: String;
  seats: String;
  price: String;
  _id: string;
}

const Page = () => {
  const { id } = useParams();
  const [vehicle, setvehicle] = useState<Vehicle>({
    vehicleName: "",
    make: "",
    model: "",
    year: "",
    numberPlate: "",
    color: "",
    fuelType: "",
    doors: "",
    seats: "",
    price: "",
    _id: "",
  });
  const getsinglevehicle = async () => {
    try {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_BACKEND_URI}/api/v1/singleVehicle/${id}`,
      );
      console.log(response.data.vehicle);
      setvehicle(response.data.vehicle);
    } catch (error) {
      toast.error("can't get the driver");
    }
  };
  useEffect(() => {
    getsinglevehicle();
  }, []);
  return (
    <DefaultLayout>
      <h1>{vehicle.numberPlate}</h1>
      <h2>{vehicle.color}</h2>
      <h3>{vehicle.price}</h3>
    </DefaultLayout>
  );
};
export default Page;
