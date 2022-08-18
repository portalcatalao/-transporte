import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";

import styles from "../Fleet/styles.module.scss";
import Image from "next/image";

export default function Fleet() {
  return (
    <section>
      <div className={styles.fleetContainer}>
        <div className={styles.fleetTitle}>
          <span>CONHEÇA NOSSA FROTA</span>
          <p>
            Atuamos em todo o Brasil. Faça seu orçamento com nossa empresa.
            Temos ônibus, micro-ônibus e táxi.
          </p>
        </div>

        <div className={styles.fleetSwiper}>
          <Swiper
            cssMode={true}
            navigation={true}
            pagination={true}
            mousewheel={true}
            keyboard={true}
            modules={[Navigation, Pagination, Mousewheel, Keyboard]}
            className="mySwiper"
            breakpoints={{
              1919: {
                slidesPerView: 5,
              },

              1439: {
                slidesPerView: 3,
              },

              1024: {
                slidesPerView: 1,
                slidesPerGroup: 2.5,
              },

              768: {
                slidesPerView: 2,
              },

              320: {
                slidesPerView: 1,
                slidesPerGroup: 1,
              },
            }}
          >
            <SwiperSlide>
              <Image src="/bus-1.png" alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <Image src="/bus-1.png" alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <Image src="/bus-1.png" alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <Image src="/bus-1.png" alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <Image src="/bus-1.png" alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <Image src="/bus-1.png" alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <Image src="/bus-1.png" alt="" />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
}
