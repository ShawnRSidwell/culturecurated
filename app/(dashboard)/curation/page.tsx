import Image from "next/image";
import testImage from "@/public/test-images/7f58450a663c6c99a07d97fe1c61344ej.webp";
import Filter from "@/app/ui/curated/filter";

//Add view count and author with profile picture at bottom with topics as well.
export default function Page() {
  return (
    <div className="p-5 flex flex-col items-center justify-center">
      <div className="flex flex-col items-center justify-center ">
        <p className="text-3xl font-bold tracking-wide p-3 capitalize leading-2">
          Best business movies of 2024
        </p>
        <Image
          className="w-[600px] h-[350px] rounded-lg hover:rounded-none transition-all duration-300 "
          src={testImage}
          width={500}
          height={500}
          alt=""
        />
        <p className="w-1/2 my-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim nisi
          suscipit beatae consequatur, aliquid autem veniam at nesciunt, eveniet
          distinctio voluptas in culpa consectetur similique et amet! Sint,
          illum maiores? Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Enim nisi suscipit beatae consequatur, aliquid autem veniam at
          nesciunt, eveniet distinctio voluptas in culpa consectetur similique
          et amet! Sint, illum maiores?
        </p>
      </div>
      <div className="mt-5">
        <Filter />
      </div>
      <div className="p-5">
        <p className="font-bold my-3 text-lg border-b-2">
          Best Wall Street Movies
        </p>
        <div>
          <ol className="flex flex-wrap">
            {[...Array(10)].map((_, index) => (
              <li key={index} className="max-h-32 w-1/3 my-3">
                <p className="font-medium">
                  1. Wolf on WallStreet towers above all
                </p>
                <div className="grid grid-cols-4">
                  <div className="col-span-1 mt-2">
                    <Image
                      className="m-auto rounded-lg transition-all duration-300 z-1"
                      src={testImage}
                      alt=""
                    />
                  </div>
                  <div className="col-span-3 px-2 flex flex-col justify-around">
                    <p className="text-xs">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Enim nisi suscipit beatae consequatur, aliquid autem
                      veniam at nesciunt, eveniet distinctio voluptas in culpa
                      consectetur similique et amet! Sint, illum maiores?
                    </p>
                    <a className="text-blue-500 underline text-xs " href="">
                      www.testing.com
                    </a>
                  </div>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
}
