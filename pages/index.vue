<template>
  <div>
    <div class="h[400px] w-full relative">
      <div class="h-full">
        <img
          src="/image/banner.png"
          alt="banner"
          class="h-full w-full object-cover"
        />
      </div>
      <div class="absolute top-[50%] left-30 max-w-[600px] -translate-y-1/2">
        <h1 class="c-white text-4xl mb-4 tracking-wide">
          Lên kế hoạch cho ngày cưới nhanh chóng và tiết kiệm
        </h1>
        <b-button :suffix-icon="ArrowRight">Bắt đầu</b-button>
      </div>
    </div>
    <b-main>
      <div class="mb-4">
        <div class="flex justify-between items-center">
          <h4 class="c-black">Về Chúng Tôi</h4>
        </div>
        <b-row class="mt-4">
          <b-col>
            <div>
              <img
                src="/image/item1.png"
                class="w-full object-cover rounded-lg"
              />
            </div>
          </b-col>
          <b-col>
            <div>
              <h3 class="mb-6" style="color: #9747ff">
                Wedding Trust Giải Pháp Cho Plan Đám Cưới
              </h3>
              <p>
                Bạn đang chuẩn bị cho ngày cưới của mình và muốn tổ chức một
                tiệc cưới trọn vẹn mà không bỏ lỡ bất cứ chi tiết nào? Hãy để
                Wedding Trust giúp bạn. Chúng tôi là đội ngũ chuyên nghiệp trong
                lĩnh vực booking đám cưới, với nhiều năm kinh nghiệm và đội ngũ
                nhân viên tận tâm, được đào tạo chuyên sâu để cung cấp dịch vụ
                chu đáo và tận tình nhất cho khách hàng. Chúng tôi hiểu rằng sự
                chuẩn bị cho ngày cưới là một công việc đầy áp lực và chúng tôi
                luôn sẵn sàng hỗ trợ bạn từ những bước đầu tiên cho đến khi tiệc
                cưới của bạn hoàn tất. Chúng tôi cung cấp các gói dịch vụ tiệc
                cưới đa dạng và phù hợp với nhu cầu và ngân sách của bạn. Từ
                việc chọn địa điểm đến thiết kế trang trí, cùng với một số hoạt
                động thú vị, chúng tôi cam kết mang đến cho bạn một ngày cưới vô
                cùng đặc biệt và trọn vẹn. Với Wedding Trust, bạn có thể yên tâm
                rằng tiệc cưới của mình sẽ được tổ chức một cách tuyệt vời nhất,
                chi tiết nhất và hoàn hảo nhất. Liên hệ ngay với chúng tôi để
                nhận được sự tư vấn và hỗ trợ tốt nhất cho ngày cưới của bạn.
                Chúng tôi mong muốn được trở thành một phần quan trọng của ngày
                cưới của bạn!
              </p>
            </div>
          </b-col>
        </b-row>
      </div>
      <!-- Dich vu tron goi -->
      <div>
        <div class="flex justify-between items-center">
          <h4 class="c-black">Dịch Vụ Trọn Gói</h4>
          <b-button ghost small :suffix-icon="ArrowRight">Xem thêm</b-button>
        </div>
        <b-row gutter="4" class="mt-4">
          <b-col
            span="6"
            :md="3"
            class="mb-4"
            v-for="item in state.listTronGoi"
            :key="item.id"
          >
            <b-card body-class="p-2" class="hover:shadow-lv3">
              <div
                class="relative w-full rounded-lg overflow-hidden cursor-pointer"
              >
                <img
                  :src="item.image"
                  class="h-[200px] w-full object-cover rounded-lg"
                />
                <b-tag
                  class="absolute top-2 left-2"
                  color="neutral-3"
                  size="small"
                >
                  <b-icon><StarFill /></b-icon>
                  <span>{{ item.star }}</span>
                </b-tag>
                <b-button
                  :icon="Favorite"
                  xsmall
                  rounded
                  class="absolute top-2 right-2 bg-gray-300"
                ></b-button>
              </div>
              <div class="p-3">
                <h5 class="text-md">{{ item.name }}</h5>
                <p class="text-sm mt-2">{{ item.address }}</p>
                <p class="text-sm mt-2">
                  Giá: <span class="fw-600">{{ item.price }}</span>
                </p>
                <b-button
                  small
                  class="w-full mt-6"
                  @click="router.push(`/dichvutrongoi/${item.id}`)"
                  >Liên hệ</b-button
                >
              </div>
            </b-card>
          </b-col>
        </b-row>
      </div>

      <!-- Studio -->
      <div>
        <div class="flex justify-between items-center">
          <h4 class="c-black">Studio</h4>
          <b-button ghost small :suffix-icon="ArrowRight">Xem thêm</b-button>
        </div>
        <b-row gutter="4" class="mt-4">
          <b-col
            span="6"
            :md="3"
            class="mb-4"
            v-for="(item, index) in state.listStudio"
            :key="index"
          >
            <div
              class="w-full rounded-lg overflow-hidden cursor-pointer hover:shadow-lv3"
            >
              <img
                :src="item.image"
                class="h-[200px] w-full object-cover rounded-lg"
              />

              <div class="absolute left-5 bottom-5">
                <h5 class="c-white mb-6">{{ item.name }}</h5>
                <p class="c-gray-3 flex items-center">
                  <b-icon><Location /></b-icon>
                  <span class="ml-1">
                    {{ item.address }}
                  </span>
                </p>
              </div>
            </div>
          </b-col>
        </b-row>
      </div>

      <!-- Trang tri dam cuoi -->
      <div>
        <div class="flex justify-between items-center">
          <h4 class="c-black">Trang Trí Đám Cưới</h4>
          <b-button ghost small :suffix-icon="ArrowRight">Xem thêm</b-button>
        </div>
        <b-row gutter="4" class="mt-4">
          <b-col
            span="12"
            :md="4"
            class="mb-4"
            v-for="(item, index) in state.listTrangTri"
            :key="index"
          >
            <div
              class="relative w-full rounded-lg overflow-hidden cursor-pointer hover:shadow-lv3"
            >
              <img
                :src="item.image"
                class="h-[200px] w-full object-cover rounded-lg"
              />

              <p
                class="absolute bottom-3 left-[50%] -translate-x-1/2 c-white fw600"
              >
                {{ item.title }}
              </p>
            </div>
          </b-col>
        </b-row>
      </div>

      <!-- Cac dich vu khac -->

      <div class="mb-4">
        <div class="flex justify-between items-center">
          <h4 class="c-black">Các Dịch Vụ Khác</h4>
        </div>
        <b-row gutter="4" class="mt-4">
          <b-col v-for="(item, index) in state.listDichVuKhac" :key="index">
            <div
              class="bg-white rounded-lg h-36 flex items-center justify-center flex-col shadow-lv1 cursor-pointer hover:shadow-lv3"
            >
              <img :src="item.icon" />
              <p>{{ item.title }}</p>
            </div>
          </b-col>
        </b-row>
      </div>
    </b-main>
    <div class="bg-gray-2 w-full text-center py-6">
      <div class="flex justify-center items-center">
        <h4 class="c-black" style="color: #9747ff">Thông Tin Liên Hệ</h4>
      </div>
      <div class="mt-4 fw600">
        <b-icon><Phone /></b-icon>: 0777122222
      </div>
      <div class="mt-2 fw600">
        <b-icon><Location /></b-icon>: 138/30 Trương Công Định
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {
  ArrowRight,
  External,
  Favorite,
  Location,
  Search,
  StarFill,
  Phone,
} from "@bigin/icons-vue";
import { useDark } from "@vueuse/core";

