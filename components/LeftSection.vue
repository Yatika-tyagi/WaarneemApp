<!-- Please remove this file from your project -->
<template>

            <section class="w-[45%] ml-[20%]">
                <div class="relative">
                    <p class="leading-[1.2] text-[1.375rem] text-greenLight font-bold pt-3">Filter</p>
                    <div class="w-11 h-1 bg-slate-500 mt-4 mb-6 border-x-grayText absolute top-6"></div>
                </div>
                <br>

                <!-- para and slider -->
                <div class="flex gap-x-10">
                    <p>Filter on price</p>
                    <input type="range" min="0" max="500" value="70">
                </div>
                <br><br>


                <!-- para and button -->
                <div class="flex justify-between">
                    <div class="relative"> 
                        <p class="leading-[1.2] text-[1.375rem] text-greenLight font-bold">Shifts</p>
                        <div class="w-10 h-1 bg-slate-500 mt-4 mb-6 border-x-grayText absolute top-3"></div>
                    </div>
                    <button class=" bg-slate-900 text-white rounded-sm font-bold py-[4px] px-[25px]" v-if="!$store.state.app.addShift" @click="addShift">ADD SHIFTS</button>
                </div>
                <br><br>

                <!-- First Card -->
                <Shifts v-for="(shift, i) in $store.state.app.appointments" :key="i" :shift="shift" />



            </section>
</template>

<script>
export default {
  name: 'LeftSection',
  methods: {
      addShift() {
          this.$store.commit('app/SET_ADD_SHIFT',
           true
        )
      }
  }
}
</script>
