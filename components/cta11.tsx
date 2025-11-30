interface Cta11Props {
  heading?: string;
  description?: string;
  imageSrc?: string;
  imageAlt?: string;
  buttonText?: string;
  buttonHref?: string;
}

const Cta11 = ({
  heading = "Career with Alight Technologies",
  description = "We always keep our 'GROW MODE' on! We seek young and powerful individuals who are equally excited and curious to break the barriers of stagnancy and adopt novel methodologies!",
  imageSrc = "logo.png",
  imageAlt = "Logo",
}: Cta11Props) => {
  return (
    <section className="py-20">
      <div className="container">
        <div className="flex w-full flex-col gap-16 overflow-hidden rounded-lg p-8 md:rounded-xl lg:flex-row lg:items-center lg:p-12">
          <div className="flex-1">
            <h3 className="mb-3 text-2xl font-semibold md:mb-4 md:text-4xl lg:mb-6">
              {heading}
            </h3>
            <p className="text-muted-foreground max-w-xl lg:text-lg">
              {description}
            </p>
          </div>
          <div className="shrink-0">
            <div className="flex flex-col justify-center gap-4 sm:flex-row sm:items-center">
              <div className="relative h-32 w-32 overflow-hidden rounded-lg sm:h-40 sm:w-40">
                <img src={imageSrc} alt={imageAlt} className="object-cover" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Cta11 };
