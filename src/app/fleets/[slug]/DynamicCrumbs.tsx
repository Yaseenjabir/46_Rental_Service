import React from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

type Crumb = {
  name: string;
  link: string;
};

// Define the type for the data prop that will be passed to DynamicCrumbs
type DynamicCrumbsProps = {
  data: {
    firstCrumb: Crumb;
    secondCrumb: Crumb;
  };
};

export default function DynamicCrumbs({ data }: DynamicCrumbsProps) {
  return (
    <div className="w-full py-12 bg-headings flex flex-col items-center justify-center gap-2">
      <h1 className="text-white font-semibold text-2xl md:text-3xl lg:text-4xl text-center px-5">
        {data.secondCrumb.name}
      </h1>
      <Breadcrumb>
        <BreadcrumbList className="text-white flex items-center justify-center">
          <BreadcrumbItem>
            <BreadcrumbLink
              className="hover:text-white hover:underline transition-all ease-in-out duration-300"
              href="/"
            >
              Home
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink
              className="hover:text-white hover:underline transition-all ease-in-out duration-300"
              href={data.firstCrumb.link}
            >
              {data.firstCrumb.name}
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage className="text-white">
              {data.secondCrumb.name}
            </BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
    </div>
  );
}
