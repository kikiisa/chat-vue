
<script setup>
  import { ref,onMounted, reactive } from 'vue';
  import supabase from '../connection';
  import timeAgo from '../utils/time';
import { data } from 'autoprefixer';
  const datas = ref([])
  const chats = reactive({
    message: ''
  })
  async function getTodos() {
    try
    {
      let {data,error} = await supabase.from('chat')
      .select()
      datas.value = data;
    }catch(error)
    {
      console.log(error);
    }
  }
  async function sendChat()
  {
    console.log(chats.message);
    const { data,error } = await supabase
      .from('chat')
      .insert({ content:chats.message })
      if (error) {
        console.error(error)
      } else {
        chats.message = ""
        getTodos()
        console.log(data)
      }
    }
    
  onMounted(() => {
    getTodos()
  });
</script>
<template>
  <div
    class="container mt-20 w-full  sm:w-3/4 md:w-1/2 lg:w-1/3 xl:w-1/4 mx-auto"
  >
    <h1>Chat Hari Ini</h1>
    <hr/>

    <!-- list chat -->
    <div class="flex items-start gap-2.5 mt-4" v-for="item in datas" :key="item.id">
      <img
        class="w-8 h-8 rounded-full"
        src="https://flowbite.com/docs/images/logo.svg"
        alt="Jese image"
      />
      
      <div  class=" flex flex-col gap-1 w-full max-w-[320px]">
        <div class="flex items-center space-x-2 rtl:space-x-reverse">
          <span class="text-sm font-semibold text-gray-900 dark:text-white"
            >Anonim</span
          >
          <span class="text-sm font-normal text-gray-500 dark:text-gray-400"
            >{{ timeAgo(item.created_at) }}</span
          >

        </div>
        <div
          class="flex flex-col leading-1.5 p-4 border-gray-200 bg-gray-100 rounded-e-xl rounded-es-xl dark:bg-gray-700"
        >
          <p class="text-sm font-normal text-gray-900 dark:text-white">
            {{ item.content }}
          </p>
        </div>
      </div>
      <button
        id="dropdownMenuIconButton"
        data-dropdown-toggle="dropdownDots"
        data-dropdown-placement="bottom-start"
        class="inline-flex self-center items-center p-2 text-sm font-medium text-center text-gray-900 bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none dark:text-white focus:ring-gray-50 dark:bg-gray-900 dark:hover:bg-gray-800 dark:focus:ring-gray-600"
        type="button"
      >
        <svg
          class="w-4 h-4 text-gray-500 dark:text-gray-400"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 4 15"
        >
          <path
            d="M3.5 1.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm0 6.041a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm0 5.959a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"
          />
        </svg>
      </button>
      <!-- <div
        id="dropdownDots"
        class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-40 dark:bg-gray-700 dark:divide-gray-600"
      >
        <ul
          class="py-2 text-sm text-gray-700 dark:text-gray-200"
          aria-labelledby="dropdownMenuIconButton"
        >
          <li>
            <a
              href="#"
              class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >Reply</a
            >
          </li>
          <li>
            <a
              href="#"
              class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >Forward</a
            >
          </li>
          <li>
            <a
              href="#"
              class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >Copy</a
            >
          </li>
          <li>
            <a
              href="#"
              class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >Report</a
            >
          </li>
          <li>
            <a
              href="#"
              class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >Delete</a
            >
          </li>
        </ul>
      </div> -->
    </div>
    <!-- end list chat -->
    <!-- input form -->
    <form @submit.prevent="sendChat">
        <div class="mt-4 mb-5 flex">
        <input
          type="text"
          id="text"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-l-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Masukan Pesan Anda"
          required
          v-model="chats.message"
        />
        <button
          type="submit"
          class="bg-blue-500 text-white text-sm rounded-r-lg px-4 py-2 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Send
        </button>
      </div>
      </form>
    <!-- end form -->
  </div>
</template>
