import Image from "next/image";

export default function Example() {
  return (
    <div className="wrapper">
      <div className="bg-blue py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <Image
              src="/img.jpeg"
              width={125}
              height={125}
              className="object-cover w-32 h-32 rounded-full"
            />
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Hey I'm Shiva Singh Bagri
            </h2>
            <p className="mt-2 text-lg leading-8 text-gray-600">
              I'm interested in Data and Information. My interest spans from data
              structures and algorithms to data analysis and both discrete and
              statistical algorithms.
            </p>
            <p className="mt-2 text-lg leading-8 text-blue-600">
              Check out my <a href="github.com/Autobot37">Github</a> for more
              information.
            </p>
          </div>
        </div>
        <div></div>
        <div>          
        </div>
      </div>
      <style jsx>{`
        .wrapper {
          width:100%;
          height: 100%;
          background: linear-gradient(45deg,#F17C58, #E94584, #24AADB , #27DBB1,#FFDC18, #FF3706);
          background-size: 600% 100%;
          animation: gradient 16s linear infinite;
          animation-direction: alternate;
      }
      @keyframes gradient {
          0% {background-position: 0%}
          100% {background-position: 100%}
      }

      `}</style>
    </div>


  );
}