const state = reactive({
  searchKey: "",

  listTronGoi: [
    {
      id: "ngoc-anh",
      image: "/image/trongoi1.png",
      name: "Dịch vụ tiệc cưới trọn gói Ngọc Anh",
      address: "Hồ Chí Minh",
      price: "500 triệu",
      star: "4.9",
    },
    {
      id: "ngoc-trinh",
      image: "/image/trongoi2.png",
      name: "Dịch vụ tiệc cưới trọn gói Ngọc Trinh",
      address: "Hà Nội",
      price: "Thương lượng",
      star: "4.9",
    },
    {
      id: "phat-ta",
      image: "/image/trongoi3.png",
      name: "Dịch vụ tiệc cưới trọn gói Phát Tạ",
      address: "Đà nẵng",
      price: "Thương lượng",
      star: "4.9",
    },
    {
      id: "lan-anh",
      image: "/image/trongoi4.png",
      name: "Dịch vụ tiệc cưới trọn gói Lan Anh",
      address: "Nha Trang",
      price: "300 triệu",
      star: "4.9",
    },
  ],

  listStudio: [
    {
      image: "/image/studio1.png",
      name: "Wedding Book Sài Gòn",
      address: "Hồ Chí Minh",
    },
    {
      image: "/image/studio2.png",
      name: "Áo Cưới Lucky Anh & Em",
      address: "Đà Nẵng",
    },
    {
      image: "/image/studio3.png",
      name: "Luka Wedding",
      address: "Đà Lạt",
    },
    {
      image: "/image/studio4.png",
      name: "Shady Bridal Studio",
      address: "Nha Trang",
    },
    // {
    //   image: "/image/studio1.png",
    // },
    // {
    //   image: "/image/studio1.png",
    // },
    // {
    //   image: "/image/studio1.png",
    // },
  ],

  listDichVuKhac: [
    {
      icon: "/image/icon1.png",
      title: "Nhẫn cưới",
    },
    {
      icon: "/image/icon2.png",
      title: "Hoa cưới",
    },
    {
      icon: "/image/icon3.png",
      title: "Thiệp cưới",
    },
    {
      icon: "/image/icon4.png",
      title: "Tuần trăng mật",
    },
    {
      icon: "/image/icon5.png",
      title: "Trang điểm",
    },
    {
      icon: "/image/icon6.png",
      title: "Di chuyển",
    },
    {
      icon: "/image/icon7.png",
      title: "Phong Thủy",
    },
  ],

  listTrangTri: [
    {
      image: "/image/trangtri1.png",
      title: "Sang trọng",
    },
    {
      image: "/image/trangtri2.png",
      title: "Cổ điển",
    },
    {
      image: "/image/trangtri3.png",
      title: "Bãi biển",
    },
  ],
});

const router = useRouter();

useDark();
</script>
