import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";

import styles from "../Fleet/styles.module.scss";

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
                slidesPerView: 4.2,
              },

              1439: {
                slidesPerView: 3.2,
                slidesPerGroup: 2,
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
              <img src="/frota/frota-1.jpg" alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/frota/frota-2.jpg" alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/frota/frota-3.jpg" alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/frota/frota-4.jpg" alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/frota/frota-5.jpg" alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/frota/frota-6.jpg" alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/frota/frota-7.jpg" alt="" />
            </SwiperSlide>

            <SwiperSlide>
              <img src="/frota/frota-8.jpg" alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/frota/frota-9.jpg" alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/frota/frota-10.jpg" alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/frota/frota-11.jpg" alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/frota/frota-12.jpg" alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/frota/frota-13.jpg" alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/frota/frota-14.jpg" alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/frota/frota-15.jpg" alt="" />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
}
