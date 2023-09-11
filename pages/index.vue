<template>
    <!-- Wrapper -->
    <div class="m-0 p-0 box-border overflow-x-hidden h-screen w-screen bg-slate-100">
        <!-- main-section -->
        <div class="flex mb-4 justify-between w-[98%] mx-auto mt-5 bg-white border shadow-2xl">

            <!-- Left Section -->

            <LeftSection/>

            <!-- right Section -->

            <RightSection/>
            

        </div>


    </div>
</template>

<script lang="ts">
import Vue from 'vue'


export default Vue.extend({
  name: 'IndexPage'
})
</script>
