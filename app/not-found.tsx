import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Footer } from "@/components/ui/large-name-footer";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="grid-content flex-grow relative w-full flex items-center justify-center">
        <div className="w-full max-w-7xl mx-auto px-6 md:px-10 py-32 text-center">
          <h1 className="text-9xl font-bold text-black mb-8 opacity-10">404</h1>
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
            Sidan hittades inte
          </h2>
          <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
            Det verkar som att sidan du letar efter har flyttat eller inte existerar längre.
          </p>
          <div className="flex justify-center">
            <Link href="/">
              <button className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white text-lg font-bold border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] transition-all flex items-center gap-2">
                <ArrowLeft size={20} />
                Tillbaka till startsidan
              </button>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
