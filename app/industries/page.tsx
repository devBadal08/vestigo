export default function IndustriesPage() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      <h1 className="text-3xl md:text-4xl font-semibold text-[#1C2A7D] mb-6">
        Industries We Serve
      </h1>

      <p className="text-gray-600 max-w-3xl mb-10">
        We work with organizations across multiple industries, delivering
        tailored solutions that meet real business needs.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          "Insurance",
          "Healthcare",
          "Finance",
          "Technology",
          "Manufacturing",
          "Retail",
        ].map((item) => (
          <div
            key={item}
            className="border rounded-lg p-6 hover:shadow-md transition"
          >
            <h3 className="text-lg font-semibold mb-2">{item}</h3>
            <p className="text-sm text-gray-600">
              Customized solutions designed specifically for the {item.toLowerCase()} industry.
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
