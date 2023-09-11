<!-- Please remove this file from your project -->
<template>

                <div class="w-full max-h-[520px] bg-white rounded-md relative p-10 py-12 border-solid border-2 shadow-2xl">
                    <div class="mx-auto">
                        <div class="flex justify-between">
                            <p class="leading-[1.2] text-[1.375rem] text-greenLight font-bold">{{shift.title}}</p>
                            <i class="fa-solid fa-pen"></i>
                        </div>
    
                        <p class="pt-2">{{shift.description}}</p>
                        <br>
    
                        <p class="leading-[1.2] text-[1.375rem] text-greenLight font-bold pt-2">Dates</p>
                        <!-- 1st colored div -->
                        <div class="mt-4 flex gap-x-14 text-white bg-neutral-600 rounded-sm pl-4 pt-1 pb-1 w-full">
                            <div class="flex gap-x-14">
                                <p>{{shift.date}}</p>
        
                                <div class="flex gap-x-5">
                                    <p>{{shift.start}}</p>
                                    <p>{{shift.end}}</p>
                                </div>
                            </div>
    
                            <div class="flex gap-x-20">
                                <p>{{shift.consultationType}}</p>
                                <p>&#x20AC {{shift.price}}</p>
                            </div>
                        </div>
    
                    </div>
                </div>
</template>

<script>
export default {
  name: 'Shifts',
  props:['shift']
}
</script>
