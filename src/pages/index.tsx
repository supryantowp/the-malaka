/* eslint-disable react/no-unescaped-entities */
import * as React from 'react';
import { BsFillCheckCircleFill } from 'react-icons/bs';
import { FiArrowRight, FiDownload } from 'react-icons/fi';
import { IoMdCloseCircle } from 'react-icons/io';
import { MdOutlineDone, MdOutlineSpaceDashboard } from 'react-icons/md';
import SwiperCore, { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/bundle';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { manfaat, pricings, testimonial, usedTechologies } from '@/data/home';

import Button from '@/components/buttons/Button';
import BookCarousel from '@/components/carousels/BookCarousel';
import Layout from '@/components/layout/Layout';
import NextImage from '@/components/NextImage';
import Seo from '@/components/Seo';

SwiperCore.use([Pagination, Navigation]);

export default function HomePage() {
  return (
    <Layout>
      <Seo title='The Malaka - Ebook Landing Page' />
      <section className='bg-dark-primary relative py-20 mb-48 text-white'>
        <div className='layout flex relative justify-between'>
          <div className='space-y-5 sm:w-full md:w-6/12'>
            <h1 className='text-2xl md:text-5xl'>
              Sebuah framework CSS untuk developer yang memiliki phobia terhadap
              CSS
            </h1>
            <p>
              Buku ini akan mengajarkan kamu konsep utility-first pada CSS dan
              diakhiri dengan membangun sebuah website yang responsive dengan
              Tailwind CSS.
            </p>
            <div className='flex space-x-10'>
              <Button className='bg-primary btn-glow px-8 py-3 rounded-full border-0 md:px-8 md:py-4'>
                Beli Sekarang
              </Button>
              <div className='flex space-x-6'>
                <FiDownload className='w-6 h-6' />
                <div>
                  <h5 className='font-bold text-gray-500'>SUDAH TERJUAL</h5>
                  <h3>501,234+</h3>
                </div>
              </div>
            </div>
            <div className='py-5'>
              <h5 className='font-bold text-gray-500'>
                TEKNOLOGI YANG DIGUNAKAN
              </h5>
              <div className='flex items-center py-3 space-x-6'>
                {usedTechologies.map((item) => (
                  <NextImage
                    key={item.alt}
                    src={item.icons}
                    width={item.width}
                    height={item.height}
                    alt={item.alt}
                    objectFit='cover'
                    layout='fixed'
                  />
                ))}
              </div>
            </div>
          </div>
          <NextImage
            src='/images/book.png'
            width='522px'
            height='869px'
            layout='fixed'
            objectFit='cover'
            alt='book'
            className='hidden absolute -top-10 -right-10 z-10 md:block'
          />
        </div>
        <div className='background-shape'></div>
      </section>

      <section className='layout py-10 space-y-8 md:py-20 md:space-y-16'>
        <div className='grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-16'>
          <div className='space-y-2 w-11/12'>
            <h5 className='text-primary font-bold'>BUKU INI UNTUK SIAPA</h5>
            <h3 className='text-3xl'>
              Buku yang cocok dibaca untuk front-end dan back-end, bahkan UI
              designer!
            </h3>
          </div>
          <div className='w-11/12'>
            <p className='text-lg'>
              Buku ini bukan hanya untuk front-end developer yang ingin
              meningkatkan skill, buku ini juga cocok untuk back-end developer
              dan UI designer agar dapat menulis style tanpa harus menulis kode
              CSS dan tanpa mengandalkan front-end developer!
            </p>
          </div>
        </div>
        <div className='grid grid-cols-1 gap-8 md:grid-cols-3'>
          <div className='space-y-3 text-center'>
            <NextImage
              src='/images/card-1.png'
              width='372px'
              height='221px'
              layout='responsive'
              alt='Utility framework'
              objectFit='cover'
            />
            <h3>Utility-First Framework</h3>
            <p className='text-gray-600'>
              Tailwind hadir dengan konsep utility-first. Utility-first artinya
              banyak class-class kecil yang bisa digabung untuk menjadi sebuah
              UI.
            </p>
          </div>
          <div className='space-y-3 text-center'>
            <NextImage
              src='/images/card-2.png'
              width='372px'
              height='221px'
              layout='responsive'
              alt='Utility framework'
              objectFit='cover'
            />
            <h3>Tailwind JIT Engine</h3>
            <p className='text-gray-600'>
              JIT engine akan men-generate utility-class yang kita gunakan saja.
              Ini akan membuat pengalaman pengembangan semakin baik.
            </p>
          </div>
          <div className='space-y-3 text-center'>
            <NextImage
              src='/images/card-3.png'
              width='372px'
              height='221px'
              layout='responsive'
              alt='Unopinionated-Framework'
              objectFit='cover'
            />
            <h3>Unopinionated-Framework</h3>
            <p className='text-gray-600'>
              Tailwind tidak memiliki pra-desain komponen apapun, ini membuat
              desain website yang kita buat menjadi unik.
            </p>
          </div>
        </div>
      </section>

      <section className='bg-primary py-20 text-white'>
        <div className='layout grid grid-cols-1 md:grid-cols-2'>
          <div className='space-y-8 w-full divide-y md:w-8/12'>
            <div className='space-y-2'>
              <h5 className='font-bold'>BUKU INI UNTUK SIAPA</h5>
              <h3 className='text-3xl'>Kata Pengantar Dari Penulis Buku</h3>
            </div>
            <div className='flex pt-8 space-x-4'>
              <NextImage
                src='/images/orang.png'
                alt='Gweh'
                width='50px'
                height='50px'
                layout='fixed'
                objectFit='cover'
              />
              <div>
                <h4>Muhamad Nauval Azhar</h4>
                <p>@mhdnauvalazhar</p>
              </div>
            </div>
          </div>
          <div className='flex-none w-full'>
            <p>
              Tailwind sangat memungkinkan kamu untuk membangun sebuah desain
              website yang unik dan tanpa kamu perlu menulis kode CSS
              sedikitpun. Mungkin kamu akan berpikir bahwa kamu akan membutuhkan
              waktu yang lebih lama ketika membangun sebuah website dengan
              utility-first framework ketimbang dengan framework UIkit. Ya,
              benar. Karena kamu harus memikirkan desain dan mengimplementasikan
              desain tersebut dari awal sendiri. Namun, kamu perlu ingat
              manfaat-manfaat yang diberikan oleh utility-first framework,
              sehingga kamu dapat mempertimbangkannya. Dalam buku ini, kita akan
              mempelajari framework Tailwind CSS. Mulai dari konsep, workflow,
              hingga membuat sebuah website responsive dengan TailwindCSS. Buku
              ini tidak untuk semua orang, setidaknya kamu memahami cara
              mengoperasikan komputer, memahami HTML, memahami CSS, atau bisa
              dibilang kamu sudah pernah membangun website sebelumnya dan ingin
              mempelajari hal baru untuk meningkatkan skill.
            </p>
          </div>
        </div>
      </section>

      <section className='py-20' style={{ backgroundColor: '#EDFCFD' }}>
        <div className='layout flex justify-between'>
          <div className='space-y-8 w-full md:w-6/12'>
            <div className='space-y-2'>
              <h5 className='text-primary font-bold'>MANFAAT BUKU</h5>
              <h5 className='text-3xl'>
                Manfaat yang kamu dapatkan ketika membeli buku Tailwind CSS ini
              </h5>
              <p className='text-gray-500'>
                "Buku itu seperti cermin: kalau yang berkaca padanya adalah
                seorang yang bodoh, engkau tak bisa berharap yang terpantul
                adalah seorang yang jenius." - J.K Rowling
              </p>
            </div>
            <div className='grid grid-cols-1 gap-4'>
              {manfaat.map((item, index) => (
                <div key={index} className='flex items-start space-x-4'>
                  <Button className='p-2 bg-green-400 rounded-full'>
                    <MdOutlineDone />
                  </Button>
                  <p className='text-gray-500'>{item}</p>
                </div>
              ))}
            </div>
          </div>
          <div className='hidden relative items-center w-6/12 md:block'>
            <NextImage
              className='absolute top-10 right-14'
              src='/images/book-2.png'
              width='365px'
              height='518px'
              alt='book 2'
              layout='fixed'
            />
            <div className='absolute -bottom-20'>
              <div className='bg-primary btn-glow grid grid-cols-3 p-5 text-white rounded-3xl divide-x'>
                <div className='px-6'>
                  <h3>19</h3>
                  <h5>Jumlah Chapter</h5>
                </div>
                <div className='px-6'>
                  <h3>253</h3>
                  <h5>Jumlah Halaman</h5>
                </div>
                <div className='px-6'>
                  <h3>60</h3>
                  <h5>Hari Menulis</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='pt-20 pb-0' style={{ backgroundColor: '#EDFCFD' }}>
        <div className='layout flex'>
          <NextImage
            src='/images/stuy-case.png'
            width='479px'
            height='554px'
            layout='fixed'
            alt='study case'
            objectFit='cover'
            className='hidden md:block'
          />
          <div className='space-y-6 w-full md:w-6/12'>
            <div className='space-y-2'>
              <h5 className='text-primary font-bold'>SELAIN ITU</h5>
              <h5 className='text-3xl'>
                Buku dengan studi kasus nyata, juga komunitas yang ramah
              </h5>
              <p className='text-gray-500'>
                Buku ini diakhiri dengan membangun website yang responsive
                dengan Tailwind. Selain itu kamu juga kamu dapat bergabung ke
                komunitas untuk bertanya ketika mengalami kesulitan.
              </p>
            </div>
            <div className='grid grid-cols-1 gap-4'>
              <div className='flex justify-between items-center px-8 py-4 space-x-8 bg-white rounded-3xl'>
                <MdOutlineSpaceDashboard className='text-primary w-9 h-9' />
                <div>
                  <h5 className='text-primary text-lg font-bold'>
                    Live Demo Project
                  </h5>
                  <p className='text-dark-muted'>
                    Lihat live demo project yang akan kamu buat di akhir buku
                    ini.
                  </p>
                </div>
                <Button
                  className='px-3 py-3 rounded-full border-0'
                  style={{ backgroundColor: 'rgba(0, 186, 199, 10%)' }}
                >
                  <FiArrowRight className='text-primary w-6 h-6' />
                </Button>
              </div>
              <div className='flex justify-between items-center px-8 py-4 space-x-8 bg-white rounded-3xl'>
                <MdOutlineSpaceDashboard className='text-primary w-9 h-9' />
                <div>
                  <h5 className='text-primary text-lg font-bold'>
                    Dukungan Komunitas
                  </h5>
                  <p className='text-dark-muted'>
                    Sebuah server Discord berisi teman-teman yang akan membantu
                    kamu.
                  </p>
                </div>
                <Button
                  className='px-3 py-3 rounded-full border-0'
                  style={{ backgroundColor: 'rgba(0, 186, 199, 10%)' }}
                >
                  <FiArrowRight className='text-primary w-6 h-6' />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='py-20' style={{ backgroundColor: '#EDFCFD' }}>
        <div className='layout space-y-10 text-center'>
          <div
            style={{ backgroundColor: '#C6F4F8' }}
            className='text-primary inline-block px-6 py-3 font-bold rounded-full'
          >
            <h5>PRATINJAU</h5>
          </div>
          <div className='space-y-2'>
            <h1 className='mx-auto w-full md:w-10/12'>
              Sebelum membeli, kamu dapat melihat beberapa halaman pratinjau isi
              di dalam buku ini
            </h1>
            <p className='mx-auto w-full text-lg md:w-8/12'>
              Klik pada gambar halaman di sebelah kanan buku untuk melihat lebih
              detail halaman buku tersebut dan membaca isinya.
            </p>
          </div>

          <BookCarousel />
        </div>
      </section>

      <section className='bg-dark-primary py-20 text-white'>
        <div className='layout space-y-10 text-center'>
          <div
            style={{ backgroundColor: 'rgba(198, 244, 248, 10%)' }}
            className='text-primary inline-block px-6 py-3 font-bold rounded-full'
          >
            <h5>HARGA BUKU</h5>
          </div>
          <div className='space-y-2'>
            <h1 className='mx-auto w-full md:w-10/12'>
              Kamu dapat membeli buku fisik atau buku elektronik untuk dibaca di
              perangkat kamu
            </h1>
            <p className='text-dark-muted mx-auto w-full text-lg md:w-8/12'>
              Dilarang memperjualbelikan atau memperbanyak tanpa seizin penulis.
              Hak cipta dilindungi undang-undang.
            </p>
          </div>
          <div className='grid grid-cols-1 gap-8 md:grid-cols-3'>
            {pricings.map(({ title, price, feature }) => (
              <div
                key={title}
                className='text-dark-primary w-ful p-8 space-y-6 text-left bg-white rounded-xl'
              >
                <div>
                  <h5 className='text-primary font-bold'>{title}</h5>
                  <h3>{price}</h3>
                </div>
                <div className='space-y-2'>
                  {feature.map(({ value, isOke }) => (
                    <div className='flex space-x-2' key={value}>
                      {isOke === true ? (
                        <BsFillCheckCircleFill className='w-6 h-6 text-green-500' />
                      ) : (
                        <IoMdCloseCircle className='w-6 h-6 text-red-500' />
                      )}
                      <h5>{value}</h5>
                    </div>
                  ))}
                </div>
                <Button className='bg-primary py-3 w-full rounded-xl'>
                  Beli Sekarang
                </Button>
              </div>
            ))}
          </div>
          <p className='mx-auto w-full md:w-8/12'>
            *Buku digital akan dikirimkan ke alamat email kamu *Buku fisik
            dikirim 7 hari setelah pemesanan
          </p>
        </div>
      </section>

      <section className='py-20'>
        <div className='layout flex items-center space-x-8'>
          <NextImage
            className='hidden md:block'
            src='/images/gwehj.png'
            width='479px'
            height='554px'
            layout='fixed'
            alt='study case'
            objectFit='cover'
          />
          <div className='space-y-6 w-full md:w-6/12'>
            <div className='space-y-2'>
              <h5 className='text-primary font-bold'>PENULIS BUKU</h5>
              <h5 className='text-3xl'>
                Tak kenal maka tak kenal. Berkenalan dengan penulis buku ini
              </h5>
              <p className='text-gray-500'>
                “Halo, saya Nauval. Mungkin nama ini terdengar asing di telinga
                kamu. Namun, kedepannya saya berharap nama ini tidak lagi
                terdengar asing di telinga kamu sebagai orang yang rajin berbagi
                hal-hal baik untuk masyarakat, khususnya dalam ilmu komputer.
                Saya seorang web developer yang masuk kategori
                apa-aja-dikerjain-selagi-ada-manfaat-nya. Meski begitu, saya
                lebih senang fokus di front-end development, karena --menurut
                saya-- ini lebih sederhana saja. Di front-end development pada
                dasarnya hanya perlu menguasai tiga bahasa: HTML, CSS, dan
                JavaScript. Sudah jelas ini sederhana, yang bikin ribet itu kamu
                sendiri, sudah tau kamu cocoknya pake jQuery, malah maksa pake
                React.”
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className='py-20'>
        <div
          className='layout py-20 space-y-10 rounded-xl'
          style={{ backgroundColor: '#EDFCFD' }}
        >
          <div className='flex justify-between px-10'>
            <div className='flex-none space-y-2 w-4/12'>
              <h5 className='text-primary font-bold'>TESTIMONIAL</h5>
              <h3>Apa kata orang-orang yang membaca buku ini?</h3>
            </div>
            <p className='w-6/12'>
              Kalo seandainya kamu belum percaya dengan buku ini maka tidak
              apa-apa, karena yang patut kamu percayai adalah Tuhan. Tapi,
              mungkin beberapa ulasan ini bisa membangkitkan hasratmu untuk
              membeli buku ini.
            </p>
          </div>

          <Swiper
            slidesPerView={3}
            spaceBetween={30}
            loop={true}
            className='swiper-testimonial'
            pagination={{
              clickable: true,
            }}
            navigation={true}
          >
            {testimonial.map(({ name, value, avatar, status }) => (
              <SwiperSlide
                key={name}
                className='text-dark-primary p-8 mx-8 space-y-6 bg-white rounded-xl'
              >
                <p>{value}</p>
                <div className='flex items-center space-x-4'>
                  <NextImage
                    src={avatar}
                    width='50px'
                    height='50px'
                    layout='fixed'
                    alt='gweh'
                  />
                  <div>
                    <h5>{name}</h5>
                    <p className='text-sm'>{status}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      <section className='pb-20'>
        <div className='justify-center space-y-8 text-center'>
          <div
            style={{ backgroundColor: '#C6F4F8' }}
            className='text-primary inline-block px-6 py-3 font-bold rounded-full'
          >
            <h5>BLEI BUKU</h5>
          </div>
          <h1>Anda ingin segera memesan buku ini?</h1>
          <p>Otak Kita butuh asupan nutrisi juga, tidak hanya perut saja. </p>
          <div className='flex justify-center space-x-20'>
            <div className='flex space-x-6'>
              <FiDownload className='w-6 h-6' />
              <div>
                <h5 className='font-bold text-gray-500'>SUDAH TERJUAL</h5>
                <h3>501,234+</h3>
              </div>
            </div>
            <Button className='bg-primary btn-glow px-8 py-3 rounded-full border-0 md:px-8 md:py-4'>
              Beli Sekarang
            </Button>
          </div>
        </div>
      </section>

      <footer className='bg-dark-primary py-20'>
        <div className='layout'>
          <div className='flex justify-between items-center'>
            <div className='flex-none w-6/12 text-white'>
              <h3>Sudah siap meningkatkan skill kamu?</h3>
              <p>
                Mulai belajar hari ini di Multinity, atau dapatkan jawaban atas
                pertanyaan kamu di halaman bantuan.
              </p>
            </div>
            <div className='flex flex-none space-x-6'>
              <Button className='px-8 py-4 text-white bg-gray-800 rounded-xl border-0'>
                Pusat Bantuan
              </Button>
              <Button className='bg-glow bg-primary px-8 py-4 rounded-xl border-0'>
                Mendaftar
              </Button>
            </div>
          </div>
        </div>
      </footer>
    </Layout>
  );
}
