"use client";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import { useState, ChangeEvent, FormEvent } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { toast } from "react-toastify";

interface Vehicle {
  vehicleName: string;
  make: string;
  model: string;
  year: string;
  numberPlate: string;
  color: string;
  fuelType: string;
  doors: string;
  seats: string;
  price: string;
  _id: string;
}

const CreateVehicle = () => {
  const defaultVehicle = {
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
  };

  const [vehicle, setVehicle] = useState<Vehicle>(defaultVehicle);

  const router = useRouter();

  const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setVehicle((prevVehicle) => ({ ...prevVehicle, [name]: value }));
  };

  const submitHandler = async (e: FormEvent) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_BACKEND_URI}/api/v1/createVehicle`,
        vehicle,
      );
      console.log(response);
      if (response.status === 200) {
        toast.success("Vehicle Created Successfully");
        router.push("/Vehicles");
      }
    } catch (error) {
      toast.error("Error creating vehicle");
      console.error(error);
    } finally {
      setVehicle(defaultVehicle);
    }
  };

  return (
    <DefaultLayout>
      <div className="mx-auto max-w-270">
        <Breadcrumb pageName="Create Vehicle" />
        <form onSubmit={submitHandler}>
          <div className="grid grid-cols-5 ">
            <div className="col-span-5 xl:col-span-5">
              <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
                <div className="border-b border-stroke px-7 py-4 dark:border-strokedark">
                  <h3 className="font-medium text-black dark:text-white">
                    Enter Vehicle Information
                  </h3>
                </div>
                <div className="p-6">
                  <div className="mb-5.5 flex flex-col gap-5 sm:flex-row">
                    <div className="w-full sm:w-1/4">
                      <label
                        className="mb-3 block text-sm font-medium text-black dark:text-white"
                        htmlFor="vehicleName"
                      >
                        VehicleName
                      </label>
                      <input
                        className="w-full rounded border border-stroke bg-gray px-4.5 py-3 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
                        type="text"
                        onChange={changeHandler}
                        value={vehicle.vehicleName}
                        name="vehicleName"
                        id="mavehicleNameke"
                        placeholder="Enter vehicleName"
                      />
                    </div>

                    <div className="w-full sm:w-1/4">
                      <label
                        className="mb-3 block text-sm font-medium text-black dark:text-white"
                        htmlFor="make"
                      >
                        Make
                      </label>
                      <input
                        className="w-full rounded border border-stroke bg-gray px-4.5 py-3 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
                        type="text"
                        onChange={changeHandler}
                        value={vehicle.make}
                        name="make"
                        id="make"
                        placeholder="Enter make"
                      />
                    </div>
                    <div className="w-full sm:w-1/4">
                      <label
                        className="mb-3 block text-sm font-medium text-black dark:text-white"
                        htmlFor="model"
                      >
                        Model
                      </label>
                      <input
                        className="w-full rounded border border-stroke bg-gray px-4.5 py-3 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
                        type="text"
                        onChange={changeHandler}
                        value={vehicle.model}
                        name="model"
                        id="model"
                        placeholder="Enter model"
                      />
                    </div>
                    <div className="w-full sm:w-1/4">
                      <label
                        className="mb-3 block text-sm font-medium text-black dark:text-white"
                        htmlFor="year"
                      >
                        year
                      </label>
                      <input
                        className="w-full rounded border border-stroke bg-gray px-4.5 py-3 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
                        type="text"
                        onChange={changeHandler}
                        value={vehicle.year}
                        name="year"
                        id="year"
                        placeholder="Enter year"
                      />
                    </div>
                  </div>
                  <div className="mb-5.5 flex flex-col gap-5 sm:flex-row">
                    <div className="w-full sm:w-1/4">
                      <label
                        className="mb-3 block text-sm font-medium text-black dark:text-white"
                        htmlFor="NumberPlate"
                      >
                        NumberPlate
                      </label>
                      <input
                        className="w-full rounded border border-stroke bg-gray px-4.5 py-3 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
                        type="text"
                        onChange={changeHandler}
                        value={vehicle.numberPlate}
                        name="numberPlate"
                        id="numberPlate"
                        placeholder="Enter numberPlate"
                      />
                    </div>

                    <div className="w-full sm:w-1/4">
                      <label
                        className="mb-3 block text-sm font-medium text-black dark:text-white"
                        htmlFor="color"
                      >
                        Color
                      </label>
                      <input
                        className="w-full rounded border border-stroke bg-gray px-4.5 py-3 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
                        type="text"
                        onChange={changeHandler}
                        value={vehicle.color}
                        name="color"
                        id="color"
                        placeholder="Enter color"
                      />
                    </div>
                    <div className="w-full sm:w-1/4">
                      <label
                        className="mb-3 block text-sm font-medium text-black dark:text-white"
                        htmlFor="fuelType"
                      >
                        FuelType
                      </label>
                      <input
                        className="w-full rounded border border-stroke bg-gray px-4.5 py-3 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
                        type="text"
                        onChange={changeHandler}
                        value={vehicle.fuelType}
                        name="fuelType"
                        id="fuelType"
                        placeholder="Enter fuelType"
                      />
                    </div>
                    <div className="w-full sm:w-1/4">
                      <label
                        className="mb-3 block text-sm font-medium text-black dark:text-white"
                        htmlFor="doors"
                      >
                        Doors
                      </label>
                      <input
                        className="w-full rounded border border-stroke bg-gray px-4.5 py-3 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
                        type="text"
                        onChange={changeHandler}
                        value={vehicle.doors}
                        name="doors"
                        id="doors"
                        placeholder="Enter doors"
                      />
                    </div>
                  </div>
                  <div className="mb-5.5 flex flex-col gap-5.5 sm:flex-row">
                    <div className="w-full sm:w-1/2">
                      <label
                        className="mb-3 block text-sm font-medium text-black dark:text-white"
                        htmlFor="seats"
                      >
                        Seats
                      </label>
                      <input
                        className="w-full rounded border border-stroke bg-gray px-4.5 py-3 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
                        type="text"
                        onChange={changeHandler}
                        value={vehicle.seats}
                        name="seats"
                        id="seats"
                        placeholder="Enter seats"
                      />
                    </div>

                    <div className="w-full sm:w-1/2">
                      <label
                        className="mb-3 block text-sm font-medium text-black dark:text-white"
                        htmlFor="price"
                      >
                        Price
                      </label>
                      <input
                        className="w-full rounded border border-stroke bg-gray px-4.5 py-3 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
                        type="text"
                        onChange={changeHandler}
                        value={vehicle.price}
                        name="price"
                        id="price"
                        placeholder="Enter price"
                      />
                    </div>
                  </div>

                  {/* Add more vehicle-specific fields similarly */}
                  <div className="flex justify-end gap-4.5">
                    <button
                      className="flex justify-center rounded border border-stroke px-6 py-2 font-medium text-black hover:shadow-1 dark:border-strokedark dark:text-white"
                      type="button"
                      onClick={() => router.push("/vehicles")}
                    >
                      Cancel
                    </button>
                    <button
                      className="flex justify-center rounded bg-primary px-6 py-2 font-medium text-gray hover:bg-opacity-90"
                      type="submit"
                    >
                      Submit
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </DefaultLayout>
  );
};

export default CreateVehicle;
