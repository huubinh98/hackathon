<template>
  <b-row>
    <b-col span="3"> </b-col>
    <b-col span="9">
      <b-row>
        <b-col span="4" class="mb-4" v-for="item in finalData" :key="item.id">
          <b-card header-class="p-0 flex border-b-0">
            <template #header>
              <img class="h-[200px] w-full object-cover" :src="item.image" />
            </template>

            <div class="flex items-center justify-between">
              <div class="w-full">
                <h5 class="text-md">{{ item.tenxe }}</h5>
                <p class="text-sm c-neutral-6 mt-2">{{ item.desc }}</p>
                <p class="text-sm c-neutral-6 mt-2">
                  Giá thuê: <span class="fw-600"> {{ item.price }}</span>
                </p>
                <p class="flex items-center">
                  đánh giá:
                  <b-icon class="ml-2" color="red"><StarFill /></b-icon>
                  <b-icon color="red"><StarFill /></b-icon>
                  <b-icon color="red"><StarFill /></b-icon>
                  <b-icon color="red"><StarFill /></b-icon>
                </p>
                <b-button small class="mt-4 w-full"> Chi Tiết </b-button>
              </div>
            </div>
          </b-card>
        </b-col>
      </b-row>
    </b-col>
  </b-row>
</template>

<script setup lang="ts">
import { StarFill } from "@bigin/icons-vue";
import { computed, reactive } from "vue";

const state = reactive({
  listXe: {
    xehoa: [
      {
        id: 1,
        tenxe: "Dịch vụ cho thuê xe hoa Ngọc Anh",
        image: "/image/xehoa1.jpg",
        star: 5,
        price: "1200000 - 5000000",
        desc: "Dịch vụ cho thuê xe hoa Ngọc Anh chuyên nghiệp",
      },
      {
        id: 2,
        tenxe: "Dịch vụ cho thuê xe hoa Hải Hoàng",
        image: "/image/xehoa2.jpg",
        star: 4,
        price: "1200000 - 5000000",
        desc: "Dịch vụ cho thuê xe hoa Ngọc Anh chuyên nghiệp",
      },
      {
        id: 3,
        tenxe: "Dịch vụ cho thuê xe hoa Bình Trần",
        image: "/image/xehoa3.png",
        star: 4,
        price: "1200000 - 5000000",
        desc: "Dịch vụ cho thuê xe hoa Ngọc Anh chuyên nghiệp",
      },
      {
        id: 4,
        tenxe: "Dịch vụ cho thuê xe hoa Phát Tạ",
        image: "/image/xehoa4.jpg",
        star: 4,
        price: "1200000 - 5000000",
        desc: "Dịch vụ cho thuê xe hoa Ngọc Anh chuyên nghiệp",
      },
      {
        id: 5,
        tenxe: "Dịch vụ cho thuê xe hoa My Trần",
        image: "/image/xehoa5.jpg",
        star: 5,
        price: "1200000 - 5000000",
        desc: "Dịch vụ cho thuê xe hoa Ngọc Anh chuyên nghiệp",
      },
      {
        id: 6,
        tenxe: "Dịch vụ cho thuê xe hoa Hương Nguyễn",
        image: "/image/xehoa6.jpg",
        star: 4,
        price: "1200000 - 5000000",
        desc: "Dịch vụ cho thuê xe hoa Ngọc Anh chuyên nghiệpg",
      },
      {
        id: 7,
        tenxe: "Dịch vụ cho thuê xe hoa Hải Anh",
        image: "/image/xehoa7.jpg",
        star: 5,
        price: "1200000 - 5000000",
        desc: " xe hoa 7 đời 2078 thiết kế sang trọng",
      },
      {
        id: 8,
        tenxe: "Dịch vụ cho thuê xe hoa Đinh Dũng",
        image: "/image/xehoa8.jpg",
        star: 4,
        price: "1200000 - 5000000",
        desc: " xe hoa 8 đời 2088 thiết kế sang trọng",
      },
    ],
    xe4cho: [
      {
        id: 1,
        tenxe: "Xe hoa 1",
        image: "/image/xe4cho1.webp",
        price: 2000000,
        star: 4,
        desc: " xe hoa 1 đời 2018 thiết kế sang trọng",
      },
      {
        id: 2,
        tenxe: "Xe hoa 2",
        image: "/image/xe4ch2.jpg",
        price: 2000000,
        star: 4,
        desc: " xe hoa 2 đời 2018 thiết kế sang trọng",
      },
      {
        id: 3,
        tenxe: "Xe hoa 3",
        image: "/image/xe4cho3.jpg",
        price: 2000000,
        star: 4,
        desc: " xe hoa 3 đời 2038 thiết kế sang trọng",
      },
      {
        id: 4,
        tenxe: "Xe hoa 4",
        image: "/image/xe4ch4.jpg",
        price: 2000000,
        star: 4,
        desc: " xe hoa 4 đời 2048 thiết kế sang trọng",
      },
      {
        id: 5,
        tenxe: "Xe hoa 5",
        image: "/image/xe4ch5.jpg",
        price: 2000000,
        star: 4,
        desc: " xe hoa 5 đời 2058 thiết kế sang trọng",
      },
    ],
    xe7cho: [
      {
        id: 1,
        tenxe: "Xe hoa 1",
        image: "/image/xe7cho1.png",
        price: 2000000,
        star: 4,
        desc: " xe hoa 1 đời 2018 thiết kế sang trọng",
      },
      {
        id: 2,
        tenxe: "Xe hoa 2",
        image: "/image/xe7cho2.jpg",
        price: 2000000,
        star: 4,
        desc: " xe hoa 2 đời 2018 thiết kế sang trọng",
      },
      {
        id: 3,
        tenxe: "Xe hoa 3",
        image: "/image/xe7cho3.jpg",
        price: 2000000,
        star: 4,
        desc: " xe hoa 3 đời 2038 thiết kế sang trọng",
      },
      {
        id: 4,
        tenxe: "Xe hoa 4",
        image: "/image/xe7cho4.jpg",
        price: 2000000,
        star: 4,
        desc: " xe hoa 4 đời 2048 thiết kế sang trọng",
      },
    ],
    xe16cho: [
      {
        id: 1,
        tenxe: "Xe hoa 1",
        image: "/image/xe16cho1.jpg",
        price: 2000000,
        star: 4,
        desc: " xe hoa 1 đời 2018 thiết kế sang trọng",
      },
      {
        id: 2,
        tenxe: "Xe hoa 2",
        image: "/image/xe16cho2.jpg",
        price: 2000000,
        star: 4,
        desc: " xe hoa 2 đời 2018 thiết kế sang trọng",
      },
    ],
  },
});

const route = useRoute();
console.log("route", route);

const finalData = computed(() => {
  console.log("first", route);
  switch (route.path) {
    case "/thuexe-hoa":
      return state.listXe.xehoa;
      break;
    case "/thuexe-4cho":
      return state.listXe.xe4cho;
      break;
    case "/thuexe-7cho":
      return state.listXe.xe7cho;
      break;
    case "/tuexe-16cho":
      return state.listXe.xe16cho;
      break;

    default:
      break;
  }
});
</script>

<style scoped></style>
