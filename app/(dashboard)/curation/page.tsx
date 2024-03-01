import Image from "next/image";
import testImage from "@/public/test-images/7f58450a663c6c99a07d97fe1c61344ej.webp";

export default function Page() {
  return (
    <div className="p-5">
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
          illum maiores?
        </p>{" "}
      </div>
      <div className="grid grid-cols-3 justify-items-center p-5 gap-5">
        <ol className="flex flex-col gap-3">
          {[...Array(50)].map((_, index) => (
            <li key={index} className="max-h-32 transition-all duration-300 ">
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
                    Enim nisi suscipit beatae consequatur, aliquid autem veniam
                    at nesciunt, eveniet distinctio voluptas in culpa
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
        <ol className="flex flex-col gap-3">
          {[...Array(50)].map((_, index) => (
            <li key={index} className="  max-h-32">
              <p className="font-medium">
                1. Wolf on WallStreet towers above all
              </p>
              <div className="grid grid-cols-4">
                <div className="col-span-1 mt-2">
                  <Image
                    className="m-auto rounded-lg hover:rounded-none transition-all duration-300 hover:scale-[500%] hover:translate-x-48 hover:border-2 hover:border-white"
                    src={testImage}
                    alt=""
                  />
                </div>
                <div className="col-span-3 px-2 flex flex-col justify-around">
                  <p className="text-xs">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Enim nisi suscipit beatae consequatur, aliquid autem veniam
                    at nesciunt, eveniet distinctio voluptas in culpa
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
        <ol className="flex flex-col gap-3">
          {[...Array(50)].map((_, index) => (
            <li key={index} className="  max-h-32">
              <p className="font-medium">
                1. Wolf on WallStreet towers above all
              </p>
              <div className="grid grid-cols-4">
                <div className="col-span-1 mt-2">
                  <Image
                    className="m-auto rounded-lg hover:rounded-none transition-all duration-300 hover:scale-[500%]  hover:border-2 hover:border-white"
                    src={testImage}
                    alt=""
                  />
                </div>
                <div className="col-span-3 px-2 flex flex-col justify-around">
                  <p className="text-xs">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Enim nisi suscipit beatae consequatur, aliquid autem veniam
                    at nesciunt, eveniet distinctio voluptas in culpa
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
  );
}
