"use client";
import React, { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import axios from "axios";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import { toast } from "react-toastify";
import Filebase from "react-file-base64";

interface Driver {
  licenseNumber: string;
  images: string;
  driverName: string;
  Email: string;
  phoneNumber: string;
  address: string;
  dateOfBirth: string;
  hireDate: string;
}

const Page = () => {
  const { id } = useParams();
  const [pic, setPic] = useState<string>("");
  const [driver, setDriver] = useState<Driver>({
    licenseNumber: "",
    images: "",
    driverName: "",
    Email: "",
    phoneNumber: "",
    address: "",
    dateOfBirth: "",
    hireDate: "",
  });
  const router = useRouter();
  const changeHandler = (e: any) => {
    const { name, value } = e.target;
    setDriver((prevDriver) => ({ ...prevDriver, [name]: value }));
  };
  const submitHandler = async (e: any) => {
    e.preventDefault();
    const updatedriver = {
      ...driver,
      images: pic,
    };
    try {
      const response = await axios.patch(
        `${process.env.NEXT_PUBLIC_BACKEND_URI}/api/v1//updateDriver/${id}`,
        updatedriver,
      );

      if (response.status === 200) {
        toast.success("Driver updated Successfully");
        router.push("/driver");
      }
    } catch (error) {
      toast.error("Error creating driver");
      console.error(error);
    } finally {
      setDriver({
        licenseNumber: "",
        images: "",
        driverName: "",
        Email: "",
        phoneNumber: "",
        address: "",
        dateOfBirth: "",
        hireDate: "",
      });
      setPic(""); // Clear the images preview
    }
  };
  const fetchuser = async () => {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_BACKEND_URI}/api/v1//getSingleDriver/${id}`,
    );
    console.log(response.data.driver);
    setDriver(response.data.driver);
    setPic(response.data.driver.images);
  };

  useEffect(() => {
    if (id) {
      fetchuser();
    }
  }, []);

  return (
    <DefaultLayout>
      <div className="mx-auto max-w-270">
        <Breadcrumb pageName="Settings" />
        <form onSubmit={submitHandler}>
          <div className="grid grid-cols-5 gap-8">
            <div className="col-span-5 xl:col-span-3">
              <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
                <div className="border-b border-stroke px-7 py-4 dark:border-strokedark">
                  <h3 className="font-medium text-black dark:text-white">
                    Driver Information
                  </h3>
                </div>
                <div className="p-7">
                  <div className="mb-5.5 flex flex-col gap-5.5 sm:flex-row">
                    <div className="w-full sm:w-1/2">
                      <label
                        className="mb-3 block text-sm font-medium text-black dark:text-white"
                        htmlFor="driverName"
                      >
                        Driver Name
                      </label>
                      <div className="relative">
                        <input
                          className="w-full rounded border border-stroke bg-gray py-3 pl-11.5 pr-4.5 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
                          type="text"
                          onChange={changeHandler}
                          value={driver.driverName}
                          name="driverName"
                          id="driverName"
                          placeholder="Devid Jhon"
                        />
                      </div>
                    </div>

                    <div className="w-full sm:w-1/2">
                      <label
                        className="mb-3 block text-sm font-medium text-black dark:text-white"
                        htmlFor="phoneNumber"
                      >
                        Phone Number
                      </label>
                      <input
                        className="w-full rounded border border-stroke bg-gray px-4.5 py-3 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
                        type="text"
                        onChange={changeHandler}
                        value={driver.phoneNumber}
                        name="phoneNumber"
                        id="phoneNumber"
                        placeholder="+990 3343 7865"
                      />
                    </div>
                  </div>

                  <div className="mb-5.5 flex flex-col gap-5.5 sm:flex-row">
                    <div className="w-full sm:w-1/2">
                      <label
                        className="mb-3 block text-sm font-medium text-black dark:text-white"
                        htmlFor="hireDate"
                      >
                        Hire Date
                      </label>
                      <div className="relative">
                        <input
                          className="w-full rounded border border-stroke bg-gray py-3 pl-11.5 pr-4.5 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
                          type="date"
                          onChange={changeHandler}
                          value={driver.hireDate}
                          name="hireDate"
                          id="hireDate"
                        />
                      </div>
                    </div>

                    <div className="w-full sm:w-1/2">
                      <label
                        className="mb-3 block text-sm font-medium text-black dark:text-white"
                        htmlFor="dateOfBirth"
                      >
                        Date of Birth
                      </label>
                      <input
                        className="w-full rounded border border-stroke bg-gray px-4.5 py-3 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
                        type="date"
                        onChange={changeHandler}
                        value={driver.dateOfBirth}
                        name="dateOfBirth"
                        id="dateOfBirth"
                      />
                    </div>
                  </div>

                  <div className="mb-5.5">
                    <label
                      className="mb-3 block text-sm font-medium text-black dark:text-white"
                      htmlFor="Email"
                    >
                      Email Address
                    </label>
                    <div className="relative">
                      <input
                        className="w-full rounded border border-stroke bg-gray py-3 pl-11.5 pr-4.5 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
                        type="email"
                        onChange={changeHandler}
                        value={driver.Email}
                        name="Email"
                        id="Email"
                        placeholder="devidjond45@gmail.com"
                      />
                    </div>
                  </div>

                  <div className="mb-5.5">
                    <label
                      className="mb-3 block text-sm font-medium text-black dark:text-white"
                      htmlFor="address"
                    >
                      Address
                    </label>
                    <input
                      className="w-full rounded border border-stroke bg-gray px-4.5 py-3 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
                      type="text"
                      onChange={changeHandler}
                      value={driver.address}
                      name="address"
                      id="address"
                      placeholder="Enter your address"
                    />
                  </div>

                  <div className="flex justify-end gap-4.5">
                    <button
                      className="flex justify-center rounded border border-stroke px-6 py-2 font-medium text-black hover:shadow-1 dark:border-strokedark dark:text-white"
                      type="button"
                      onClick={() => router.push("/driver")}
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
            <div className="col-span-5 xl:col-span-2">
              <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
                <div className="border-b border-stroke px-7 py-4 dark:border-strokedark">
                  <h3 className="font-medium text-black dark:text-white">
                    Are you Waana change your image
                  </h3>
                </div>
                <div className="p-7">
                  <Filebase
                    type="images"
                    multiple={false}
                    onDone={({ base64 }: { base64: string }) => setPic(base64)}
                  />
                  {pic && (
                    <img
                      src={pic}
                      alt="Driver images"
                      className="mt-4 h-auto w-full object-cover"
                    />
                  )}
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </DefaultLayout>
  );
};

export default Page;
