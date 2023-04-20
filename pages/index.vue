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
          <h4 class="c-black">Tran Trí Đám Cưới</h4>
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

      <div>
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
      title: "Duy chuyển",
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
