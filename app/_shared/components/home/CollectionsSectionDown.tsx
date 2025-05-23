import React, { useEffect, useRef } from "react";
import styles from "../../styles/Home.module.scss";
import classNames from "classnames";
import Link from "next/link";
import { routeConstant } from "routes/constants";
import CustomButton from "components/common/customButton";

interface HomeSectionProps {
  id: string;
}

const CollectionsSectionDown = ({ id }: HomeSectionProps) => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();

      if (rect.top < window.innerHeight && rect.bottom > 0) {
        const scrollProgress = 1 - rect.bottom / window.innerHeight;
        sectionRef.current.style.backgroundPositionY = `${
          50 + scrollProgress * 10
        }%`;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const collections = [
    {
      id: 1,
      name: "Trousers",
      description:
        "Elevate your style with our premium tailored trousers collection.",
      image: "/4.jpg",
      // image: "/bg-12.jpg",
      path: routeConstant.collections.path + "?trousers",
    },
    {
      id: 2,
      name: "Shirts",
      description:
        "Discover our sophisticated shirt collection for every occasion.",
      image: "/5.jpg",
      path: routeConstant.collections.path + "?shirts",
    },
  ];

  return (
    <section
      ref={sectionRef}
      className={classNames(
        styles.collectionsSection,
        "relative bg-brand-950 overflow-hidden min-h-screen"
      )}
      id="collectionsDown"
    >
      <div className="w-full h-full">
        <div className="flex flex-col md:flex-row w-full h-full">
          {collections.map((collection, index) => (
            <div
              key={collection.id}
              className="w-full md:w-1/2 relative group min-h-[50vh] md:h-full"
            >
              <div
                className="relative h-full overflow-hidden animate-fade-in opacity-0"
                style={{
                  animationDelay: `${0.2 * (index + 1)}s`,
                  backgroundImage: `url(${collection.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
                <div className="absolute inset-x-0 top-10 p-6 md:p-12 text-white transform translate-y-4 transition-transform duration-300 group-hover:translate-y-0">
                  <h3 className="text-2xl md:text-3xl font-serif mb-2">
                    {collection.name}
                  </h3>
                  <p className="text-white/70 mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-left max-w-md">
                    {collection.description}
                  </p>
                </div>

                {/* Mobile-only button*/}
                <div className="md:hidden absolute inset-x-0 bottom-10 p-6 text-center">
                  <Link href={collection.path}>
                    <CustomButton title={`Shop ${collection.name}`} />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Desktop-only button */}
        <div className="hidden md:block py-8 text-center absolute inset-x-0 bottom-10 transform -translate-y-1/2 w-fit mx-auto">
          <Link href={routeConstant.collections.path}>
            <CustomButton title="View All Collections" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CollectionsSectionDown;
