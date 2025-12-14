import React from 'react';

export default function TeamSection() {
  const team = [
    {
      name: "Sarah Johnson",
      role: "Chief Executive Officer",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    {
      name: "Michael Carter",
      role: "Head of Engineering",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
      name: "Emily Thompson",
      role: "Product Designer",
      image: "https://randomuser.me/api/portraits/women/65.jpg",
    },
    {
      name: "David Martinez",
      role: "Marketing Lead",
      image: "https://randomuser.me/api/portraits/men/46.jpg",
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto flex flex-col items-center text-center gap-10 px-6">
        {/* Main Heading */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900">
          Our Team
        </h1>

        {/* Subheading */}
        <h2 className="max-w-2xl text-2xl font-semibold md:text-3xl lg:text-4xl text-gray-800">
          Meet the people behind our success
        </h2>

        {/* Subtext */}
        <p className="max-w-2xl text-gray-600 md:text-lg">
          Our talented team works hard to bring you innovative digital solutions with excellence.
        </p>

        {/* Team Cards Grid */}
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4 mt-10 w-full">
          {team.map((member, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center text-center transition hover:-translate-y-1 hover:shadow-lg p-4 rounded-xl"
            >
              <div className="w-36 h-36 rounded-full overflow-hidden shadow-md">
                <img
                  src={member.image}
                  className="w-full h-full object-cover"
                  alt={member.name}
                />
              </div>

              <h3 className="mt-4 text-lg font-semibold text-gray-900">{member.name}</h3>
              <p className="text-gray-600 text-sm">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}