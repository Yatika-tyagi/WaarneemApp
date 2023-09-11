<!-- Please remove this file from your project -->
<template>

<div class="border-solid border shadow-2xl min-h-full w-[25%]" v-if="$store.state.app.addShift">
                <div class="mx-auto w-[90%]">

                    <div class="relative">
                        <p class="leading-[1.2] text-[1.375rem] text-greenLight font-bold pt-3">Create/Edit</p>
                        <div class="w-12 h-1 bg-slate-500 mt-4 mb-6 border-x-grayText absolute top-6"></div>
                    </div>

                    <br>
                    <p>Title</p>
                    <input class="p-2 mt-1 border-2" type="text" name="name"  v-model="shift.title" placeholder="West Manhatten - dayshifts" size="38" />

                    
                    <p class="mt-4">Description</p>
                    <textarea class="p-2 mt-1 border-2 rounded-sm" v-model="shift.description" name="message" id="" cols="40" rows="5" placeholder="West Manhatten - dayshifts"></textarea>

                    
                    <p class="mt-4">Dates</p>
                    <input type="date" v-model="shift.date" class="mt-2 w-full border-2 p-2">
                    <br><br>

                    <!-- Card 1 -->
                    <div v-if="shift.date" class="flex justify-between">
                        <p class="font-bold">{{shift.date}}</p>
                        <i class="fa-solid fa-x"></i>
                    </div>
                    
                    <div v-if="shift.date" class="bg-gray-600 w-full pb-1">
                        
                        <div class="flex justify-between mt-2 p-2">
                            <div>
                                <p class="text-white">Start Time</p>
                                <span ><input type="text" size="5" v-model="shift.start" placeholder="08:00" class="pl-1"> <i class="fa-regular fa-clock"></i> </span>
                            </div>
                            
                            <div>
                                <p class="text-white">End Time</p>
                                <span ><input type="text" size="5" v-model="shift.end" placeholder="12:00" class="pl-1"> <i class="fa-regular fa-clock"></i> </span>
                            </div>
        
                            <div>
                                <p class="text-white">Price</p>
                                <span ><input type="text" v-model="shift.price" size="5" placeholder="74" class="pl-2"> <i class="fa-solid fa-euro-sign"></i> </span>
                            </div>
                            
                        </div>

                        <p class="mt-4 ml-2 text-white">Type</p>

                        <form class="mt-2 mb-4 ">
                            <select v-model="shift.consultationType" class="w-[95%] mx-auto ml-2 rounded-sm p-1">
                            <option value="Consultation">Consultation</option>
                            <option value="Telephone">Telephone</option>
                            <option value="Ambulance">Ambulance</option>
                            </select>
                        </form>
                    </div>


                    <br>
                    <!-- buttons -->
                    <div class="flex justify-between mt-14 mb-5">
                        <button class=" text-green-700 rounded-sm border-xl font-bold py-[4px] px-[50px] border-solid border-2 border-green-700 ">DELETE</button>
                        <button class=" bg-slate-900 text-white rounded-sm font-bold py-[4px] px-[50px]" @click='add' v-if="shift.title && shift.description && shift.date && shift.price">SAVE</button>
                    </div>
                    

                </div>
            </div>
</template>

<script>
export default {
  name: 'RightSection',
  data() {
      return {
          shift: {
              title: '',
              description: '',
              date: '',
              consultationType: 'Consultation',
              price: '',
              start: '',
              end: '',
          },
          date: new Date()
      }
  },

  methods: {
    add() {
      this.$store.commit('app/SET_APPOINTMENT', 
        this.shift
      )
      this.shift = {
              title: '',
              description: '',
              date: '',
              consultationType: 'Consultation',
              price: '',
              start: '',
              end: '',
          }
          this.$store.commit('app/SET_ADD_SHIFT',
           this.$store.state.app.addShift = !this.$store.state.app.addShift
        )
    },
    datePick() {

    }

  },
  watch: {
    selected() {

    }
  },
}
</script>
