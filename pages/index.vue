<template>
  <div class="mx-20">
    <div class="text-center">
      <h1 style="color: #9747ff">Chào mừng bạn đến với Wedding Trust</h1>
      <b-input
        v-model="state.searchKey"
        small
        clearable
        placeholder="Gói dịch vụ bạn muốn tìm kiếm..."
        suffix-class="is-button"
        input-class="fw-600"
        rounded
        class="max-w-[70%] mt-4 mx-auto"
      >
        <template #suffix>
          <b-button primary :icon="Search" small />
        </template>
      </b-input>
    </div>
    <b-row class="mt-6" gutter="4">
      <b-col span="3" class="mb-4">
        <div class="relative w-full rounded-lg overflow-hidden cursor-pointer">
          <img
            src="/image/xehoa1.jpg"
            alt=""
            class="h-[200px] w-full object-cover"
          />
          <p
            class="absolute bottom-4 left-0 c-white text-md fw-600 text-center px-4"
          >
            Vendor A - Nhà cái địa điểm đến từ Đông Lào
          </p>
        </div>
      </b-col>
      <b-col span="3" class="mb-4">
        <div class="relative w-full rounded-lg overflow-hidden cursor-pointer">
          <img
            src="/image/xehoa1.jpg"
            alt=""
            class="h-[200px] w-full object-cover"
          />
          <p
            class="absolute bottom-4 left-0 c-white text-md fw-600 text-center px-4"
          >
            Vendor A - Nhà cái địa điểm đến từ Đông Lào
          </p>
        </div>
      </b-col>
    </b-row>
  </div>
</template>

<script setup lang="ts">
import { External, Search } from "@bigin/icons-vue";
import { useDark } from "@vueuse/core";

const state = reactive({
  searchKey: "",
});

useDark();
</script>
