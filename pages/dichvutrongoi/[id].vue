<template>
  <div class="relative">
    <img
      src="/image/trongoi4.png"
      alt=""
      class="w-full h-[400px] object-cover"
    />
    <h1
      class="absolute top-[50%] left-[50%] -translate-1/2 capitalize text-center mb-4"
      style="color: #7a43c1"
    >
      Dịch Vụ Cưới Trọn Gói {{ state.tenDichVu.replace("-", " ") }}
    </h1>
  </div>
  <b-main>
    <b-row class="mt-10">
      <b-col>
        <div class="w-full">
          <img src="/image/studio1.png" alt="" class="w-full" />
        </div>
      </b-col>
      <b-col>
        <h3 class="mb-6" style="color: #7a43c1">
          NGƯỜI PHỤNG SỰ MANG ĐẾN KHỞI ĐẦU HẠNH PHÚC
        </h3>
        <p class="mb-6">
          Hơn 10 năm chăm chút Đám Cưới - Đám Hỏi cho hàng nghìn cặp đôi tại Tp
          HCM và miền Nam, Dịch vụ cưới hỏi Phu Thê nhận thức sứ mệnh vô cùng to
          lớn của mình.
        </p>
        <p class="mb-10">
          Lần đầu còn bỡ ngỡ với cặp đôi, nhưng nó phải thật hoàn hảo. Vì lẽ đó,
          với cam kết mạnh mẽ từ đội ngũ tâm huyết, giàu kinh nghiệm, chúng tôi
          nguyện sẽ đem hết sức mình mang tới khởi đầu viên mãn cho mỗi cặp đôi.
        </p>
        <p>Các bạn chỉ cần Hạnh Phúc - đám cưới Long Lanh cứ để Phu Thê lo!</p>
      </b-col>
    </b-row>
    <div class="mt-10">
      <h3 class="uppercase fw600 text-center" style="color: #7a43c1">
        Gói Dịch vụ
      </h3>
      <b-row class="mt-4">
        <b-col span="6" :md="3" class="h-auto">
          <b-card
            class="hover:shadow-lv3 h-full flex flex-col justify-between h-full"
            body-class="h-full  flex flex-col justify-between"
          >
            <div>
              <h5 class="uppercase fw600 text-center" style="color: #7a43c1">
                Gói minimum
              </h5>
              <p class="text-center fw-600 mb-2">1.500.00 / bàn</p>
              <p class="flex items-center">
                <b-icon><Dot /></b-icon>Rạp cưới
              </p>
              <p class="flex items-center">
                <b-icon><Dot /></b-icon>Trang trí gia tiên
              </p>
              <p class="flex items-center">
                <b-icon><Dot /></b-icon>Âm thanh, MC
              </p>
              <p class="flex items-center">
                <b-icon><Dot /></b-icon>Ẩm thực
              </p>
            </div>
            <b-button
              small
              class="w-full mt-4"
              @click="handleDatGoi(' Gói Minimum')"
              >ĐẶT GÓI</b-button
            >
          </b-card>
        </b-col>
        <b-col span="6" :md="3" class="h-auto">
          <b-card
            class="hover:shadow-lv3 h-full flex flex-col justify-between h-full"
            body-class="h-full  flex flex-col justify-between"
          >
            <div>
              <h5 class="uppercase fw600 text-center" style="color: #7a43c1">
                Gói gold
              </h5>
              <p class="text-center fw-600 mb-2">1.500.00 / bàn</p>
              <p class="flex items-center">
                <b-icon><Dot /></b-icon>Rạp cưới
              </p>
              <p class="flex items-center">
                <b-icon><Dot /></b-icon>Trang trí gia tiên
              </p>
              <p class="flex items-center">
                <b-icon><Dot /></b-icon>Trang trí sân khấu
              </p>
              <p class="flex items-center">
                <b-icon><Dot /></b-icon>Âm thanh, MC
              </p>
              <p class="flex items-center">
                <b-icon><Dot /></b-icon>Ẩm thực
              </p>
            </div>
            <b-button
              small
              class="w-full mt-4"
              @click="handleDatGoi('Gói Gold')"
              >ĐẶT GÓI</b-button
            >
          </b-card>
        </b-col>
        <b-col span="6" :md="3" class="h-auto">
          <b-card
            class="hover:shadow-lv3 h-full flex flex-col justify-between h-full"
            body-class="h-full  flex flex-col justify-between"
          >
            <div>
              <h5 class="uppercase fw600 text-center" style="color: #7a43c1">
                Gói LUXURY
              </h5>
              <p class="text-center fw-600 mb-2">1.500.00 / bàn</p>
              <p class="flex items-center">
                <b-icon><Dot /></b-icon>rạp cưới
              </p>
              <p class="flex items-center">
                <b-icon><Dot /></b-icon>Trang trí gia tiên
              </p>
              <p class="flex items-center">
                <b-icon><Dot /></b-icon>Trang trí sân khấu
              </p>
              <p class="flex items-center">
                <b-icon><Dot /></b-icon>trang phục cô dâu
              </p>
              <p class="flex items-center">
                <b-icon><Dot /></b-icon>Âm thanh, MC
              </p>
              <p class="flex items-center">
                <b-icon><Dot /></b-icon>Ẩm thực
              </p>
            </div>
            <b-button
              small
              class="w-full mt-4"
              @click="handleDatGoi('Gói Luxury')"
              >ĐẶT GÓI</b-button
            >
          </b-card>
        </b-col>
        <b-col span="6" :md="3" class="h-auto">
          <b-card
            class="hover:shadow-lv3 h-full flex flex-col justify-between h-full"
            body-class="h-full  flex flex-col justify-between"
          >
            <div>
              <h5 class="uppercase fw600 text-center" style="color: #7a43c1">
                Gói Vip
              </h5>
              <p class="text-center fw-600 mb-2">1.500.00 / bàn</p>
              <p class="flex items-center">
                <b-icon><Dot /></b-icon>rạp cưới
              </p>
              <p class="flex items-center">
                <b-icon><Dot /></b-icon>Trang trí gia tiên
              </p>
              <p class="flex items-center">
                <b-icon><Dot /></b-icon>Trang trí sân khấu
              </p>
              <p class="flex items-center">
                <b-icon><Dot /></b-icon>chụp hình
              </p>
              <p class="flex items-center">
                <b-icon><Dot /></b-icon>trang phục cô dâu, chú rễ, phù dâu, phù
                rễ
              </p>
              <p class="flex items-center">
                <b-icon><Dot /></b-icon>ban nhạc, màn led
              </p>
              <p class="flex items-center">
                <b-icon><Dot /></b-icon>Âm thanh, MC
              </p>
              <p class="flex items-center">
                <b-icon><Dot /></b-icon>Ẩm thực
              </p>
            </div>
            <b-button small class="w-full mt-4" @click="handleDatGoi('Gói Vip')"
              >ĐẶT GÓI</b-button
            >
          </b-card>
        </b-col>
      </b-row>
    </div>
  </b-main>

  <b-dialog v-model="state.dialogVisible" title="Thông Tin Của Bạn">
    <b-form @submit.prevent="handleSubmit">
      <b-row>
        <b-col span="6">
          <b-form-item label="Họ tên">
            <b-input
              v-model.trim="state.infoBook.name"
              placeholder="Họ tên"
              clearable
            />
          </b-form-item>
        </b-col>
        <b-col span="6">
          <b-form-item label="Số điện thoại">
            <b-input
              v-model.trim="state.infoBook.phone"
              placeholder="Nhập số điện thoại của bạn"
              clearable
            />
          </b-form-item>
        </b-col>
        <b-col span="6">
          <b-form-item label="Ngày book dịch vụ">
            <b-date-picker
              v-model.trim="state.infoBook.date"
              type="date"
              placeholder="Ngày book dịch vụ"
            />
          </b-form-item>
        </b-col>
        <b-col span="6">
          <b-form-item label="Địa chỉ của bạn">
            <b-input
              v-model.trim="state.infoBook.address"
              placeholder="Nhập địa chỉ của bạn"
              clearable
            />
          </b-form-item>
        </b-col>
        <b-col span="6">
          <b-form-item label="Gói dịch vụ">
            <b-input
              v-model.trim="state.infoBook.package"
              placeholder="Gói dịch vụ"
              clearable
            />
          </b-form-item>
        </b-col>
      </b-row>
    </b-form>
    <template #footer>
      <div class="flex justify-end">
        <b-button class="mr-4" @click="state.dialogVisible = false"
          >Quay Lại</b-button
        >
        <b-button type="primary" @click="handleSubmit">Hoàn Tất</b-button>
      </div>
    </template>
  </b-dialog>

  <b-dialog
    xsmall
    center
    v-model="state.dialogSuccess"
    :show-close="false"
    header-class="p-0"
  >
    <div class="text-center">
      <b-lottie
        url="/lottiefiles/succes.json"
        :width="200"
        :height="200"
        class="m-auto"
      />
      <p class="text-2xl mb-6">Bạn đã lên lịch thành công!</p>
      <b-button class="w-full" @click="router.push('/')">Trang chủ</b-button>
      <b-button class="w-full" @click="handleSucces">Xem lịch</b-button>
    </div>
  </b-dialog>
</template>

<script setup lang="ts">
import { Dot } from "@bigin/icons-vue";
const route = useRoute();
const router = useRouter();

const state = reactive({
  tenDichVu: "",
  dialogVisible: false,
  dialogSuccess: false,
  infoBook: {
    name: "",
    phone: "",
    date: "",
    address: "",
    package: "",
  },
});

state.tenDichVu = route.params.id as string;

const handleSubmit = () => {
  state.dialogVisible = false;
  localStorage.setItem("booking", JSON.stringify(state.infoBook));
  state.dialogSuccess = true;
};

const handleDatGoi = (val: string) => {
  state.dialogVisible = true;
  state.infoBook.package = val;
};

const handleSucces = () => {
  state.dialogSuccess = false;
  router.push("/lichdat");
};
</script>

<style scoped></style>
