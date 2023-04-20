<template>
  <div class="flex items-center w-full justify-between">
    <div class="flex items-center">
      <b-button :icon="TeAlignJustify" class="md:hidden" />
      <h1
        @click="router.push('/')"
        class="text-3xl ml-2 c-white-3 cursor-pointer"
        style="
          font-family: cursive;
          font-weight: bold;
          font-size: 25px;
          color: #9747ff;
        "
      >
        <img src="/image/logo.svg" alt="" />
      </h1>
    </div>
    <!-- <div>
      <b-button ghost small @click="router.push('/')">Trang Chủ</b-button>
      <b-dropdown trigger="click">
        <b-button ghost small @click="router.push('nhahang')"
          >Dịch Vụ Nhà Hàng</b-button
        >
        <template>
          <b-button></b-button>
        </template>
      </b-dropdown>
      <b-dropdown trigger="click">
        <b-button ghost small :suffix-icon="ActionDown"
          >Dịch Vụ Chụp Hình Cưới</b-button
        >
        <template #dropdown>
          <b-dropdown-menu>
            <b-dropdown-item>Studio</b-dropdown-item>
            <b-dropdown-item>Ngoại Cảnh</b-dropdown-item>
          </b-dropdown-menu>
        </template>
      </b-dropdown>
      <b-dropdown trigger="click">
        <b-button ghost small :suffix-icon="ActionDown">Thuê Xe</b-button>
        <template #dropdown>
          <b-dropdown-menu>
            <b-dropdown-item @click="router.push('thuexe-hoa')"
              >Thuê xe Hoa</b-dropdown-item
            >
            <b-dropdown-item @click="router.push('thuexe-4cho')"
              >Thuê xe 4 chỗ</b-dropdown-item
            >
            <b-dropdown-item @click="router.push('thuexe-7cho')"
              >Thuê xe 7 chỗ</b-dropdown-item
            >
            <b-dropdown-item @click="router.push('thuexe-16cho')"
              >Thuê xe 16 chỗ</b-dropdown-item
            >
          </b-dropdown-menu>
        </template>
      </b-dropdown>

      <b-dropdown trigger="click">
        <b-button ghost small :suffix-icon="ActionDown">Trang Phục</b-button>
        <template #dropdown>
          <b-dropdown-menu>
            <b-dropdown-item>Váy cô dâu</b-dropdown-item>
            <b-dropdown-item>Váy phù dâu</b-dropdown-item>
            <b-dropdown-item>Vest chú rễ</b-dropdown-item>
          </b-dropdown-menu>
        </template>
      </b-dropdown>

      <b-dropdown trigger="click">
        <b-button ghost small :suffix-icon="ActionDown">
          Tổ Chức Hôn Lễ
        </b-button>
        <template #dropdown>
          <b-dropdown-menu>
            <b-dropdown-item>MC, Âm thanh, Ánh sáng</b-dropdown-item>
            <b-dropdown-item>Rạp cưới</b-dropdown-item>
            <b-dropdown-item>Trang trí gia tiên</b-dropdown-item>
            <b-dropdown-item>Phụ dâu</b-dropdown-item>
            <b-dropdown-item>Phụ rễ</b-dropdown-item>
          </b-dropdown-menu>
        </template>
      </b-dropdown>

      <b-dropdown trigger="click">
        <b-button ghost small :suffix-icon="ActionDown">Lễ Cưới</b-button>
        <template #dropdown>
          <b-dropdown-menu>
            <b-dropdown-item>Mân quả cưới</b-dropdown-item>
            <b-dropdown-item>Makeup</b-dropdown-item>
            <b-dropdown-item>Hoa tươi</b-dropdown-item>
          </b-dropdown-menu>
        </template>
      </b-dropdown>
    </div> -->

    <b-avatar
      name="Huu Binh"
      circle
      gradient
      color-id="V1StGXR8_Z5jdHi6B-myT"
    />
  </div>

  <b-drawer v-model="state.visible" :show-close="false">
    <template #header="{ close, titleId, titleClass }">
      <h4 :id="titleId" :class="titleClass">This is a custom header!</h4>
      <b-button small danger :prefix-icon="Close" @click="close">
        Close
      </b-button>
    </template>
    This is drawer content.
  </b-drawer>
</template>

<script setup lang="ts">
import { Close, TeAlignJustify, ActionDown } from "@bigin/icons-vue";

const state = reactive({
  visible: false,
});

const router = useRouter();
</script>

<style scoped></style>
