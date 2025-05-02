import React from "react";
import Image from "next/image";
export default function About() {
  return (
    <div>
      <div className="relative">
        <Image
          src="/about.jpg"
          className="object-cover brightness-50 w-full h-[250px]"
          width={500}
          height={200}
          quality={75}
          loading="lazy"
          alt="About Picture"
        />
        <h1 className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 font-main text-primary text-2xl font-bold capitalize">
          {" "}
          About US
        </h1>
      </div>
      <div className="lg:px-20 max-w-6xl w-full mx-auto px-4 py-6 justify-start md:px-8">
        <div className="grid gap-4  md:grid-cols-2 md:grid-rows-3 lg:grid-cols-5">
          <section className="lg:col-span-3">
            <h2 className="font-main text-xl font-bold">목표</h2>
            <p className="my-2 font-MyFont">
            전 세계 독자들에게 다양하고 엄선된 도서를 제공하여 
            독서와 학습에 대한 열정을 불어넣는 것입니다. 
            저희는 지식의 힘을 북돋우는 데 전념하며, 책이 영감, 교육, 
            그리고 즐거움을 선사하는 혁신적인 힘을 믿습니다.
            </p>
          </section>
          <section className="md:row-span-2 md:row-start-2 lg:col-span-3">
            <h2 className="font-main text-xl font-bold">소개</h2>
            <p className="my-2 font-MyFont">
             저희는 단순한 온라인 서점이 아닙니다. 
             글에 대한 열정을 가진 활기찬 문학 공동체입니다. 
             책에는 영감, 교육, 그리고 삶을 변화시키는 힘이 있다고 믿습니다.
            </p>
            <p className="my-2 font-MyFont">
            저희는 장르와 관심사를 아우르는 다양한 도서를 엄선하여 
            누구나 즐길 수 있도록 하는 데 자부심을 느낍니다. 
            노련한 독서 애호가든, 이제 막 독서 여정을 시작하려는 분이든, 
            저희는 여러분의 든든한 동반자가 되어 드리겠습니다. 
            독서의 즐거움과 책이 우리 삶에 가져다주는 무한한 가능성을 함께 기념해 보세요. 
            문학이 꽃피고 독자들이 하나 되는 My-Bookstore에 오신 것을 환영합니다.
            </p>
          </section>
          <div className="mt-6  md:col-start-2 md:row-span-3 md:row-start-1 lg:col-span-2 lg:col-start-4">
            <Image
              src="/about2.jpg"
              className="object-cover border-8 w-full border-textgray md:max-h-96 md:max-w-[24rem]"
              width={500}
              height={300}
              quality={75}
              loading="lazy"
              alt="About Picture"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
