'use client';
import Image from 'next/image';

export default function Schedule() {
  return (
    <div className="min-h-screen bg-brand-cream">
      <div className="w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[90vh]">
          {/* Left Side */}
          <div className="relative h-[60vh] lg:h-auto">
            <Image
              src="/black-woman-skin.jpg"
              alt="Spa towel and lavender"
              fill
              className="object-cover w-full h-full"
              priority
            />
            <div className="absolute inset-0 bg-black bg-opacity-10 px-12 py-20 flex flex-col justify-center items-center text-center">
              <h1 className="text-5xl md:text-6xl text-white font-serif drop-shadow-lg text-center px-6">
                Book an Appointment
              </h1>
              <p className="text-white text-2xl max-w-md mt-10 bg-opacity-60">
              Compassionate care, wherever you are. Choose your service and let our team come to you — no stress, no travel, just personalized wellness.
            </p>
            </div>
          </div>
          

          {/* Right Side - Booking Options */}
          <div className="bg-white px-6 md:px-12 py-20 w-full flex justify-center items-start">
            <div className="w-full max-w-lg mx-auto">
              <div className="mb-10 text-center">
                <h3 className="text-3xl font-serif text-brand-teal font-semibold flex items-center justify-center mb-2">
                  <span className="mr-3">📅</span> Select Appointment
                </h3>
              </div>

              <div className="space-y-4 text-left">
                {[
                  { title: 'Haircut & Style', time: '1–2 hrs', url: '562VKQZPFWQWJYQP6PB62BB4' },
                  { title: 'Hair Wash & Dry', time: '30 min', url: '3CVYSN6G4JNBTWNOMGUVOOGL' },
                  { title: 'Manicure', time: '1 hr', url: 'PWRZYYU4NNCJW5U5ZKQFTMUP' },
                  { title: 'Pedicure', time: '1 hr 15 min', url: '27ISAGC2DLEKRNPVE2F3K5D3' },
                  { title: 'Manicure & Pedicure', time: '2 hrs', url: 'BTJYVLUIN7T3X35LDNVYTJG2' },
                  { title: 'Nail Polish Removal Only', time: '15 mins', url: 'OYNXVNFLKXWOAXWUNGACPVIW' },
                  { title: 'Massage', time: '30 / 60 mins', url: 'VNH3CHTGGBT3BE3RJKKPEAVR' },
                  { title: 'Make-up Application', time: '30 mins', url: 'GA5NBQW756YB34WHYJ22JXR4' },
                  { title: 'Facial/Skin Care', time: '30 mins', url: '2CN4QK6W6QXNF2VY6Q6QPT7T' },
                ].map(({ title, time, url }) => (
                  <div
                    key={title}
                    className="flex justify-between items-center p-6 bg-white rounded-lg border border-gray-200 shadow-sm min-h-[100px]"
                  >
                    <div>
                      <div className="text-lg font-semibold text-brand-teal">{title}</div>
                      <div className="text-sm text-gray-500">{time}</div>
                    </div>
                    <a
                      href={`https://book.squareup.com/appointments/y8n5jyfz46vqjw/location/LJ12CBF1HQJYB/services/${url}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <button className="bg-brand-yellow hover:bg-brand-teal hover:text-white text-brand-teal font-medium px-5 py-3 text-sm rounded transition-all duration-300">
                        BOOK
                      </button>
                    </a>
                  </div>
                ))}
              </div>

              <div className="mt-12 text-center">
                <p className="text-xs text-gray-500">Powered by</p>
                <p className="text-sm font-medium text-brand-teal">Square Appointments</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
