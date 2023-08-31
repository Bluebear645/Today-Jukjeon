'use client';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

import Monday from './monday';
import Tuesday from './tuesday';
import Wednesday from './wednesday';
import Thursday from './thursday';
import Friday from './friday';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';

export default function MenuList() {
    return (
        <>
            <Swiper pagination={true} modules={[Pagination]} className='MenuList'>
                <SwiperSlide>
                    <Monday />
                </SwiperSlide>
                <SwiperSlide>
                    <Tuesday />
                </SwiperSlide>
                <SwiperSlide>
                    <Wednesday />
                </SwiperSlide>
                <SwiperSlide>
                    <Thursday />
                </SwiperSlide>
                <SwiperSlide>
                    <Friday />
                </SwiperSlide>
            </Swiper>
        </>
    );
}
