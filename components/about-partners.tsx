import { url } from "inspector";
import Image from "next/image";
import ittfLogo from "./../public/logos/ittf_logo.png";
import usattLogo from "./../public/logos/usa_tt_logo.avif";
import texasTableTennisLogo from "./../public/logos/taaf_logo.png";
import doubleTenLogo from "./../public/logos/double_ten_logo.png";
import taiwaneseChamberLogo from "./../public/logos/tcc_logo.png";

const partners = [
  {
    name: "USA Table Tennis",
    logo: usattLogo,
    url: "https://www.teamusa.org/USA-Table-Tennis",
  },
  { name: "ITTF", logo: ittfLogo, url: "https://www.ittf.com/" },
  {
    name: "Texas Table Tennis",
    logo: texasTableTennisLogo,
    url: "https://www.texastabletennis.com/",
  },
  { name: "DFW Chinese Double Ten Celebration Committee", logo: doubleTenLogo, url: "https://sites.google.com/view/dfwdoubletenth" },
  { name: "Taiwanese Chamber of Commerce - Dallas/Fort Worth", logo: taiwaneseChamberLogo, url: "https://gdtcc.net/" },
];

export default function AboutPartners() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-4">
            Affiliated Organizations
          </h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 items-center">
          {partners.map((partner, index) => (
            <div key={index} className="flex justify-center">
              <a href={partner.url} target="_blank" rel="noopener noreferrer">
                <Image
                  src={partner.logo || "./placeholder.svg"}
                  alt={partner.name}
                  width={120}
                  height={60}
                />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
