import Image from "next/image";
'use client'

//@/components/ShowBookList
import ShowBookList from "@/app/components/ShowBookList"

import UpdateBookInfo from "@/app/components/UpdateBookInfo";
import ShowBookDetails from "@/app/components/ShowBookDetails";

//app\components\UpdateBookInfo.tsx

export default function Home() {
  return (
    <main>
      <ShowBookList />
      {/* <UpdateBookInfo />
      <ShowBookDetails /> */}
    </main>
  );
}

