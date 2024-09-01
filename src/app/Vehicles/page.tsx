import DefaultLayout from "@/components/Layouts/DefaultLayout";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <DefaultLayout>
      <div className="my-6 w-full rounded-sm border border-stroke bg-white pb-2.5 pt-6 shadow-default dark:border-strokedark dark:bg-boxdark  ">
        <Link href={"./driver/createdriver"}>
          <button
            type="button"
            className="mx-2 mb-2 rounded-lg border border-green-700 px-5 py-2.5 text-center text-sm font-medium text-green-700 hover:bg-green-800 hover:text-white focus:outline-none focus:ring-4 focus:ring-green-300 dark:border-green-500 dark:text-green-500 dark:hover:bg-green-600 dark:hover:text-white dark:focus:ring-green-800"
          >
            Create
          </button>
        </Link>
        <button
          disabled
          type="button"
          className="border-black-400 text-gray-400 dark:border-white-300 dark:text-white-300 mx-1    mb-2 rounded-lg border px-5 py-2.5 text-center text-sm font-medium "
        >
          Delete
        </button>
      </div>
    </DefaultLayout>
  );
};

export default page;
