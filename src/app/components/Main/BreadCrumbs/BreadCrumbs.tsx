import React from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

export default function BreadCrumbs({
  data,
}: {
  data: { title: string; crumb: string };
}) {
  return (
    <div className="w-full py-12 bg-headings flex flex-col items-center justify-center gap-2">
      <h1 className="text-white font-semibold text-2xl md:text-3xl lg:text-4xl">
        {data.title}
      </h1>
      <Breadcrumb>
        <BreadcrumbList className="text-white">
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
            <BreadcrumbPage className="text-white">{data.crumb}</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
    </div>
  );
}
