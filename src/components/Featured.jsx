import React from 'react';

function Featured() {
  return (
    <>
      <div className='w-full py-20'>
        <div className='w-full px-14'>
          <h1 className='text-6xl font-NeueMontreal'>Featured projects</h1>
        </div>

        {/* DIV FOR TOP BORDER */}
        <div className='w-full border-t-[0.1px] my-12 text-[#212121] opacity-30'></div>

        <div className='cards relative flex gap-5 w-full px-14 cursor-pointer'>
          <div className="cardContainer w-1/2 h-[0vh]">
            <div className='flex items-center gap-2 mb-4'>
              <span className='inline-flex w-2.5 h-2.5 rounded-full bg-[#212121]'></span>
              <span className='uppercase font-NeueMontreal text-sm text-[#212121]'>Salience Labs</span>
            </div>

            <h1 className='absolute left-1/2 top-1/2 z-10 text-9xl font-FoundersGrotesk font-bold uppercase -translate-x-1/2 -translate-y-1/4 text-[#CDEA68]'>{"Salience Labs".split("").map((item, index) => <span className=''>{item}</span>)}
            </h1>
            <div className='card w-full rounded-xl hover:scale-95 transition-all ease-in-out duration-700'>
              <img className='rounded-xl' src="./cardImg1.png" alt="" />
            </div>

            {/* BUTTON ANIMATION */}
            <div className="flex gap-2 mt-5">
              <div>
                <a
                  href="#"
                  onMouseEnter={(e) => {
                    const bg = e.currentTarget.querySelector('.bg-fill');
                    const text = e.currentTarget.querySelector('.button-text');

                    bg.classList.remove('animate-slide-up-out', 'reset-transform');
                    bg.classList.add('animate-slide-up-in');

                    text.classList.add('text-white');
                    text.classList.remove('text-[#212121]');
                  }}
                  onMouseLeave={(e) => {
                    const bg = e.currentTarget.querySelector('.bg-fill');
                    const text = e.currentTarget.querySelector('.button-text');

                    bg.classList.remove('animate-slide-up-in');
                    bg.classList.add('animate-slide-up-out');

                    text.classList.remove('text-white');
                    text.classList.add('text-[#212121]');

                    setTimeout(() => {
                      bg.classList.remove('animate-slide-up-out');
                      bg.classList.add('reset-transform');
                    }, 400);
                  }}
                  className="relative inline-block border-2 border-[#212121] py-1 px-4 rounded-full font-NeueMontreal uppercase text-base overflow-hidden"
                >
                  <span className="button-text relative z-10 text-[#212121]">Brand Identity</span>
                  <span
                    className="bg-fill absolute inset-0 bg-[#212121] z-0 rounded-full pointer-events-none reset-transform"
                    aria-hidden="true"
                  ></span>
                </a>
              </div>

              <div>
                <a
                  href="#"
                  onMouseEnter={(e) => {
                    const bg = e.currentTarget.querySelector('.bg-fill');
                    const text = e.currentTarget.querySelector('.button-text');

                    bg.classList.remove('animate-slide-up-out', 'reset-transform');
                    bg.classList.add('animate-slide-up-in');

                    text.classList.add('text-white');
                    text.classList.remove('text-[#212121]');
                  }}
                  onMouseLeave={(e) => {
                    const bg = e.currentTarget.querySelector('.bg-fill');
                    const text = e.currentTarget.querySelector('.button-text');

                    bg.classList.remove('animate-slide-up-in');
                    bg.classList.add('animate-slide-up-out');

                    text.classList.remove('text-white');
                    text.classList.add('text-[#212121]');

                    setTimeout(() => {
                      bg.classList.remove('animate-slide-up-out');
                      bg.classList.add('reset-transform');
                    }, 400);
                  }}
                  className="relative inline-block border-2 border-[#212121] py-1 px-4 rounded-full font-NeueMontreal uppercase text-base overflow-hidden"
                >
                  <span className="button-text relative z-10 text-[#212121]">Pitch Deck</span>
                  <span
                    className="bg-fill absolute inset-0 bg-[#212121] z-0 rounded-full pointer-events-none reset-transform"
                    aria-hidden="true"
                  ></span>
                </a>
              </div>
            </div>
          </div>

          <div className="cardContainer w-1/2 h-[80vh]">
            <div className='flex items-center gap-2 mb-4'>
              <span className='inline-flex w-2.5 h-2.5 rounded-full bg-[#212121]'></span>
              <span className='uppercase font-NeueMontreal text-sm text-[#212121]'>Cardboard Spaceship</span>
            </div>

            <h1 className='absolute -right-28 top-1/2 z-10 text-9xl font-FoundersGrotesk font-bold uppercase -translate-x-1/2 -translate-y-1/4 text-[#CDEA68]  '>
              {"Cardboard Spaceship".split("").map((item, index) => <span>{item}</span>)}
            </h1>
            <div className='card w-full rounded-xl hover:scale-95 transition-all ease-in-out duration-700'>
              <img className='rounded-xl' src="./cardImg2.png" alt="" />
            </div>

            {/* BUTTON ANIMATION */}
            <div className="flex gap-2 mt-5">
              <div>
                <a
                  href="#"
                  onMouseEnter={(e) => {
                    const bg = e.currentTarget.querySelector('.bg-fill');
                    const text = e.currentTarget.querySelector('.button-text');

                    bg.classList.remove('animate-slide-up-out', 'reset-transform');
                    bg.classList.add('animate-slide-up-in');

                    text.classList.add('text-white');
                    text.classList.remove('text-[#212121]');
                  }}
                  onMouseLeave={(e) => {
                    const bg = e.currentTarget.querySelector('.bg-fill');
                    const text = e.currentTarget.querySelector('.button-text');

                    bg.classList.remove('animate-slide-up-in');
                    bg.classList.add('animate-slide-up-out');

                    text.classList.remove('text-white');
                    text.classList.add('text-[#212121]');

                    setTimeout(() => {
                      bg.classList.remove('animate-slide-up-out');
                      bg.classList.add('reset-transform');
                    }, 400);
                  }}
                  className="relative inline-block border-2 border-[#212121] py-1 px-4 rounded-full font-NeueMontreal uppercase text-base overflow-hidden"
                >
                  <span className="button-text relative z-10 text-[#212121]">Branded Template</span>
                  <span
                    className="bg-fill absolute inset-0 bg-[#212121] z-0 rounded-full pointer-events-none reset-transform"
                    aria-hidden="true"
                  ></span>
                </a>
              </div>

              <div>
                <a
                  href="#"
                  onMouseEnter={(e) => {
                    const bg = e.currentTarget.querySelector('.bg-fill');
                    const text = e.currentTarget.querySelector('.button-text');

                    bg.classList.remove('animate-slide-up-out', 'reset-transform');
                    bg.classList.add('animate-slide-up-in');

                    text.classList.add('text-white');
                    text.classList.remove('text-[#212121]');
                  }}
                  onMouseLeave={(e) => {
                    const bg = e.currentTarget.querySelector('.bg-fill');
                    const text = e.currentTarget.querySelector('.button-text');

                    bg.classList.remove('animate-slide-up-in');
                    bg.classList.add('animate-slide-up-out');

                    text.classList.remove('text-white');
                    text.classList.add('text-[#212121]');

                    setTimeout(() => {
                      bg.classList.remove('animate-slide-up-out');
                      bg.classList.add('reset-transform');
                    }, 400);
                  }}
                  className="relative inline-block border-2 border-[#212121] py-1 px-4 rounded-full font-NeueMontreal uppercase text-base overflow-hidden"
                >
                  <span className="button-text relative z-10 text-[#212121]">Sales Deck</span>
                  <span
                    className="bg-fill absolute inset-0 bg-[#212121] z-0 rounded-full pointer-events-none reset-transform"
                    aria-hidden="true"
                  ></span>
                </a>
              </div>

              <div>
                <a
                  href="#"
                  onMouseEnter={(e) => {
                    const bg = e.currentTarget.querySelector('.bg-fill');
                    const text = e.currentTarget.querySelector('.button-text');

                    bg.classList.remove('animate-slide-up-out', 'reset-transform');
                    bg.classList.add('animate-slide-up-in');

                    text.classList.add('text-white');
                    text.classList.remove('text-[#212121]');
                  }}
                  onMouseLeave={(e) => {
                    const bg = e.currentTarget.querySelector('.bg-fill');
                    const text = e.currentTarget.querySelector('.button-text');

                    bg.classList.remove('animate-slide-up-in');
                    bg.classList.add('animate-slide-up-out');

                    text.classList.remove('text-white');
                    text.classList.add('text-[#212121]');

                    setTimeout(() => {
                      bg.classList.remove('animate-slide-up-out');
                      bg.classList.add('reset-transform');
                    }, 400);
                  }}
                  className="relative inline-block border-2 border-[#212121] py-1 px-4 rounded-full font-NeueMontreal uppercase text-base overflow-hidden"
                >
                  <span className="button-text relative z-10 text-[#212121]">Social Media Templates</span>
                  <span
                    className="bg-fill absolute inset-0 bg-[#212121] z-0 rounded-full pointer-events-none reset-transform"
                    aria-hidden="true"
                  ></span>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className='cards relative flex gap-5 w-full px-14 cursor-pointer mt-36'>
          <div className="cardContainer  w-1/2 h-[0vh]">
            <div className='flex items-center gap-2 mb-4'>
              <span className='inline-flex w-2.5 h-2.5 rounded-full bg-[#212121]'></span>
              <span className='uppercase font-NeueMontreal text-sm text-[#212121]'>AH2 & Matt Horn</span>
            </div>

            <h1 className='absolute left-1/2 top-1/2 z-10 text-9xl font-FoundersGrotesk font-bold uppercase -translate-x-1/2 -translate-y-1/4 text-[#CDEA68]'>{"AH2 & Matt Horn".split("").map((item, index) => <span className=''>{item}</span>)}
            </h1>
            <div className='card w-full rounded-xl hover:scale-95 transition-all ease-in-out duration-700'>
              <img className='rounded-xl' src="./cardImg3.png" alt="" />
            </div>

            {/* BUTTON ANIMATION */}
            <div className="flex gap-2 mt-5">
              <div>
                <a
                  href="#"
                  onMouseEnter={(e) => {
                    const bg = e.currentTarget.querySelector('.bg-fill');
                    const text = e.currentTarget.querySelector('.button-text');

                    bg.classList.remove('animate-slide-up-out', 'reset-transform');
                    bg.classList.add('animate-slide-up-in');

                    text.classList.add('text-white');
                    text.classList.remove('text-[#212121]');
                  }}
                  onMouseLeave={(e) => {
                    const bg = e.currentTarget.querySelector('.bg-fill');
                    const text = e.currentTarget.querySelector('.button-text');

                    bg.classList.remove('animate-slide-up-in');
                    bg.classList.add('animate-slide-up-out');

                    text.classList.remove('text-white');
                    text.classList.add('text-[#212121]');

                    setTimeout(() => {
                      bg.classList.remove('animate-slide-up-out');
                      bg.classList.add('reset-transform');
                    }, 400);
                  }}
                  className="relative inline-block border-2 border-[#212121] py-1 px-4 rounded-full font-NeueMontreal uppercase text-base overflow-hidden"
                >
                  <span className="button-text relative z-10 text-[#212121]">Pitch Deck</span>
                  <span
                    className="bg-fill absolute inset-0 bg-[#212121] z-0 rounded-full pointer-events-none reset-transform"
                    aria-hidden="true"
                  ></span>
                </a>
              </div>
            </div>
          </div>

          <div className="cardContainer relative w-1/2 h-[80vh]">
            <div className='flex items-center gap-2 mb-4'>
              <span className='inline-flex w-2.5 h-2.5 rounded-full bg-[#212121]'></span>
              <span className='uppercase font-NeueMontreal text-sm text-[#212121]'>Fyde</span>
            </div>

            <h1 className='absolute right-3/4 top-1/2 z-10 text-9xl font-FoundersGrotesk font-bold uppercase -translate-x-1/2 -translate-y-1/4 text-[#CDEA68]'>
              {"Fyde".split("").map((item, index) => <span>{item}</span>)}
            </h1>
            <div className='card w-full rounded-xl hover:scale-95 transition-all ease-in-out duration-700'>
              <img className='rounded-xl' src="./cardImg4.png" alt="" />
            </div>

            {/* BUTTON ANIMATION */}
            <div className="flex gap-2 mt-5">
              <div>
                <a
                  href="#"
                  onMouseEnter={(e) => {
                    const bg = e.currentTarget.querySelector('.bg-fill');
                    const text = e.currentTarget.querySelector('.button-text');

                    bg.classList.remove('animate-slide-up-out', 'reset-transform');
                    bg.classList.add('animate-slide-up-in');

                    text.classList.add('text-white');
                    text.classList.remove('text-[#212121]');
                  }}
                  onMouseLeave={(e) => {
                    const bg = e.currentTarget.querySelector('.bg-fill');
                    const text = e.currentTarget.querySelector('.button-text');

                    bg.classList.remove('animate-slide-up-in');
                    bg.classList.add('animate-slide-up-out');

                    text.classList.remove('text-white');
                    text.classList.add('text-[#212121]');

                    setTimeout(() => {
                      bg.classList.remove('animate-slide-up-out');
                      bg.classList.add('reset-transform');
                    }, 400);
                  }}
                  className="relative inline-block border-2 border-[#212121] py-1 px-4 rounded-full font-NeueMontreal uppercase text-base overflow-hidden"
                >
                  <span className="button-text relative z-10 text-[#212121]">
                    Audit
                  </span>
                  <span
                    className="bg-fill absolute inset-0 bg-[#212121] z-0 rounded-full pointer-events-none reset-transform"
                    aria-hidden="true"
                  ></span>
                </a>
              </div>

              <div>
                <a
                  href="#"
                  onMouseEnter={(e) => {
                    const bg = e.currentTarget.querySelector('.bg-fill');
                    const text = e.currentTarget.querySelector('.button-text');

                    bg.classList.remove('animate-slide-up-out', 'reset-transform');
                    bg.classList.add('animate-slide-up-in');

                    text.classList.add('text-white');
                    text.classList.remove('text-[#212121]');
                  }}
                  onMouseLeave={(e) => {
                    const bg = e.currentTarget.querySelector('.bg-fill');
                    const text = e.currentTarget.querySelector('.button-text');

                    bg.classList.remove('animate-slide-up-in');
                    bg.classList.add('animate-slide-up-out');

                    text.classList.remove('text-white');
                    text.classList.add('text-[#212121]');

                    setTimeout(() => {
                      bg.classList.remove('animate-slide-up-out');
                      bg.classList.add('reset-transform');
                    }, 400);
                  }}
                  className="relative inline-block border-2 border-[#212121] py-1 px-4 rounded-full font-NeueMontreal uppercase text-base overflow-hidden"
                >
                  <span className="button-text relative z-10 text-[#212121]">
                    Copywriting
                  </span>
                  <span
                    className="bg-fill absolute inset-0 bg-[#212121] z-0 rounded-full pointer-events-none reset-transform"
                    aria-hidden="true"
                  ></span>
                </a>
              </div>

              <div>
                <a
                  href="#"
                  onMouseEnter={(e) => {
                    const bg = e.currentTarget.querySelector('.bg-fill');
                    const text = e.currentTarget.querySelector('.button-text');

                    bg.classList.remove('animate-slide-up-out', 'reset-transform');
                    bg.classList.add('animate-slide-up-in');

                    text.classList.add('text-white');
                    text.classList.remove('text-[#212121]');
                  }}
                  onMouseLeave={(e) => {
                    const bg = e.currentTarget.querySelector('.bg-fill');
                    const text = e.currentTarget.querySelector('.button-text');

                    bg.classList.remove('animate-slide-up-in');
                    bg.classList.add('animate-slide-up-out');

                    text.classList.remove('text-white');
                    text.classList.add('text-[#212121]');

                    setTimeout(() => {
                      bg.classList.remove('animate-slide-up-out');
                      bg.classList.add('reset-transform');
                    }, 400);
                  }}
                  className="relative inline-block border-2 border-[#212121] py-1 px-4 rounded-full font-NeueMontreal uppercase text-base overflow-hidden"
                >
                  <span className="button-text relative z-10 text-[#212121]">
                    Sales Deck
                  </span>
                  <span
                    className="bg-fill absolute inset-0 bg-[#212121] z-0 rounded-full pointer-events-none reset-transform"
                    aria-hidden="true"
                  ></span>
                </a>
              </div>

              <div>
                <a
                  href="#"
                  onMouseEnter={(e) => {
                    const bg = e.currentTarget.querySelector('.bg-fill');
                    const text = e.currentTarget.querySelector('.button-text');

                    bg.classList.remove('animate-slide-up-out', 'reset-transform');
                    bg.classList.add('animate-slide-up-in');

                    text.classList.add('text-white');
                    text.classList.remove('text-[#212121]');
                  }}
                  onMouseLeave={(e) => {
                    const bg = e.currentTarget.querySelector('.bg-fill');
                    const text = e.currentTarget.querySelector('.button-text');

                    bg.classList.remove('animate-slide-up-in');
                    bg.classList.add('animate-slide-up-out');

                    text.classList.remove('text-white');
                    text.classList.add('text-[#212121]');

                    setTimeout(() => {
                      bg.classList.remove('animate-slide-up-out');
                      bg.classList.add('reset-transform');
                    }, 400);
                  }}
                  className="relative inline-block border-2 border-[#212121] py-1 px-4 rounded-full font-NeueMontreal uppercase text-base overflow-hidden"
                >
                  <span className="button-text relative z-10 text-[#212121]">
                    Slides Design
                  </span>
                  <span
                    className="bg-fill absolute inset-0 bg-[#212121] z-0 rounded-full pointer-events-none reset-transform"
                    aria-hidden="true"
                  ></span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Featured;