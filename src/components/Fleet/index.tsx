import {
  ArrowLeft,
  ArrowLeftCircle,
  ArrowRight,
  ArrowRightCircle,
} from "react-feather";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
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
              1439: {
                slidesPerView: 1,
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
              <img src="/bus-1.png" alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/bus-1.png" alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/bus-1.png" alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/bus-1.png" alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/bus-1.png" alt="" />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
}
